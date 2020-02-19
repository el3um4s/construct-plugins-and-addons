"use strict";
{

    const PLUGIN_ID = "StraniAnelli_InjectCSS_v2";
    const PLUGIN_VERSION = "0.0.0.2";
    const PLUGIN_CATEGORY = "form-controls";

    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_InjectCSS_v2 = class InjectCSS_v2Plugin extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("StraniAnelli");
            this._info.SetHelpUrl("https://el3um4s.github.io/construct-inject-css-plugin/");
            //this._info.SetIsSingleGlobal(true);
            this._info.SetPluginType("world"); // mark as world plugin since it's placed in the layout
            this._info.SetIsResizable(true); // allow to be resized

            this._info.SetDOMSideScripts(["c3runtime/domSide.js"]);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                new SDK.PluginProperty("check", "is-local", true),
                new SDK.PluginProperty("longtext", "css", "personalStyle.css")

            ]);

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}