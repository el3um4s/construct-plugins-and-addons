"use strict";
{
    C3.Plugins.StraniAnelli_DragAndDropFiles.Acts = {
        SetText(text)
        {
            if (this._text === text) return; // no change
            // Update the locally stored text, and call UpdateElementState().
            // This calls GetElementState() - which contains the button text as part of the state -
            // and then calls UpdateState() in domSide.js with the state object, where the button text
            // is applied to the DOM element.
            this._text = text;
            this.UpdateElementState();
        },

        SetVisible(visibility)
        {
            //if (this._visible === visibility === 0 ? false : true) return; // no change
            this._visible = true;
            if (visibility === 0) this._visible = false;
            if (visibility === 1) this._visible = true;

            this.UpdateElementState();
        },

        SetCssStyle(propertyName, value)
        {
            this.SetElementCSSStyle(propertyName, value)
        },

        ReleaseFile(fileUrl)
        {
            URL.revokeObjectURL(fileUrl);
        },

        SetX(x)
        {
            const b = this.GetWorldInfo();
            b.SetX(x);
        },

        SetY(y)
        {
            const b = this.GetWorldInfo();
            b.SetY(y);
        },

        SetWidth(width)
        {
            const b = this.GetWorldInfo();
            b.SetWidth(width);
        },

        SetHeight(height)
        {
            const b = this.GetWorldInfo();
            b.SetHeight(height);
        },

        ClearFileSelectedAt(index)
        {
            if (this._files.length > index)
            {
                this._files.splice(index, 1)
            }
        },

        ClearAllFiles()
        {
            this._files = [];
        },

        SetAppaerance(backgroundColor, fontColor, border)
        {
            if (this._backgroundColor === backgroundColor &&
                this._color === fontColor &&
                this._border === border) return; // no change

            this._backgroundColor = backgroundColor;
            this._color = fontColor;
            this._border = border;

            this.UpdateElementState();
        },

        SetTooltip(tooltip)
        {
            if (this._tooltip === tooltip) return; // no change
            this._tooltip = tooltip;

            this.UpdateElementState();
        },

        SetFontFace(fontFace, style, weight)
        {
            switch (style)
            {
                case 0:
                    this._style = "normal";
                    break;
                case 1:
                    this._style = "italic";
                    break;
                case 2:
                    this._style = "oblique";
                    break;
                default:
                    this._style = "normal";
                    break;
            }

            switch (weight)
            {
                case 0:
                    this._weight = "normal";
                    break;
                case 1:
                    this._weight = "bold";
                    break;
                case 2:
                    this._weight = "lighter";
                    break;
                case 3:
                    this._weight = "bolder";
                    break;
                default:
                    this._weight = "normal";
                    break;
            }

            this._fontFace = fontFace;

            this.UpdateElementState();
        },

        SetFontSize(size)
        {
            if (this._fontsize === size) return; // no change
            this._fontsize = size;
            this.UpdateElementState();
        },

        SetFontSizeToLayer(size)
        {
            let layerSize = this.GetWorldInfo().GetLayer().LayerToCanvasCss(size, size)[0];
            this._fontsize = layerSize + "pt";
            this.UpdateElementState();
        }
    };
}