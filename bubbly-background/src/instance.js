"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_BubblyBackground;

	PLUGIN_CLASS.Instance = class BubblyBackgroundInstance extends SDK.IInstanceBase
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
