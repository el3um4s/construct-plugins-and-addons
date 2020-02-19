"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_MotivationalQuotes;

	PLUGIN_CLASS.Instance = class StraniAnelli_MotivationalQuotesInstance extends SDK.IInstanceBase
	{
		constructor(sdkType, inst)
		{
			super(sdkType, inst);
		}

		Release()
		{
			super.Release();
		}

		OnCreate()
		{}

		OnPropertyChanged(id, value)
		{}

		LoadC2Property(name, valueString)
		{
			return false;		// not handled
		}


	};
}
