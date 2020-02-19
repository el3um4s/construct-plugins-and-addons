// converti un numero rappresentante il formato del colore in una stringa

function getComboFormat(n)
{
    /*["rgb", "rgba", "rgbArray", "hsl", "hsla", "hslArray", "hex"]*/
    switch (n)
    {
        case 0:
            return "rgb";
            break;
        case 1:
            return "rgba";
            break;
        case 2:
            return "rgbArray";
            break;
        case 3:
            return "hsl";
            break;
        case 4:
            return "hsla";
            break;
        case 5:
            return "hslArray";
            break;
        case 6:
            return "hex";
            break;
        default:
            return "hex";
            break;
    }
}

// converti un numero rappresentante la luminosità in una stringa

function getComboLuminosity(n)
{
    /*["random", "bright", "light", "dark"]*/
    switch (n)
    {
        case 0:
            return "random";
            break;
        case 1:
            return "bright";
            break;
        case 2:
            return "light";
            break;
        case 3:
            return "dark";
            break;
        default:
            return "random";
            break;
    }
}

// converti una stringa in un colore C3

function convertColorToC3Color(format, color)
{
    let c3color = new C3.Color;

    let r = 255;
    let g = 255;
    let b = 255;
    let a = 1;

    if (format == "hex")
    {
        let tempC = hexToRgb(color);
        r = tempC.r;
        g = tempC.g;
        b = tempC.b;
    }
    else if (format == "rgb")
    {
        let tempC = rgbToRgb(color);
        r = tempC.r;
        g = tempC.g;
        b = tempC.b;
    }
    else if (format == "rgba")
    {
        let tempC = rgbaToRgba(color);
        r = tempC.r;
        g = tempC.g;
        b = tempC.b;
        a = tempC.a;
    }
    else if (format == "rgbArray")
    {
        r = color[0];
        g = color[1];
        b = color[2];
    }
    else if (format == "hsl")
    {
        let tempC = HSLstringToRGB(color);
        r = tempC.r;
        g = tempC.g;
        b = tempC.b;
    }
    else if (format == "hslArray")
    {
        let tempC = HSLToRGB(color[0], color[1], color[2]);
        r = tempC.r;
        g = tempC.g;
        b = tempC.b;
    }
    else if (format == "hsla")
    {
        let tempC = HSLAToRGBA(color);
        r = tempC.r;
        g = tempC.g;
        b = tempC.b;
        a = tempC.a;
    }

    c3color.setRgba(r / 255, g / 255, b / 255, a);
    return c3color;
}


function hexToRgb(hex)
{
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b)
    {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToRgb(rgb)
{
    const result = rgb.substring(4, rgb.length - 1)
        .replace(/ /g, '')
        .split(',');
    return {
        r: parseInt(result[0]),
        g: parseInt(result[1]),
        b: parseInt(result[2]),
        a: 1
    }
}

function rgbaToRgba(rgba)
{
    //console.log(rgba);
    const result = rgba.substring(5, rgba.length - 1)
        .replace(/ /g, '')
        .split(',');
    //console.log(result);
    return {
        r: parseInt(result[0]),
        g: parseInt(result[1]),
        b: parseInt(result[2]),
        a: parseFloat(result[3])
    }
}

function HSLstringToRGB(hsl)
{
    let sep = hsl.indexOf(",") > -1 ? "," : " ";
    hsl = hsl.substr(4).split(")")[0].split(sep);

    let h = hsl[0],
    s = hsl[1].substr(0, hsl[1].length - 1) / 100,
    l = hsl[2].substr(0, hsl[2].length - 1) / 100;

    // Strip label and convert to degrees (if necessary)
    if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);
    else if (h.indexOf("rad") > -1) h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    else if (h.indexOf("turn") > -1) h = Math.round(h.substr(0, h.length - 4) * 360);
    // Keep hue fraction of 360 if ending up over
    if (h >= 360) h %= 360;

    let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
    if (0 <= h && h < 60)
    {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120)
    {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180)
    {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240)
    {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300)
    {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360)
    {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return {
        r: r,
        g: g,
        b: b
    }
}

function HSLToRGB(h, s, l)
{
    // Must be fractions of 1
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

    if (0 <= h && h < 60)
    {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120)
    {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180)
    {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240)
    {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300)
    {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360)
    {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return {
        r: r,
        g: g,
        b: b
    }
}

function HSLAToRGBA(hsla)
{
    let sep = hsla.indexOf(",") > -1 ? "," : " ";
    hsla = hsla.substr(5).split(")")[0].split(sep);

    if (hsla.indexOf("/") > -1) hsla.splice(3, 1);

    let h = hsla[0],
    s = hsla[1].substr(0, hsla[1].length - 1) / 100,
    l = hsla[2].substr(0, hsla[2].length - 1) / 100,
    a = hsla[3];

    if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);
    else if (h.indexOf("rad") > -1) h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    else if (h.indexOf("turn") > -1) h = Math.round(h.substr(0, h.length - 4) * 360);
    if (h >= 360) h %= 360;

    let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
    if (0 <= h && h < 60)
    {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120)
    {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180)
    {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240)
    {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300)
    {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360)
    {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return {
        r: r,
        g: g,
        b: b,
        a: a
    }

}
