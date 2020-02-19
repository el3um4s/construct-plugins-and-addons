"use strict";
{
    C3.Plugins.StraniAnelli_DragAndDropFiles.Cnds = {
        OnClick()
        {
            return true;
        },

        OnDrop()
        {
            this._conditions_onDragOver = false;
            return true;
        },

        OnDragOver()
        {
            this._conditions_onDragOver = true;
            return true;
        },

        OnDrag()
        {
            return true;
        },

        OnDragEnter()
        {
            return true;
        },

        OnDragExit()
        {
            return true;
        },

        OnDragLeave()
        {
            this._conditions_onDragOver = false;
            return true;
        },

        OnDragStart()
        {
            return true;
        },

        OnDragEnd()
        {
            return true;
        },

        HasFileSelected()
        {
            return this._files.length >= 1 ? true : false;
        },

        HasOnly1FileSelected()
        {
            return this._files.length > 1 ? false : true;
        },

        Is_Drag_Over()
        {
            return this._conditions_onDragOver;
        },

        OnMouseOver()
        {
            return true;
        },

        OnMouseLeave()
        {
            return true;
        },

        Is_Mouse_Over()
        {
            return this._conditions_onMouseOver;
        }
    };
}