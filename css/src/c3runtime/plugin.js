"use strict";
{
    const C3 = self.C3;
    const DOM_COMPONENT_ID = "StraniAnelli_InjectCSS_v2";

    C3.Plugins.StraniAnelli_InjectCSS_v2 = class InjectCSS_v2Plugin extends C3.SDKDOMPluginBase
    {
        constructor(opts)
        {
            super(opts, DOM_COMPONENT_ID);

            //this.AddElementMessageHandler("changeaction", (sdkInst, e) => sdkInst._OnMouseLeave(e));
            this.AddElementMessageHandler("changeaction", (sdkInst, e) => {
                this._action = e["action"];
            });
        }

        Release()
        {
            super.Release();
        }
    };
}