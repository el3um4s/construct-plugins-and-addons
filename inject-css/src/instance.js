"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_InjectCSS;

	PLUGIN_CLASS.Instance = class StraniAnelli_InjectCSSInstance extends SDK.IInstanceBase
	{
		constructor(sdkType, inst)
		{
			super(sdkType, inst);
		}

		Release()
		{
		}

		OnCreate()
		{
		}

		OnPropertyChanged(id, value)
		{
		}

		LoadC2Property(name, valueString)
		{
			return false;		// not handled
		}
	};
}
