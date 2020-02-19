"use strict";

{
    ////////////////////////////////////////////
    // The plugin ID is how Construct identifies different kinds of plugins.
    // *** NEVER CHANGE THE PLUGIN ID! ***
    // If you change the plugin ID after releasing the plugin, Construct will think it is an entirely different
    // plugin and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE PLUGIN.
    // Only the plugin name is displayed in the editor, so to rename your plugin change the name but NOT the ID.
    // If you want to completely replace a plugin, make it deprecated (it will be hidden but old projects keep working),
    // and create an entirely new plugin with a different plugin ID.
    const PLUGIN_ID = "stranianelli_random_color";
    ////////////////////////////////////////////

    const PLUGIN_VERSION = "1.0";
    const PLUGIN_CATEGORY = "other";

    let app = null;

    const PLUGIN_CLASS = SDK.Plugins.stranianelli_random_color = class stranianelli_random_color extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins.stranianelli_random_color");

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Strani Anelli");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetIsSingleGlobal(true);

            SDK.Lang.PushContext(".properties");

            /*			this._info.SetProperties([
            				new SDK.PluginProperty("integer", "test-property", 0)
            			]);*/

            this._info.SetProperties([
                /*0*/
                new SDK.PluginProperty("combo", "prop_hue", {
                    initialValue: "random",
                    items: ["random", "red", "orange", "yellow", "green", "blue", "purple", "pink", "monochrome"]
                }),
                /*1*/
                new SDK.PluginProperty("combo", "prop_luminosity", {
                    initialValue: "random",
                    items: ["random", "bright", "light", "dark"]
                }),
                /*2*/
                new SDK.PluginProperty("text", "prop_seed", ""),
                /*3*/
                new SDK.PluginProperty("combo", "prop_format", {
                    initialValue: "integer",
                    items: ["integer", "rgb", "rgba", "rgbArray", "hsl", "hsla", "hslArray", "hex", "hsv", "hsvArray"]
                }),
                /*-*/
                new SDK.PluginProperty("group", "prop_group_alpha"),
                /*4*/
                new SDK.PluginProperty("check", "prop_check_alpha", false),
                /*5*/
                new SDK.PluginProperty("percent", "prop_alpha", 0.5)
            ]);

            SDK.Lang.PopContext(); // .properties

            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
