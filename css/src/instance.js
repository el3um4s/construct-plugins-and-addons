"use strict";
{
    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_InjectCSS_v2;

    PLUGIN_CLASS.Instance = class InjectCSS_v2Instance extends SDK.IWorldInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
            this._webglText = null;
        }

        Release()
        {
            // Release the WebGL text if it was created
            if (this._webglText)
            {
                this._webglText.Release();
                this._webglText = null;
            }
        }

        OnCreate()
        {
            // Default to top-left origin
            this._inst.SetOrigin(0, 0);
        }

        OnPlacedInLayout()
        {
            // Set default size
            this._inst.SetSize(576, 16);
        }


        _UpdateWebGLText(iRenderer, iLayoutView)
        {
            if (!this._webglText) // lazy-create
            {
                const fontsize = 8;
                this._webglText = iRenderer.CreateWebGLText();
                this._webglText.SetFontSize(fontsize);
                if (this._inst.GetPropertyValue("is-local"))
                {
                    this._webglText.SetColorRgb(0.75, 0.40, 0.27);
                }
                else
                {
                    this._webglText.SetColorRgb(0.05, 0.05, 0.05);
                }
                this._webglText.SetTextureUpdateCallback(() => iLayoutView.Refresh());
                this._webglText.SetHorizontalAlignment("left");
                this._webglText.SetVerticalAlignment("center");
            }

            if (this._inst.GetPropertyValue("is-local"))
            {
                this._webglText.SetColorRgb(0.75, 0.40, 0.27);
            }
            else
            {
                this._webglText.SetColorRgb(0.05, 0.05, 0.05);
            }

            const textZoom = iLayoutView.GetZoomFactor();
            this._webglText.SetSize(this._inst.GetWidth(), this._inst.GetHeight(), textZoom);

            this._webglText.SetText(this._inst.GetPropertyValue("css"));
        }


        Draw(iRenderer, iDrawParams)
        {
            const iLayoutView = iDrawParams.GetLayoutView();
            this._UpdateWebGLText(iRenderer, iLayoutView);

            this._inst.ApplyBlendMode(iRenderer);
            iRenderer.SetColorFillMode();

            const quad = this._inst.GetQuad();

            if (this._inst.GetPropertyValue("is-local"))
            {
                iRenderer.SetColorRgba(0.05, 0.05, 0.05, 1);
            }
            else
            {
                iRenderer.SetColorRgba(0.75, 0.40, 0.27, 1);
            }
            iRenderer.Quad(quad);

            const texture = this._webglText.GetTexture();
            if (!texture) return; // not yet loaded WebGLText - just ignore and skip rendering text, it'll appear momentarily

            iRenderer.SetTextureFillMode();
            iRenderer.SetTexture(texture);
            iRenderer.ResetColor();
            iRenderer.Quad3(quad, this._webglText.GetTexRect());
        }

        OnPropertyChanged(id, value)
        {}

        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}