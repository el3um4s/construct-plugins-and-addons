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
	const PLUGIN_ID = "StraniAnelli_Leaflet";
	////////////////////////////////////////////

	const PLUGIN_VERSION = "0.0.0.1";
	const PLUGIN_CATEGORY = "general";

	let app = null;

	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_Leaflet = class LeafletPlugin extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);

			SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(PLUGIN_VERSION);
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Scirra");
			this._info.SetHelpUrl(lang(".help-url"));
			this._info.SetPluginType("world");			// mark as world plugin, which can draw
			this._info.SetIsResizable(true);			// allow to be resized
			this._info.SetIsRotatable(true);			// allow to be rotated
			this._info.SetSupportsEffects(true);		// allow effects
			this._info.SetMustPreDraw(true);

			SDK.Lang.PushContext(".properties");

			this._info.SetProperties([
				new SDK.PluginProperty("check", "initiallyVisible", true),
				new SDK.PluginProperty("group", "gruppoTileLayer"),
				new SDK.PluginProperty("combo", "tileLayer", {
					initialValue: "openstreetmap",
					items: ["openstreetmap",
									"michelin",
									"blackandwhite",
									"stamentoner",
									"stamentonerbackground",
									"stamentonerlite",
									"stamenwatercolor",
									"stamenterrain",
									"stamenterrainbackground",
									"openstreetmapde",
									"openstreetmapfrance",
									"openstreetmaphot",
									"opentopomap",
									"openmapsurferroad",
									"openmapsurfergrayscale",
									"hyddafull",
									"hyddabase",
									"esriworldstreetmap",
									"esridelorme",
									"esriworldtopomap",
									"esriworldimagery",
									"esriworldterrain",
									"esriworldshapedrelief",
									"esriworldphysical",
									"esrioceanbasemap",
									"esrinatgeoworldmap",
									"esriworldgraycanvas",
									"hikebike",
									"hikebikehillshading",
									"wikimedia",
									"cartodbpositron",
									"cartodbdarkmatter",
									"custom"] }),
				new SDK.PluginProperty("longtext", "customTileLayer", "...the URL template for the tile images..."),
				new SDK.PluginProperty("longtext", "customLayerAttribution", "...the attribution for the custom tile layer..."),
				new SDK.PluginProperty("group", "gruppoCoordinate"),
				new SDK.PluginProperty("float", "latitude", 45.4641),
				new SDK.PluginProperty("float", "longitude", 9.1909),
				new SDK.PluginProperty("integer", "zoom", {
					initialValue: 11,
					minValue: 1,
					maxValue: 18
				}),
				new SDK.PluginProperty("group", "gruppoControlli"),
				new SDK.PluginProperty("check", "showAttribution", true),
				new SDK.PluginProperty("check", "showZoomControl", true),
				new SDK.PluginProperty("check", "showScaleControl", true),
				new SDK.PluginProperty("check", "useImperialScale", false)
			]);

			this._info.AddFileDependency({
				filename: "detojs/detoLeafletJSsupporter.js",
				type: "inline-script"
			});

			this._info.AddFileDependency({
				filename: "detojs/detoGeometry.js",
				type: "inline-script"
			});

			this._info.AddFileDependency({
				filename: "leaflet/leaflet.css",
				type: "external-css"
			});

			this._info.AddFileDependency({
				filename: "leaflet/leaflet.js",
				type: "inline-script"
			});


			SDK.Lang.PopContext();		// .properties

			SDK.Lang.PopContext();
		}
	};

	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
