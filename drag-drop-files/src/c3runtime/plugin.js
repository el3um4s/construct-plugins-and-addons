"use strict";

{
    // NOTE: use a unique DOM component ID to ensure it doesn't clash with anything else
    // This must also match the ID in instance.js and domSide.js.
    const DOM_COMPONENT_ID = "stranianelli_draganddropfiles";

    // NOTE: DOM plugins derive from C3.SDKDOMPluginBase, not C3.SDKPluginBase.
    C3.Plugins.StraniAnelli_DragAndDropFiles = class StraniAnelli_DragAndDropFiles_Plugin extends C3.SDKDOMPluginBase
    {
        constructor(opts)
        {
            super(opts, DOM_COMPONENT_ID);

            // Calls to PostToRuntimeElement() in domSide.js are forwarded to the plugin here.
            // The relevant instance is passed as an argument. Generally these messages need to be handled by the
            // instances themselves, so the handlers here just forward messages to instance calls.

            // Forward "click" messages to the _OnClick method of the relevant instance.
            // Note this also forwards the optional extra details object as the argument 'e', but in this
            // case it's not used for the click handler.
            this.AddElementMessageHandler("click", (sdkInst, e) => sdkInst._OnClick(e));
            this.AddElementMessageHandler("mouseover", (sdkInst, e) => sdkInst._OnMouseOver(e));
            this.AddElementMessageHandler("mouseleave", (sdkInst, e) => sdkInst._OnMouseLeave(e));

            //this.AddElementMessageHandler("drop", (sdkInst, e) => sdkInst._OnDrop(e));
            this.AddElementMessageHandler("dragover", (sdkInst, e) => sdkInst._OnDragOver(e));

            this.AddElementMessageHandler("drag", (sdkInst, e) => sdkInst._OnDrag(e));
            this.AddElementMessageHandler("dragenend", (sdkInst, e) => sdkInst._OnDragEnd(e));
            this.AddElementMessageHandler("dragenter", (sdkInst, e) => sdkInst._OnDragEnter(e));
            this.AddElementMessageHandler("dragexit", (sdkInst, e) => sdkInst._OnDragExit(e));
            this.AddElementMessageHandler("dragleave", (sdkInst, e) => sdkInst._OnDragLeave(e));
            this.AddElementMessageHandler("dragstart", (sdkInst, e) => sdkInst._OnDragStart(e));


            this.AddElementMessageHandler("drop", (sdkInst, e) => sdkInst._OnDrop(e));
        }

        Release()
        {
            super.Release();
        }
    };
}