"use strict";
{
    C3.Plugins.StraniAnelli_RandomColor_DavidMerfield.Acts = {
        generateRandomColor()
        {
            this.options.count = 1;

            let constantSeed = null;

            if (this.options.hasOwnProperty("seed") && !this.options.seed.replace(/\s/g, '').length)
            {
                delete this.options.seed;
            }
            else
            {
                constantSeed = this.options.seed;
            }

            const color = randomColor(this.options);
            this.lastColor = color[0];
            this.lastColorsArray = color;

            if (this.options.hasOwnProperty("seed"))
            {
                this.options.seed = constantSeed;
            }
        },

        generateRandomColorArray()
        {
            this.options.count = this.options.count <= 1 ? 1 : this.options.count;

            let constantSeed = null;

            if (this.options.hasOwnProperty("seed") && !this.options.seed.replace(/\s/g, '').length)
            {
                delete this.options.seed;
            }
            else
            {
                constantSeed = this.options.seed;
            }

            const colors = randomColor(this.options);

            this.lastColor = colors[0];
            this.lastColorsArray = colors;

            if (this.options.hasOwnProperty("seed"))
            {
                this.options.seed = constantSeed;
            }
        },

        setPropertyHue(prop)
        {
            this.options.hue = prop;
        },

        setPropertyCount(prop)
        {
            this.options.count = prop;
        },

        setPropertyLuminosity(prop)
        {
            this.options.luminosity = getComboLuminosity(prop);
        },

        setPropertySeed(prop)
        {
            this.options.seed = prop;
        },

        setPropertyAlpha(prop)
        {
            this.options.alpha = prop;
        },

        setPropertyFormat(prop)
        {
            this.options.format = getComboFormat(prop);
            this.lastFormat = this.options.format;
        },

        setAllProperties(hue, luminosity, count, seed, format, alpha)
        {
            this.options.hue = hue;
            this.options.luminosity = getComboLuminosity(luminosity);
            this.options.count = count;
            this.options.seed = seed;
            this.options.format = getComboFormat(format);
            this.options.alpha = alpha;

            this.lastFormat = this.options.format;
        },

        setAllPropertiesViaString(hue, luminosity, count, seed, format, alpha)
        {
            this.options.hue = hue;
            this.options.luminosity = getComboLuminosity(luminosity);
            this.options.count = count;
            this.options.seed = seed;
            this.options.format = getComboFormat(format);
            this.options.alpha = alpha;
        },

        copyRandomColorsToC3Array(c3array)
        {
            let arr = c3array.GetInstances()[0].GetSdkInstance();
            const colors = this.lastColorsArray;

            arr.SetSize(colors.length, 1, 1);

            colors.forEach(function(currentValue, index)
            {
                arr.Set(index, 0, 0, currentValue.toString());
            });
        },

        applyLastRandomColorToSprite(c3sprite, alpha)
        {

            //let spr = c3sprite.GetInstances()[0].GetSdkInstance();
            let spr = c3sprite.GetFirstPicked().GetSdkInstance();

            const c3color = convertColorToC3Color(this.lastFormat, this.lastColor);
            const worldInfo = spr.GetWorldInfo();
            worldInfo.GetUnpremultipliedColor().equalsIgnoringAlpha(c3color) || (worldInfo.SetUnpremultipliedColor(c3color), spr._runtime.UpdateRender());

            if ( !! alpha)
            {
                worldInfo.GetUnpremultipliedColor().getA() == c3color.getA() || (worldInfo.SetOpacity(c3color.getA()), spr._runtime.UpdateRender());
            }
        },

        applyRandomColorToSpriteFromArray(c3sprite, alpha, index)
        {
            let i = index;

            if (i >= this.lastColorsArray.length)
            {
                i = this.lastColorsArray.length - 1;
            }
            if (i < 0)
            {
                i = 0;
            }

            //let spr = c3sprite.GetInstances()[0].GetSdkInstance();
            let spr = c3sprite.GetFirstPicked().GetSdkInstance();

            const c3color = convertColorToC3Color(this.lastFormat, this.lastColorsArray[i]);
            const worldInfo = spr.GetWorldInfo();
            worldInfo.GetUnpremultipliedColor().equalsIgnoringAlpha(c3color) || (worldInfo.SetUnpremultipliedColor(c3color), spr._runtime.UpdateRender());

            if ( !! alpha)
            {
                worldInfo.GetUnpremultipliedColor().getA() == c3color.getA() || (worldInfo.SetOpacity(c3color.getA()), spr._runtime.UpdateRender());
            }
        },

        setPropertyLuminosityViaString(luminosity)
        {
            this.options.luminosity = luminosity.toLowerCase();
        },

        setPropertyFormatViaString(format)
        {
            this.options.format = format;
            this.lastFormat = this.options.format;
        }

    };
}