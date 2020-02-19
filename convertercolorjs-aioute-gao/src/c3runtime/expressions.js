"use strict";
{
    C3.Plugins.StraniAnelli_ConverterColorJS_AiouteGao.Exps = {
        toHex(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toHex();
        },

        toHexA(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toHexA();
        },

        toRGB(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toRGB();
        },

        toRGBA(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toRGBA();
        },

        getRed255(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toFormat('$r');
        },

        getGreen255(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toFormat('$g');
        },

        getBlue255(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toFormat('$b');
        },

        getAlpha255(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toFormat('$a');
        },

        getRedHEX(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toFormat('$0xR');
        },

        getGreenHEX(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toFormat('$0xG');
        },

        getBlueHEX(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toFormat('$0xB');
        },

        getAlphaHEX(color)
        {
            const c = new StraniAnelliConverterColor(color);
            return c.toFormat('$0xA');
        }
    };
}