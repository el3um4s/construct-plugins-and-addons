"use strict";
{

    const PLUGIN_ID = "StraniAnelli_RandomColor_DavidMerfield";
    const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "general";

    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_RandomColor_DavidMerfield = class RandomColor_DavidMerfieldPlugin extends SDK.IPluginBase
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
                new SDK.PluginProperty("text", "hue", ""),
                new SDK.PluginProperty("combo", "luminosity",
            {
                "initialValue": "random",
                "items": ["random", "bright", "light", "dark"]
            }),
                new SDK.PluginProperty("integer", "count", 1),
                new SDK.PluginProperty("text", "seed", ""),
                new SDK.PluginProperty("combo", "format",
            {
                "initialValue": "hex",
                "items": ["rgb", "rgba", "rgbArray", "hsl", "hsla", "hslArray", "hex"]
            }),
                new SDK.PluginProperty("percent", "alpha", 0)
            ]);

            this._info.AddFileDependency(
            {
                filename: "c3runtime/randomColor.js",
                type: "inline-script"
            });
            this._info.AddFileDependency(
            {
                filename: "c3runtime/randomColor_Utility.js",
                type: "inline-script"
            });
            this._info.AddFileDependency(
            {
                filename: "c3runtime/utility.js",
                type: "inline-script"
            });


            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}