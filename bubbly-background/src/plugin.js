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
	const PLUGIN_ID = "StraniAnelli_BubblyBackground";
	////////////////////////////////////////////

	const PLUGIN_VERSION = "1.0.0.0";
	const PLUGIN_CATEGORY = "general";

	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_BubblyBackground = class BubblyBackgroundPlugin extends SDK.IPluginBase
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
			this._info.SetIsSingleGlobal(true);

			// Support both the C2 and C3 runtimes
			this._info.SetSupportedRuntimes(["c2", "c3"]);

			SDK.Lang.PushContext(".properties");

			this._info.SetProperties([
					new SDK.PluginProperty("combo", "stylebackground", {
																	initialValue: "bubbly",
																	items: ["solid","gradient","bubbly"]}),
					new SDK.PluginProperty("color", "colorStart", [34/255, 170/255, 238/255]),
					new SDK.PluginProperty("color", "colorStop", [17/255,119/255,187/255]),
					new SDK.PluginProperty("group", "gruppoBubbly"),
					new SDK.PluginProperty("combo", "presetBubbly", {
																	initialValue: "blueWithWhiteBubbles",
																	items: ["custom",
																					"blueWithWhiteBubbles",
																					"blackRedWithRedBubbles",
																					"purpleWithMulticoloredBubbles",
																					"yellowPinkWithRedOrangeYellowBubbles"]}),
					new SDK.PluginProperty("check", "animate", true),
					new SDK.PluginProperty("color", "shadowColor", [1,1,1]),
					new SDK.PluginProperty("combo", "compose", {
																	initialValue: "lighter",
																	items: ["lighter","source-over"]}),
					new SDK.PluginProperty("integer", "blur", 4),
					new SDK.PluginProperty("longtext", "bubbles", "Math.floor((canvas.width + canvas.height) * 0.02)"),
					new SDK.PluginProperty("longtext", "bubbleFunc", "() => `hsla(0, 0%, 100%, ${r() * 0.1})`"),
					new SDK.PluginProperty("longtext", "angleFunc", "() => Math.random() * Math.PI * 2"),
					new SDK.PluginProperty("longtext", "velocityFunc", "() => 0.1 + Math.random() * 0.5"),
					new SDK.PluginProperty("longtext", "radiusFunc", "() => 4 + Math.random() * canvas.width / 25")
			]);

			this._info.AddFileDependency({
				filename: "bubbly/bubbly.js",
				type: "inline-script"
			});

			SDK.Lang.PopContext();		// .properties

			SDK.Lang.PopContext();
		}
	};

	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
