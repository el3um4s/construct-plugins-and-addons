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
	const PLUGIN_ID = "StraniAnelli_HTMLElement";
	////////////////////////////////////////////

	const PLUGIN_VERSION = "0.0.2.8";
	const PLUGIN_CATEGORY = "form-controls";

	let app = null;

	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_HTMLElement = class StraniAnelli_HTMLElementPlugin extends SDK.IPluginBase
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
			this._info.SetPluginType("world");			// mark as world plugin, which can draw
			this._info.SetIsResizable(true);			// allow to be resized
			this._info.SetIsRotatable(true);			// allow to be rotated
			this._info.SetHasImage(false);
			this._info.SetSupportsEffects(false);		// allow effects
			this._info.SetMustPreDraw(true);

			this._info.SetSupportedRuntimes(["c3"]);
			this._info.SetDOMSideScripts(["c3runtime/domSide.js"]);

			this._info.AddFileDependency({
				filename: "c3runtime/dom.js",
				type: "inline-script"
			});

			this._info.AddFileDependency({
				filename: "c3runtime/globalHTMLElement.js",
				type: "inline-script"
			});

			SDK.Lang.PushContext(".properties");

			this._info.SetProperties([
/* 0	*/  new SDK.PluginProperty("longtext", "objectModel", ""), // ["nomeVar1", "nomeVar2", "nomeVar3", ...]
/* 1	*/  new SDK.PluginProperty("longtext", "objectStore", ""), // sì -> ["uid1", "uid2", "uid3", ... ]   no -> {name: namePluigin, id: 00, uid: 00}
/* 2  */  new SDK.PluginProperty("text", "parentUID", ""),
/* 3	*/  new SDK.PluginProperty("text", "parentID", ""),
/* 4	*/	new SDK.PluginProperty("check", "useC3position", true),
/* 5	*/	new SDK.PluginProperty("check", "useC3size", true),
/* 6	*/	new SDK.PluginProperty("check", "useC3rotation", true),
/*    */	new SDK.PluginProperty("group", "htmlGroup"),
/* 7  */	new SDK.PluginProperty("check", "htmlInitiallyVisible", true),
/* 8  */	new SDK.PluginProperty("longtext", "htmlTag", "div"),
/* 9  */	new SDK.PluginProperty("longtext", "htmlID", ""),
/* 10  */	new SDK.PluginProperty("longtext", "htmlClass", ""),
/* 11 */	new SDK.PluginProperty("longtext", "htmlAttribute", ""),
/* 12 */	new SDK.PluginProperty("check", "htmlHasText", true),
/* 13 */  new SDK.PluginProperty("check", "htmlTextAsHTML", false),
/* 14 */	new SDK.PluginProperty("longtext", "htmlText", "text"),
/*    */	new SDK.PluginProperty("group", "inlineStyle"),
/* 15 */	new SDK.PluginProperty("check", "inlineStyleUsePreviewColor", true),
/* 16 */	new SDK.PluginProperty("check", "inlineStyleUsePreviewBorderSettings", true),
					// https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
/* 17 */	new SDK.PluginProperty("combo", "inlineStyleBorderStyle", {
																											initialValue: "solid",
																											items: ["notinuse", "none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
																										}),
/* 18 */	new SDK.PluginProperty("text", "inlineStyleBorderRadius", "8px"),
/* 19  */	new SDK.PluginProperty("check", "inlineStyleUsePreviewFontFamily", true),
/* 20  */	new SDK.PluginProperty("check", "inlineStyleUsePreviewFontSettings", true),
/* 21 */	new SDK.PluginProperty("check", "inlineStyleUsePreviewAutoFontSize", true),
/* 22 */	new SDK.PluginProperty("text", "inlineStylePadding", "8px"),
					// https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
/* 23 */	new SDK.PluginProperty("combo", "inlineStyleBoxSizing", {
																											initialValue: "border-box",
																											items: ["notinuse", "content-box", "border-box"]
																										}),
					// https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
/* 24 */	new SDK.PluginProperty("combo", "inlineStyleWordBreak", {
																											initialValue: "break-word",
																											items: ["notinuse", "normal", "break-all", "keep-all", "break-word"]
																										}),
					// https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
/* 25 */	new SDK.PluginProperty("combo", "inlineStyleWhiteSpace", {
																											initialValue: "pre-wrap",
																											items: ["notinuse", "normal", "nowrap", "pre", "pre-wrap", "pre-line"]
																										}),
					// https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
/* 26 */	new SDK.PluginProperty("combo", "inlineStyleOverflowX", {
																											initialValue: "notinuse",
																											items: ["notinuse", "visible", "hidden", "scroll", "auto"]
																										}),
					// https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
/* 27 */	new SDK.PluginProperty("combo", "inlineStyleOverflowY", {
																											initialValue: "notinuse",
																											items: ["notinuse", "visible", "hidden", "scroll", "auto"]
																										}),
/* 28 */	new SDK.PluginProperty("longtext", "inlineStyleLongtext", ""),
/*    */	new SDK.PluginProperty("group", "editorPreviewGroup"),
/* 29 */	new SDK.PluginProperty("color", "editorPreviewColor", [1, 1, 0]),
/* 30 */	new SDK.PluginProperty("integer", "editorPreviewBorderWidth", 2),
/* 31 */	new SDK.PluginProperty("color", "editorPreviewBorderColor", [0, 0, 0]),
/* 32 */	new SDK.PluginProperty("check", "editorPreviewShowTag", true),
/* 33 */	new SDK.PluginProperty("color", "editorPreviewTagColor", [0, 0, 0]),
/* 34 */	new SDK.PluginProperty("check", "editorPreviewShowText", true),
/*    */	new SDK.PluginProperty("group", "textGroup"),
/* 35 */	new SDK.PluginProperty("font", "textFont", "Arial"),
/* 36 */	new SDK.PluginProperty("integer", "textSize", 12),
/* 37 */	new SDK.PluginProperty("color", "textColor", [0, 0, 0]),
/* 38 */	new SDK.PluginProperty("check", "textIsBold", false),
/* 39 */	new SDK.PluginProperty("check", "textIsItalic", false),
/* 40 */	new SDK.PluginProperty("combo", "textHorizontalAlign", {
																											initialValue: "center",
																											items: ["left", "center", "right"]
																										}),
/*    */	new SDK.PluginProperty("group", "transformGroup"),
/* 41 */	new SDK.PluginProperty("combo", "transformOriginVertical", {
																											initialValue: "top",
																											items: ["top", "center", "bottom"]
																										}),
/* 42 */	new SDK.PluginProperty("combo", "transformOriginHorizontal", {
																											initialValue: "left",
																											items: ["left", "center", "right"]
																										}),
/*    */	new SDK.PluginProperty("group", "eventEventHandlers"),
/* 43 */	new SDK.PluginProperty("longtext", "eventEventGeneral", ""),
/*    */	new SDK.PluginProperty("group", "eventMouseGroup"),
/* 44 */	new SDK.PluginProperty("check", "eventMouseOnClick", false),
/* 45 */	new SDK.PluginProperty("longtext", "eventMouseOnClickFunct", ""),
/* 46 */	new SDK.PluginProperty("check", "eventMouseOnDoubleClick", false),
/* 47 */	new SDK.PluginProperty("longtext", "eventMouseOnDoubleClickFunct", ""),
/* 48 */	new SDK.PluginProperty("check", "eventMouseOnContextMenu", false),
/* 49 */	new SDK.PluginProperty("longtext", "eventMouseOnContextMenuFunct", ""),
/* 50 */	new SDK.PluginProperty("check", "eventMouseOnAuxClick", false),
/* 51 */	new SDK.PluginProperty("longtext", "eventMouseOnAuxClickFunct", ""),
/* 52 */	new SDK.PluginProperty("check", "eventMouseOnMouseWheel", false),
/* 53 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseWheelFunct", ""),
/* 53 */	new SDK.PluginProperty("check", "eventMouseOnMouseOver", false),
/* 55 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseOverFunct", ""),
/* 56 */	new SDK.PluginProperty("check", "eventMouseOnMouseOut", false),
/* 57 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseOutFunct", ""),
/* 58 */	new SDK.PluginProperty("check", "eventMouseOnMouseDown", false),
/* 59 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseDownFunct", ""),
/* 60 */	new SDK.PluginProperty("check", "eventMouseOnMouseUp", false),
/* 61 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseUpFunct", ""),
/* 62 */	new SDK.PluginProperty("check", "eventMouseOnMouseEnter", false),
/* 63 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseEnterFunct", ""),
/* 64 */	new SDK.PluginProperty("check", "eventMouseOnMouseLeave", false),
/* 65 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseLeaveFunct", ""),
/* 66 */	new SDK.PluginProperty("check", "eventMouseOnMouseMove", false),
/* 67 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseMoveFunct", ""),
/* 68 */	new SDK.PluginProperty("check", "eventMouseOnMouseSelect", false),
/* 69 */	new SDK.PluginProperty("longtext", "eventMouseOnMouseSelectFunct", ""),
/*    */	new SDK.PluginProperty("group", "eventFocusGroup"),
/* 70 */	new SDK.PluginProperty("check", "eventFocusOnFocus", false),
/* 71 */	new SDK.PluginProperty("longtext", "eventFocusOnFocusFunct", ""),
/* 72 */	new SDK.PluginProperty("check", "eventFocusOnBlur", false),
/* 73 */	new SDK.PluginProperty("longtext", "eventFocusOnBlurFunct", ""),
/*    */	new SDK.PluginProperty("group", "eventKeyboardGroup"),
/* 74 */	new SDK.PluginProperty("check", "eventKeyboardOnKeyDown", false),
/* 75 */	new SDK.PluginProperty("longtext", "eventKeyboardOnKeyDownFunct", ""),
/* 76 */	new SDK.PluginProperty("check", "eventKeyboardOnKeyPress", false),
/* 77 */	new SDK.PluginProperty("longtext", "eventKeyboardOnKeyPressFunct", ""),
/* 78 */	new SDK.PluginProperty("check", "eventKeyboardOnKeyUp", false),
/* 79 */	new SDK.PluginProperty("longtext", "eventKeyboardOnKeyUpFunct", ""),
/*    */	new SDK.PluginProperty("group", "eventValueChangeGroup"),
/* 80 */	new SDK.PluginProperty("check", "eventValueChangeOnCheckboxStateChange", false),
/* 81 */	new SDK.PluginProperty("longtext", "eventValueChangeOnCheckboxStateChangeFunct", ""),
/* 82 */	new SDK.PluginProperty("check", "eventValueChangeOnInput", false),
/* 83 */	new SDK.PluginProperty("longtext", "eventValueChangeOnInputFunct", ""),
/* 83 */	new SDK.PluginProperty("check", "eventValueChangeOnRadioStateChange", false),
/* 85 */	new SDK.PluginProperty("longtext", "eventValueChangeOnRadioStateChangeFunct", ""),
/* 86 */	new SDK.PluginProperty("check", "eventValueChangeOnValueChange", false),
/* 87 */	new SDK.PluginProperty("longtext", "eventValueChangeOnValueChangeFunct", ""),
/*    */	new SDK.PluginProperty("group", "eventFormGroup"),
/* 88 */	new SDK.PluginProperty("check", "eventFormReset", false),
/* 89 */	new SDK.PluginProperty("longtext", "eventFormResetFunct", ""),
/* 90 */	new SDK.PluginProperty("check", "eventFormSubmit", false),
/* 91 */	new SDK.PluginProperty("longtext", "eventFormSubmitFunct", "")
			]);

			SDK.Lang.PopContext();		// .properties

			SDK.Lang.PopContext();
		}
	};

	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
