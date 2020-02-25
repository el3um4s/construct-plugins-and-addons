"use strict";
{
    C3.Plugins.StraniAnelli_CustomHEAD_WEB.Instance = class CustomINDEXInstance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst);


            if (properties)
            {}
        }

        Release()
        {
            super.Release();
        }

        SaveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o)
        {
            // load state for savegames
        }

        GetDebuggerProperties()
        {
            return [
            {
                title: "CustomINDEX",
                properties: [
                    //{name: ".current-animation",	value: this._currentAnimation.GetName(),	onedit: v => this.CallAction(Acts.SetAnim, v, 0) },
                ]
            }];
        }

        //        GetStringHTMLFromObject(tag, obj) {
        //        	let stringHTML = `<${tag} `;
        //        	Object.entries(obj).forEach(([key, value]) => {
        //    			stringHTML += ` ${key}="${value}" `;
        //    		})
        //    		stringHTML += ` />`;
        //    		return stringHTML;
        //        }

        //        InsertBeforeEndHead(stringHtml) { document.head.insertAdjacentHTML('beforeend', stringHtml); }
    };
}