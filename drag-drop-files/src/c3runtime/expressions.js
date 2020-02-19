"use strict";
{
    C3.Plugins.StraniAnelli_DragAndDropFiles.Exps = {
        Text()
        {
            // Return the button text. Note this returns a copy of the text stored in the instance,
            // since retrieving the real button text would require an asynchronous message posting
            // from the runtime to the DOM, and expressions must return synchronously.
            return this._text;
        },

        FileUrlAt(index)
        {
            const a = new WeakMap;
            const c = this._GetFileAt(index);
            if (!c) return "";
            let d = a.get(c);
            return d ? d : (d = URL.createObjectURL(c),
            a.set(c, d),
            d)
        },

        FileCount()
        {
            return this._files.length
        },

        FileNameAt(index)
        {
            const b = this._GetFileAt(index);
            return b ? b["name"] || "" : ""
        },

        FileSizeAt(index)
        {
            const b = this._GetFileAt(index);
            return b ? b["size"] || 0 : 0
        },

        FileTypeAt(index)
        {
            const b = this._GetFileAt(index);
            return b ? b["type"] || "" : ""
        },

        X()
        {
            const b = this.GetWorldInfo();
            return b.GetX();
        },

        Y()
        {
            const b = this.GetWorldInfo();
            return b.GetY();
        },

        Width()
        {
            const b = this.GetWorldInfo();
            return b.GetWidth();
        },

        Height()
        {
            const b = this.GetWorldInfo();
            return b.GetHeight();
        },

        BackgroundColor()
        {
            return this._backgroundColor;
        },

        FontColor()
        {
            return this._color;
        },

        Border()
        {
            return this._border;
        },

        FileExtensionAt(index)
        {
            const file = this._GetFileAt(index);
            const nomeFile = file ? file["name"] || "" : ""
            const estensioneFile = nomeFile.slice((Math.max(0, nomeFile.lastIndexOf(".")) || Infinity) + 1);
            return estensioneFile;
        }
    };
}