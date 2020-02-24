"use strict";
{
    const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_CustomINDEX;

    PLUGIN_CLASS.Type = class CustomINDEXType extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}