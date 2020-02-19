// 
// https://github.com/aioutecism/Color.js


(() => {

    const isNumberAndInRange = (input, mix, max) => {
        return typeof value === 'number' && value >= min && value <= max;
    };

    const formatNumber = (number, format) => {
        if (format === 10)
        {
            return number;
        }
        else if (format === 16)
        {
            let output = Math.round(number).toString(16);
            if (output.length === 1) output = `0$
            {
                output
            }`;
            return output;
        }
        else if (format === 'percent')
        {
            return Math.round(number / 255 * 1000) / 1000;
        }
        else
        {
            throw new Error('Format is invalid.');
        }
    };

    const parseRGBA = (color) => {
        let r, g, b, a = 1;

        if (typeof color === 'string' && color.match(/^rgb\(\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i))
        {
            const matches = color.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i)
            r = matches[1];
            g = matches[2];
            b = matches[3];
        }
        else if (typeof color === 'string' && color.match(/^rgba\(\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0|1|0\.\d+)\s*\)$/i))
        {
            const matches = color.match(/rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)/i)
            r = matches[1];
            g = matches[2];
            b = matches[3];
            a = matches[4];
        }

        if (r === undefined || g === undefined || b === undefined || a === undefined)
        {
            throw new Error('Not a rgba string.');
            return;
        }

        r = parseInt(r, 10);
        g = parseInt(g, 10);
        b = parseInt(b, 10);
        a = parseFloat(a) * 255;

        return {
            red: r,
            green: g,
            blue: b,
            alpha: a
        }
    };

    const parseHex = (color) => {
        if (!color.match(/^#([0-9a-f]{6}|[0-9a-f]{8})$/i))
        {
            throw new Error('Not a hex string.');
            return;
        }

        color = color.replace(/^#/, '');

        const convert = (single) => {
            return parseInt(single, 16);
        };

        const r = convert(color.substr(0, 2));
        const g = convert(color.substr(2, 2));
        const b = convert(color.substr(4, 2));
        const a = convert(color.substr(6, 2) || 'FF');

        return {
            red: r,
            green: g,
            blue: b,
            alpha: a
        }
    };

    class StraniAnelliConverterColor
    {

        constructor(color)
        {
            this.channel = undefined;

            if (!this.channel)
            {
                try
                {
                    this.channel = parseHex(color);
                }
                catch (e)
                {}
            }
            if (!this.channel)
            {
                try
                {
                    this.channel = parseRGBA(color);
                }
                catch (e)
                {}
            }

            if (!this.channel)
            {
                throw new Error("Can't parse color.");
            }
        }

        setRed(value)
        {
            if (!isNumberAndInRange(value, 0, 255))
            {
                throw new Error('Please pass in a number between 0 ~ 255.');
            }

            this.channel.red = parseInt(value, 10);
        }

        setGreen(value)
        {
            if (!isNumberAndInRange(value, 0, 255))
            {
                throw new Error('Please pass in a number between 0 ~ 255.');
            }

            this.channel.green = parseInt(value, 10);
        }

        setBlue(value)
        {
            if (!isNumberAndInRange(value, 0, 255))
            {
                throw new Error('Please pass in a number between 0 ~ 255.');
            }

            this.channel.blue = parseInt(value, 10);
        }

        setAlpha(value)
        {
            if (!isNumberAndInRange(value, 0, 1))
            {
                throw new Error('Please pass in a number between 0 ~ 1.');
            }

            this.channel.alpha = parseInt(value * 255, 10);
        }

        getRed(format = 10)
        {
            return formatNumber(this.channel.red, format);
        }

        getGreen(format = 10)
        {
            return formatNumber(this.channel.green, format);
        }

        getBlue(format = 10)
        {
            return formatNumber(this.channel.blue, format);
        }

        getAlpha(format = 'percent')
        {
            return formatNumber(this.channel.alpha, format);
        }

        toFormat(format)
        {
            if (!typeof format === 'string')
            {
                throw new Error('Format must be a string.');
                return;
            }

            return format
                .replace(/\$r/i, this.getRed())
                .replace(/\$g/i, this.getGreen())
                .replace(/\$b/i, this.getBlue())
                .replace(/\$a/i, this.getAlpha())
                .replace(/\$0xR/, this.getRed(16).toUpperCase())
                .replace(/\$0xr/, this.getRed(16).toLowerCase())
                .replace(/\$0xG/, this.getGreen(16).toUpperCase())
                .replace(/\$0xg/, this.getGreen(16).toLowerCase())
                .replace(/\$0xB/, this.getBlue(16).toUpperCase())
                .replace(/\$0xb/, this.getBlue(16).toLowerCase())
                .replace(/\$0xA/, this.getAlpha(16).toUpperCase())
                .replace(/\$0xa/, this.getAlpha(16).toLowerCase());
        }

        toRGB()
        {
            return this.toFormat('rgb($r, $g, $b)');
        }

        toRGBA()
        {
            return this.toFormat('rgba($r, $g, $b, $a)');
        }

        toHex()
        {
            return this.toFormat('#$0xR$0xG$0xB');
        }

        toHexA()
        {
            return this.toFormat('#$0xR$0xG$0xB$0xA');
        }

    }

    window.StraniAnelliConverterColor = StraniAnelliConverterColor;

})();