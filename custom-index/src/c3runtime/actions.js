"use strict";
{
    C3.Plugins.StraniAnelli_CustomINDEX.Acts = {
        async Configure(config)
        {
            const fileURL = await this._runtime.GetAssetManager().LoadProjectFileUrl(config);
            const response = await fetch(fileURL);
            const configJSON = await response.json();
            console.log(configJSON);
        }
    };
}