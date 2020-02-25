"use strict";
{
    C3.Plugins.StraniAnelli_CustomHEAD_WEB.Acts = {
        async Configure(config)
        {
            const fileURL = await this._runtime.GetAssetManager().LoadProjectFileUrl(config);
            const response = await fetch(fileURL);
            const configJSON = await response.json();

            //console.log(configJSON);
            Object.entries(configJSON).forEach(([tag, value]) => {
                //console.log(key);
                //value.forEach(element => console.log(element));
                console.log(tag);
                value.forEach(function(el)
                {
                    console.log(tag, el);
                    //console.log(this.GetStringHTMLFromObject(key, el));
                    let stringHTML = '<' + tag;
                    Object.entries(el).forEach(([k, v]) => {
                        stringHTML += ' ' + k + '="' + v + '"';
                    });
                    stringHTML += ' />';
                    document.head.insertAdjacentHTML('beforeend', stringHTML);
                    //            console.log(stringHTML);
                });
            })

            //this.InsertBeforeEndHead();
        }
    };
}