"use strict";
{
    C3.Plugins.StraniAnelli_RandomColor_DavidMerfield.Exps = {
        getRandomColor()
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

            this.lastFormat = this.options.format;

            if (this.options.hasOwnProperty("seed"))
            {
                this.options.seed = constantSeed;
            }

            return color[0];
        },

        getLastColor()
        {
            const color = this.lastColor;
            return color;
        },

        getRandomColorArray()
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

            this.lastFormat = this.options.format;

            if (this.options.hasOwnProperty("seed"))
            {
                this.options.seed = constantSeed;
            }

            return colors.toString();
        },

        getLastRandomColorArray()
        {
            const colors = this.lastColorsArray;
            return colors.toString();
        },

        getColorFromLastArray(index)
        {
            const colors = this.lastColorsArray;
            return colors[index];
        },

        getLengthArrayRandomColor()
        {
            const colors = this.lastColorsArray;
            return colors.length;
        },

        getPropertyHue()
        {
            return this.options.hue;
        },

        getPropertyLuminosity()
        {
            return this.options.luminosity;
        },

        getPropertyCount()
        {
            return this.options.count;
        },

        getPropertySeed()
        {
            return this.options.seed;
        },

        getPropertyFormat()
        {
            return this.options.format;
        },

        getPropertyAlpha()
        {
            return this.options.alpha;
        }

    };
}