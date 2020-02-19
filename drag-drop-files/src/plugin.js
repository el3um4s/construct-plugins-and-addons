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
    const PLUGIN_ID = "StraniAnelli_DragAndDropFiles";
    ////////////////////////////////////////////

    const PLUGIN_VERSION = "1.0.1.0";
    const PLUGIN_CATEGORY = "form-controls"; // The 'Form controls' category is recommended for DOM element plugins

    let app = null;

    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_DragAndDropFiles = class StraniAnelli_DragAndDropFiles_Plugin extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Strani Anelli");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetPluginType("world"); // mark as world plugin since it's placed in the layout
            this._info.SetIsResizable(true); // allow to be resized

            // Load domSide.js in the document context (main thread).
            // This is important for supporting the runtime's web worker mode.
            this._info.SetDOMSideScripts(["c3runtime/domSide.js"]);

            // Only support the newer C3 runtime
            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                new SDK.PluginProperty("text", "control-text", "Drag & Drop files here"),
                new SDK.PluginProperty("text", "accept", ""),
                new SDK.PluginProperty("check", "visible", true),
                new SDK.PluginProperty("text", "font-size", "12pt"),
                new SDK.PluginProperty("text", "id", "")
            ]);

            SDK.Lang.PopContext(); // .properties

            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}