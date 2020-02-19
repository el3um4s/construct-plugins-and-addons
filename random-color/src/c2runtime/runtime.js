// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.stranianelli_random_color = function (runtime) {
    this.runtime = runtime;
};

(function () {
    var pluginProto = cr.plugins_.stranianelli_random_color.prototype;
    var propieta = {
        hue: "random",
        luminosity: "random",
        seed: "",
        format: "integer",
        check_alpha: false,
        alpha: 1.0
    };
    /////////////////////////////////////
    // Object type class
    pluginProto.Type = function (plugin) {
        this.plugin = plugin;
        this.runtime = plugin.runtime;
    };

    var typeProto = pluginProto.Type.prototype;

    typeProto.onCreate = function () {};

    /////////////////////////////////////
    // Instance class
    pluginProto.Instance = function (type) {
        this.type = type;
        this.runtime = type.runtime;
    };

    var instanceProto = pluginProto.Instance.prototype;

    instanceProto.onCreate = function () {
        // Read properties set in C3
        //this.testProperty = this.properties[0];
        /*this.prop_hue = this.properties[0];
        this.prop_luminosity = this.properties[1];
        this.prop_seed = this.properties[2];
        this.prop_format = this.properties[3];
        //this.prop_group_alpha = this.properties[0];
        this.prop_check_alpha = this.properties[4];
        this.prop_alpha = this.properties[5];*/
        propieta.hue = this.properties[0];
        propieta.luminosity = this.properties[1];
        propieta.seed = this.properties[2];
        propieta.format = this.properties[3];
        propieta.check_alpha = this.properties[4];
        propieta.alpha = this.properties[5];
    };

    instanceProto.saveToJSON = function () {
        return {};
    };

    instanceProto.loadFromJSON = function (o) {};

    /**BEGIN-PREVIEWONLY**/
    instanceProto.getDebuggerValues = function (propsections) {};
    /**END-PREVIEWONLY**/

    //////////////////////////////////////
    // Conditions
    function Cnds() {};

    /*	Cnds.prototype.IsLargeNumber = function (number)
    	{
    		return number > 100;
    	};
    */
    pluginProto.cnds = new Cnds();

    //////////////////////////////////////
    // Actions
    function Acts() {};

    /*	Acts.prototype.Alert = function ()
    	{
    		alert("Test property = " + this.testProperty);
    	};
    */

    Acts.prototype.setRandomColorProperties = function (a, b, c) {
        propieta.hue = a;
        propieta.luminosity = b;
        propieta.format = c;
    };

    Acts.prototype.setRandomColorProperties_Alpha = function (a) {
        propieta.check_alpha = true;
        if (a == 0) propieta.alpha = 0;
        if (a >= 100) propieta.alpha = 1;
        if (a > 0 && a < 100) propieta.alpha = a / 100;
    };

    Acts.prototype.setRandomColorProperties_CheckAlpha = function (a) {
        propieta.check_alpha = a;
    };

    Acts.prototype.setRandomColorProperties_Seed = function (a) {
        propieta.seed = a;
    };

    pluginProto.acts = new Acts();

    //////////////////////////////////////
    // Expressions
    function Exps() {};

    /*	Exps.prototype.Double = function (ret, number)
    	{
    		ret.set_float(number * 2);
    	};
    */

    Exps.prototype.getRandomColor = function (ret) {
        var options = {
            hue: convertiProprietaInString("hue", propieta.hue),
            luminosity: convertiProprietaInString("luminosity", propieta.luminosity),
            format: convertiProprietaInString("format", propieta.format)
        };

        if (propieta.check_alpha) {
            options.alpha = propieta.alpha;
        };

        if (propieta.seed.length > 0) {
            options.seed = propieta.seed;
        };

        var color = prettyRandomColor(options);
        ret.set_any(color);
    }

    Exps.prototype.getRandomColor_TextSetting = function (ret, a, b, c) {
        var options = {
            hue: convertiProprietaInString("hue", a),
            luminosity: convertiProprietaInString("luminosity", b),
            format: convertiProprietaInString("format", c)
        };

        var color = prettyRandomColor(options);
        ret.set_any(color);
    }
    
    Exps.prototype.getRandomColor_Seed = function (ret, a, b) {
        var options = {
            seed: a,
            format: convertiProprietaInString("format", b)
        };
        
        var color = prettyRandomColor(options);
        ret.set_any(color);
    }

    pluginProto.exps = new Exps();

}());

function convertiProprietaInString(proprieta, valore) {

    if (proprieta == "hue") {
        switch (valore) {
            case 0:
                return "random";
            case 1:
                return "red";
            case 2:
                return "orange";
            case 3:
                return "yellow";
            case 4:
                return "green";
            case 5:
                return "blue";
            case 6:
                return "purple";
            case 7:
                return "pink";
            case 8:
                return "monochrome";
            default:
                var temp = valore.toLowerCase();
                if (temp == "random" || temp == "red" || temp == "orange" || temp == "yellow" || temp == "green" || temp == "blue" || temp == "purple" || temp == "pink" || temp == "monochrome") {
                    return temp;
                };
                return "random";
        }
    };

    if (proprieta == "luminosity") {
        switch (valore) {
            case 0:
                return "random";
            case 1:
                return "bright";
            case 2:
                return "light";
            case 3:
                return "dark";
            default:
                var temp = valore.toLowerCase();
                if (temp == "random" || temp == "bright" || temp == "light" || temp == "dark") {
                    return temp;
                };
                return "random";
        }
    };

    if (proprieta == "format") {
        switch (valore) {
            case 0:
                return "integer";
            case 1:
                return "rgb";
            case 2:
                return "rgba";
            case 3:
                return "rgbArray";
            case 4:
                return "hsl";
            case 5:
                return "hsla";
            case 6:
                return "hslArray";
            case 7:
                return "hex";
            case 8:
                return "hsv";
            case 9:
                return "hsvArray";
            default:
                var temp = valore.toLowerCase();
                if (temp == "integer" || temp == "rgb" || temp == "rgba" || temp == "hsl" || temp == "hsla" || temp == "hex" || temp == "hsv") {
                    return temp;
                };
                if (temp == "rgbarray") return "rgbArray";
                if (temp == "rgbarray") return "hslArray";
                if (temp == "hsvarray") return "hsvArray";
                return "integer";
        }
    };

    return "random";
};

function creaArrayC2(array) {
    var arrayJson = "";
    arrayJson = '{"c2array":true,"size": [3,1,1],"data": [[[' + array[0] + ']],[[' + array[1] + ']],[[' + array[2] + ']]]}';
    return arrayJson;
};

function prettyRandomColor(options) {

    // Seed to get repeatable colors
    var seed = null;

    // Shared color dictionary
    var colorDictionary = {};

    // Populate the color dictionary
    loadColorBounds();

    var randomColor = generaColoreRandom(options);

    function generaColoreRandom(options) {
        options = options || {};

        // Check if there is a seed and ensure it's an
        // integer. Otherwise, reset the seed value.
        if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
            seed = options.seed;

            // A string was passed as a seed
        } else if (typeof options.seed === 'string') {
            seed = stringToInteger(options.seed);

            // Something was passed as a seed but it wasn't an integer or string
        } else if (options.seed !== undefined && options.seed !== null) {
            throw new TypeError('The seed value must be an integer or string');

            // No seed, reset the value outside.
        } else {
            seed = null;
        }

        var H, S, B;

        // Check if we need to generate multiple colors
        if (options.count !== null && options.count !== undefined) {

            var totalColors = options.count,
                colors = [];

            options.count = null;

            while (totalColors > colors.length) {

                // Since we're generating multiple colors,
                // incremement the seed. Otherwise we'd just
                // generate the same color each time...
                if (seed && options.seed) options.seed += 1;

                colors.push(randomColor(options));
            }

            options.count = totalColors;

            return colors;
        }

        // First we pick a hue (H)
        H = pickHue(options);

        // Then use H to determine saturation (S)
        S = pickSaturation(H, options);

        // Then use S and H to determine brightness (B).
        B = pickBrightness(H, S, options);

        // Then we return the HSB color in the desired format
        return setFormat([H, S, B], options);
    };

    function pickHue(options) {

        var hueRange = getHueRange(options.hue),
            hue = randomWithin(hueRange);

        // Instead of storing red as two seperate ranges,
        // we group them, using negative numbers
        if (hue < 0) {
            hue = 360 + hue;
        }

        return hue;

    }

    function pickSaturation(hue, options) {

        if (options.luminosity === 'random') {
            return randomWithin([0, 100]);
        }

        if (options.hue === 'monochrome') {
            return 0;
        }

        var saturationRange = getSaturationRange(hue);

        var sMin = saturationRange[0],
            sMax = saturationRange[1];

        switch (options.luminosity) {

            case 'bright':
                sMin = 55;
                break;

            case 'dark':
                sMin = sMax - 10;
                break;

            case 'light':
                sMax = 55;
                break;
        }

        return randomWithin([sMin, sMax]);

    }

    function pickBrightness(H, S, options) {

        var bMin = getMinimumBrightness(H, S),
            bMax = 100;

        switch (options.luminosity) {

            case 'dark':
                bMax = bMin + 20;
                break;

            case 'light':
                bMin = (bMax + bMin) / 2;
                break;

            case 'random':
                bMin = 0;
                bMax = 100;
                break;
        }

        return randomWithin([bMin, bMax]);
    }

    function setFormat(hsv, options) {

        switch (options.format) {

            case 'integer':
                return HSVtoInteger(hsv);

            case 'hsvArray':
                return creaArrayC2(hsv);

            case 'hsv':
                return 'hsv(' + hsv[0] + ', ' + hsv[1] + ', ' + hsv[2] + ')';

            case 'hslArray':
                return creaArrayC2(HSVtoHSL(hsv));

            case 'hsl':
                var hsl = HSVtoHSL(hsv);
                return 'hsl(' + hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%)';

            case 'hsla':
                var hslColor = HSVtoHSL(hsv);
                var alpha = options.alpha || Math.random();
                return 'hsla(' + hslColor[0] + ', ' + hslColor[1] + '%, ' + hslColor[2] + '%, ' + alpha + ')';

            case 'rgbArray':
                return creaArrayC2(HSVtoRGB(hsv));

            case 'rgb':
                var rgb = HSVtoRGB(hsv);
                return 'rgb(' + rgb.join(', ') + ')';

            case 'rgba':
                var rgbColor = HSVtoRGB(hsv);
                var alpha = options.alpha || Math.random();
                return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

            default:
                return HSVtoHex(hsv);
        }

    }

    function getMinimumBrightness(H, S) {

        var lowerBounds = getColorInfo(H).lowerBounds;

        for (var i = 0; i < lowerBounds.length - 1; i++) {

            var s1 = lowerBounds[i][0],
                v1 = lowerBounds[i][1];

            var s2 = lowerBounds[i + 1][0],
                v2 = lowerBounds[i + 1][1];

            if (S >= s1 && S <= s2) {

                var m = (v2 - v1) / (s2 - s1),
                    b = v1 - m * s1;

                return m * S + b;
            }

        }

        return 0;
    }

    function getHueRange(colorInput) {

        if (typeof parseInt(colorInput) === 'number') {

            var number = parseInt(colorInput);

            if (number < 360 && number > 0) {
                return [number, number];
            }

        }

        if (typeof colorInput === 'string') {

            if (colorDictionary[colorInput]) {
                var color = colorDictionary[colorInput];
                if (color.hueRange) {
                    return color.hueRange;
                }
            }
        }

        return [0, 360];

    }

    function getSaturationRange(hue) {
        return getColorInfo(hue).saturationRange;
    }

    function getColorInfo(hue) {

        // Maps red colors to make picking hue easier
        if (hue >= 334 && hue <= 360) {
            hue -= 360;
        }

        for (var colorName in colorDictionary) {
            var color = colorDictionary[colorName];
            if (color.hueRange &&
                hue >= color.hueRange[0] &&
                hue <= color.hueRange[1]) {
                return colorDictionary[colorName];
            }
        }
        return 'Color not found';
    }

    function randomWithin(range) {
        if (seed === null) {
            return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
        } else {
            //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
            var max = range[1] || 1;
            var min = range[0] || 0;
            seed = (seed * 9301 + 49297) % 233280;
            var rnd = seed / 233280.0;
            return Math.floor(min + rnd * (max - min));
        }
    }

    function HSVtoHex(hsv) {

        var rgb = HSVtoRGB(hsv);

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
        }

        var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

        return hex;

    }

    function HSVtoInteger(hsv) {
        var rgb = HSVtoRGB(hsv);
        var dec = (rgb[2] * 65536) + (rgb[1] * 256) + (rgb[0]);
        return dec;
    }

    function defineColor(name, hueRange, lowerBounds) {

        var sMin = lowerBounds[0][0],
            sMax = lowerBounds[lowerBounds.length - 1][0],

            bMin = lowerBounds[lowerBounds.length - 1][1],
            bMax = lowerBounds[0][1];

        colorDictionary[name] = {
            hueRange: hueRange,
            lowerBounds: lowerBounds,
            saturationRange: [sMin, sMax],
            brightnessRange: [bMin, bMax]
        };

    }

    function loadColorBounds() {

        defineColor(
            'monochrome',
            null, [[0, 0], [100, 0]]
        );

        defineColor(
            'red', [-26, 18], [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
        );

        defineColor(
            'orange', [19, 46], [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
        );

        defineColor(
            'yellow', [47, 62], [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
        );

        defineColor(
            'green', [63, 178], [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
        );

        defineColor(
            'blue', [179, 257], [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
        );

        defineColor(
            'purple', [258, 282], [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
        );

        defineColor(
            'pink', [283, 334], [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
        );

    }

    function HSVtoRGB(hsv) {

        // this doesn't work for the values of 0 and 360
        // here's the hacky fix
        var h = hsv[0];
        if (h === 0) {
            h = 1;
        }
        if (h === 360) {
            h = 359;
        }

        // Rebase the h,s,v values
        h = h / 360;
        var s = hsv[1] / 100,
            v = hsv[2] / 100;

        var h_i = Math.floor(h * 6),
            f = h * 6 - h_i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            r = 256,
            g = 256,
            b = 256;

        switch (h_i) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
                r = v;
                g = p;
                b = q;
                break;
        }

        var result = [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
        return result;
    }

    function HSVtoHSL(hsv) {
        var h = hsv[0],
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            k = (2 - s) * v;

        return [
      h,
      Math.round(s * v / (k < 1 ? k : 2 - k) * 10000) / 100,
      k / 2 * 100
    ];
    }

    function stringToInteger(string) {
        var total = 0
        for (var i = 0; i !== string.length; i++) {
            if (total >= Number.MAX_SAFE_INTEGER) break;
            total += string.charCodeAt(i)
        }
        return total
    }

    //return randomColor;
    return randomColor;

};
