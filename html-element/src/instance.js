"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_HTMLElement;

	// Temporary geometry objects used in rendering
	const tempRect = new SDK.Rect();
	const tempQuad = new SDK.Quad();

	PLUGIN_CLASS.Instance = class StraniAnelli_HTMLElementInstance extends SDK.IWorldInstanceBase
	{
		constructor(sdkType, inst)	{
			super(sdkType, inst);

			this._webglText = null;
			this._webglTAG = null;
		}

		Release() {
			if (this._webglText) {
				this._webglText.Release();
				this._webglText = null;
			}
			if (this._webglTAG) {
				this._webglTAG.Release();
				this._webglTAG = null;
			}
		}

		OnCreate() {
			this._inst.SetOrigin(0, 0);
		}

		OnPlacedInLayout () {
			this._inst.SetSize(400, 250);
		}

		_MaybeCreateWebGLText(iRenderer, iLayoutView)	{
			// Lazy-create the WebGL text when drawn.
			if (this._webglText)
				return;		// already created

			// Create the IWebGLText from the renderer.
			this._webglText = iRenderer.CreateWebGLText();
			this._webglText.SetFontSize(12);		// 12pt default size

			// By default IWebGLText updates its texture asynchronously. When the texture changes the layout view needs to
			// be redrawn to reflect the change. Use a texture update callback to do this.
			this._webglText.SetTextureUpdateCallback(() => iLayoutView.Refresh());
		}

		_MaybeCreateWebGlTAG(iRenderer, iLayoutView)	{
			if (this._webglTAG)
				return;		// already created

			this._webglTAG = iRenderer.CreateWebGLText();
			this._webglTAG.SetFontSize(10);

			this._webglTAG.SetTextureUpdateCallback(() => iLayoutView.Refresh());
		}

		_GetTempQuad() {
			// _GetTempQuad(iRenderer, iDrawParams)
			//const iLayoutView = iDrawParams.GetLayoutView();
			// const quad = this._inst.GetQuad();
			const quad = this.GetInstance().GetQuad();
			return quad;
		}

		_DrawSfondoAnteprima(iRenderer, iDrawParams) {
			const tempQuad = this._GetTempQuad();
			//const tempQuad = this._inst.GetQuad();
			iRenderer.SetColorFillMode();
			iRenderer.SetColor(this._inst.GetPropertyValue("editorPreviewColor"));
			iRenderer.Quad(tempQuad);
			iRenderer.SetColor(this._inst.GetPropertyValue("editorPreviewBorderColor"));
			iRenderer.PushLineWidth(this._inst.GetPropertyValue("editorPreviewBorderWidth"));
			iRenderer.LineQuad(tempQuad);
			iRenderer.PopLineWidth();
		}

		_DrawSetTesto(iRenderer, iDrawParams) {
			const iLayoutView = iDrawParams.GetLayoutView();
			this._MaybeCreateWebGLText(iRenderer, iLayoutView);

			this._webglText.SetFontSize(this._inst.GetPropertyValue("textSize"));

			const textZoom = iLayoutView.GetZoomFactor();
			this._webglText.SetSize(this._inst.GetWidth(), this._inst.GetHeight(), textZoom);

			const font = this._inst.GetPropertyValue("textFont");
			this.GetProject().EnsureFontLoaded(font);
			this._webglText.SetFontName(font);
			this._webglText.SetText(this._inst.GetPropertyValue("htmlText"));
			this._webglText.SetColor(this._inst.GetPropertyValue("textColor"));
			this._webglText.SetBold(this._inst.GetPropertyValue("textIsBold"));
			this._webglText.SetItalic(this._inst.GetPropertyValue("textIsItalic"));
			this._webglText.SetHorizontalAlignment(this._inst.GetPropertyValue("textHorizontalAlign"));
		}

		_DrawTesto(iRenderer, iDrawParams) {
			const tempQuad = this._GetTempQuad();
			const texture = this._webglText.GetTexture();
			if ( this._inst.GetPropertyValue("editorPreviewShowText") && texture) {
				iRenderer.SetTextureFillMode();
				iRenderer.SetColor(this._inst.GetPropertyValue("textColor"));
				iRenderer.SetTexture(texture);
				iRenderer.Quad3(tempQuad, this._webglText.GetTexRect());
			}
		}

		_DrawSetTag(iRenderer, iDrawParams) {
			const iLayoutView = iDrawParams.GetLayoutView();
			this._MaybeCreateWebGlTAG(iRenderer, iLayoutView);

			this._webglTAG.SetFontSize(10);

			const textZoom = iLayoutView.GetZoomFactor();
			this._webglTAG.SetSize(this._inst.GetWidth(), this._inst.GetHeight(), textZoom);

			this.GetProject().EnsureFontLoaded("Arial");
			this._webglTAG.SetFontName("Arial");

			this._webglTAG.SetText(this._inst.GetPropertyValue("htmlTag"));
			this._webglTAG.SetColor(this._inst.GetPropertyValue("editorPreviewTagColor"));
		}

		_DrawTag(iRenderer, iDrawParams) {
			const tempQuad = this._GetTempQuad();
			const texture = this._webglTAG.GetTexture();
			if ( this._inst.GetPropertyValue("editorPreviewShowTag") && texture ) {
				iRenderer.SetTextureFillMode();
				iRenderer.SetColor(this._inst.GetPropertyValue("editorPreviewTagColor"));
				iRenderer.SetTexture(texture);
				iRenderer.Quad3(tempQuad, this._webglTAG.GetTexRect());

					const left = this._inst.GetX()-4;
					const top = this._inst.GetY()-4;
					const right = this._inst.GetX() + this._webglTAG.GetTextWidth()+8;
					const bottom = this._inst.GetY() + this._webglTAG.GetTextHeight();
					const tempSfondoTag = new SDK.Rect(left, top, right, bottom);
					iRenderer.SetColorFillMode();
					iRenderer.SetColorRgba(0.99, 0.99, 0.99, 1);
					iRenderer.Rect(tempSfondoTag);

					iRenderer.SetColor(this._inst.GetPropertyValue("editorPreviewTagColor"));
					iRenderer.PushLineWidth(2);
					iRenderer.LineRect2(tempSfondoTag);
					iRenderer.PopLineWidth();

					iRenderer.SetTextureFillMode();
					iRenderer.SetColor(this._inst.GetPropertyValue("editorPreviewTagColor"));
					iRenderer.SetTexture(texture);
					iRenderer.Quad3(tempQuad, this._webglTAG.GetTexRect());
				}

		}

		Draw(iRenderer, iDrawParams) {
			this._DrawSfondoAnteprima(iRenderer, iDrawParams);
			this._DrawSetTesto(iRenderer, iDrawParams);
			this._DrawTesto(iRenderer, iDrawParams);

			this._DrawSetTag(iRenderer, iDrawParams);
			this._DrawTag(iRenderer, iDrawParams);
		}



		GetTexture() { }

		IsOriginalSizeKnown()
		{
			return false;
		}

		GetOriginalWidth() {}

		GetOriginalHeight() {}

		OnMakeOriginalSize() {}

		HasDoubleTapHandler()
		{
			return true;
		}

		OnDoubleTap()
		{
			const text = this._inst.GetPropertyValue("htmlText");

			// Use ShowLongTextPropertyDialog() to show the same dialog that is used when clicking the button
			// next to the longtext property.
			SDK.UI.Util.ShowLongTextPropertyDialog(text, SDK.Lang.Get("plugins.stranianelli_htmlelement.properties.htmlText.name"))
			.then(result =>
			{
				if (result === null || result === text)
					return;		// cancelled or no change

				// To make sure this change is undoable, create an undo point before updating the property value.
				this.GetProject().UndoPointChangeObjectInstancesProperty(this._inst, "htmlText");
				this._inst.SetPropertyValue("htmlText", result);
			});
		}

		OnPropertyChanged(id, value) {}

		LoadC2Property(name, valueString)
		{
			return false;		// not handled
		}
	};
}
