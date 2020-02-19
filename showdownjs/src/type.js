"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_Showdown;

	PLUGIN_CLASS.Type = class ShowdownType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}
