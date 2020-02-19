"use strict";

{
    // NOTE: use a unique DOM component ID to ensure it doesn't clash with anything else.
    // This must also match the ID in plugin.js and domSide.js.
    const DOM_COMPONENT_ID = "stranianelli_draganddropfiles";

    // NOTE: DOM instances derive from C3.SDKDOMInstanceBase, not C3.SDKWorldInstanceBase.
    C3.Plugins.StraniAnelli_DragAndDropFiles.Instance = class StraniAnelli_DragAndDropFiles_Instance extends C3.SDKDOMInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst, DOM_COMPONENT_ID);

            // Keep a copy of the button text on the instance, so it can be returned from an expression.
            this._text = "Drag & Drop files here";
            this._accept = "";
            this._id = "";
            this._visible = true;
            this._fontsize = "12pt";

            this._files = [];

            this._backgroundColor = "#F8F8F8";
            this._color = "#404040";
            this._border = "4px dashed #808080";
            this._tooltip = "";

            this._style = "normal";
            this._weight = "normal";
            this._fontFace = "sans-serif";


            this._conditions_onDragOver = false;
            this._conditions_onMouseOver = false;


            if (properties)
            {
                this._text = properties[0];
                this._accept = properties[1];
                this._visible = properties[2];
                this._fontsize = properties[3];
                this._id = properties[4];
            }

            // Create an element for this instance. The runtime handles this and will result in a call
            // to CreateElement() in domSide.js where the real DOM calls are made.
            this.CreateElement(
            {
                "id": this._id,
                "fontsize": this._fontsize,
                "text": this._text,
                "accept": this._accept,
                "visible": this._visible,
                "backgroundColor": this._backgroundColor,
                "color": this._color,
                "border": this._border,
                "tooltip": this._tooltip,
                "style": this._style,
                "wight": this._weight,
                "fontFace": this._fontFace

            });
        }

        Release()
        {
            super.Release();
        }

        GetElementState()
        {
            // Return JSON with the state of the element. This is passed along to both CreateElement()
            // and UpdateState() in domSide.js. It provides a convenient way to send all the DOM element
            // state in one go, ensuring any changes are reflected in the real element.
            return {
                "id": this._id,
                "fontsize": this._fontsize,
                "text": this._text,
                "accept": this._accept,
                "visible": this._visible,
                "backgroundColor": this._backgroundColor,
                "color": this._color,
                "border": this._border,
                "tooltip": this._tooltip,
                "style": this._style,
                "wight": this._weight,
                "fontFace": this._fontFace
            };
        }


        _GetFileAt(a)
        {
            return a = Math.floor(a),
            0 > a || a >= this._files.length ? null : this._files[a]
        }

        // Called when the button is clicked. This is done by attaching a "click" handler in domSide.js
        // which calls PostToRuntimeElement() to send a "click" message to the plugin. The plugin then
        // forwards it to the instance by calling this method (see plugin.js). Note if an object was passed in
        // the third parameter to PostToRuntimeElement(), this will be passed along as the parameter here,
        // but in this case it's not used.
        _OnClick(e)
        {
            this._conditions_onDragOver = false;
            this._conditions_onMouseOver = true;
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnClick);
        }

        _OnMouseOver(e)
        {
            this._conditions_onMouseOver = true;
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnMouseOver);
        }


        _OnMouseLeave(e)
        {
            this._conditions_onMouseOver = false;
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnMouseLeave);
        }

        async _OnDrop(e)
        {
            this._conditions_onDragOver = false;
            this._conditions_onMouseOver = true;
            this._files = e["files"];
            await this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnDrop);
        }

        _OnDragOver(e)
        {
            this._conditions_onDragOver = true;
            this._conditions_onMouseOver = true;
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnDragOver);
        }

        _OnDragEnter(e)
        {
            this._conditions_onDragOver = true;
            this._conditions_onMouseOver = true;
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnDragEnter);
        }

        _OnDragLeave(e)
        {
            this._conditions_onDragOver = false;
            this._conditions_onMouseOver = false;
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnDragLeave);
        }



        _OnDrag(e)
        {
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnDrag);
        }


        _OnDragExit(e)
        {
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnDragExit);
        }

        _OnDragStart(e)
        {
            this.Trigger(C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds.OnDragStart);
        }



        Draw(renderer)
        {
            // not used - a DOM element is positioned at this instance instead
        }

        SaveToJson()
        {
            return {
                // data to be saved for savegames
                "id": this._id,
                "fontsize": this._fontsize,
                "text": this._text,
                "accept": this._accept,
                "visible": this._visible,
                "backgroundColor": this._backgroundColor,
                "color": this._color,
                "border": this._border,
                "tooltip": this._tooltip,
                "style": this._style,
                "wight": this._weight,
                "fontFace": this._fontFace
            };
        }

        LoadFromJson(o)
        {
            // load state for savegames
            this._text = o["id"];
            this._text = o["text"];
            this._accept = o["accept"];
            this._visible = o["visible"];
            this._backgroundColor = o["backgroundColor"];
            this._color = o["color"];
            this._border = o["border"];
            this._tooltip = o["tooltip"];
            this._fontsize = o["fontsize"];
            this._style = o["style"];
            this._weight = o["wight"];
            this._fontFace = o["fontFace"];

            this.UpdateElementState(); // ensures any state changes are updated in the DOM
        }
    };

}