"use strict";
{
    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_CustomHEAD_WEB;

    PLUGIN_CLASS.Instance = class CustomINDEXInstance extends SDK.IInstanceBase
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