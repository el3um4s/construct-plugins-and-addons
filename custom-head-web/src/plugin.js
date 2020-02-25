"use strict";
{

    const PLUGIN_ID = "StraniAnelli_CustomHEAD_WEB";
    const PLUGIN_VERSION = "20.2.24.1";
    const PLUGIN_CATEGORY = "web";

    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_CustomHEAD_WEB = class CustomINDEXPlugin extends SDK.IPluginBase
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
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetIsSingleGlobal(true);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([]);

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}