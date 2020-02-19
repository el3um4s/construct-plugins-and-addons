"use strict";
{
    C3.Plugins.StraniAnelli_RandomColor_DavidMerfield.Instance = class RandomColor_DavidMerfieldInstance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst);

            this.options = {
                hue: "",
                luminosity: "random",
                count: 1,
                seed: "",
                format: "hex",
                alpha: 0
            };

            const tempRandomColor = randomColor();
            this.lastColor = tempRandomColor[0];
            this.lastColorsArray = tempRandomColor;

            this.lastFormat = "hex";

            if (properties)
            {
                this.options.hue = properties[0];
                this.options.luminosity = getComboLuminosity(properties[1]);
                this.options.count = properties[2];
                this.options.seed = properties[3];
                this.options.format = getComboFormat(properties[4]);
                this.options.alpha = properties[5];
                this.lastFormat = this.options.format;
            }
        }

        Release()
        {
            super.Release();
        }

        SaveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o)
        {
            // load state for savegames
        }
    };
}