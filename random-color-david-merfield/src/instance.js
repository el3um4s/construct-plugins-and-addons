"use strict";
{
    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_RandomColor_DavidMerfield;

    PLUGIN_CLASS.Instance = class RandomColor_DavidMerfieldInstance extends SDK.IInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
        }

        Release()
        {}

        OnCreate()
        {}

        OnPropertyChanged(id, value)
        {}

        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}