"use strict";
{

    const PLUGIN_ID = "StraniAnelli_ConverterColorJS_AiouteGao";
    const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "other";

    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_ConverterColorJS_AiouteGao = class ConverterColorJS_AiouteGaoPlugin extends SDK.IPluginBase
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

            this._info.SetProperties([

            ]);

            this._info.AddFileDependency(
            {
                filename: "c3runtime/ConverterColorJS.js",
                type: "inline-script"
            });

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}