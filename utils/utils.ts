// This file contains all utility functions that our app is using.

//#region Types
type IndexableType = {
    [key: string]: any;
};
//#endregion Types

//#region Variables
const BASE_FONT_SIZE = 16;
//#endregion Variables



// Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
export const omit = (obj: IndexableType, omitKeys: string[]) => {
    const result: IndexableType = {};
    // Get object properties as an array
    const propsArray = Object.keys(obj);
    propsArray.forEach(key => {
        // Searches the array for the specified item, if the item is not found it returns -1 then
        // construct a new object
        if (omitKeys.indexOf(key) === -1) {
            result[key] = obj[key];
        }
    });
    return result;
};







// Hex to Rgb not an outsource function
const hexToRgb = (hexCode: string) => {
    const rgb = [];
    if (hexCode.length === 7) {
        const str = hexCode.substring(1); // ff0000
        for (let i = 0; i < str.length; i += 2) {
            const str2 = str.substring(i, i + 2);
            rgb.push(parseInt(str2, 16));
        }
        // Returns Array
        return rgb;
    } else {
        console.error('Please provide correct 6 characters hex code with # symbol.');
    }
};





// Rgb to Hex not an outsource function
const rgbToHsl = (r: number, g: number, b: number) => {
    // Divide the red, green, and blue by 255 to use values between 0 and 1
    r = r / 255;
    g = g / 255;
    b = b / 255;
    // Find maximum & minimum value of R,G,B
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // Difference between them
    const delta = max - min;
    // Calculate Hue and Saturation
    let h,s,l;
    // Calculate hue
    // No difference
    if (delta === 0) {
        h = 0;
    }
    // Red is max
    else if (max === r) {
        h = ((g - b) / delta) % 6;
    }
    // Green is max
    else if (max === g) {
        h = (b - r) / delta + 2;
    }
    // Blue is max
    else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    // Make negative hues positive behind 360°
    if (h < 0) {
        h += 360;
    }
    // Calculate lightness
    l = (max + min) / 2;
    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return [h,Math.floor(s),Math.floor(l)];
};



// Convert your hex code to hsl
export const hexToHsl = (hexCode: string) => {
    // Convert Hex to Rgb
    const rgb = hexToRgb(hexCode);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (rgb.length > 0 && typeof rgb !== 'undefined') {
        // Destructure elements from an array
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const [h,s,l] = rgbToHsl(...rgb);
        return `hsl(${h}, ${s}%,${l}%)`;
    }
};

// Convert hex to hsla
export const hexToHsla = (hexCode: string, alpha: number) => {
    // Convert Hex to Rgb
    const rgb = hexToRgb(hexCode);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (rgb.length > 0 && typeof rgb !== 'undefined') {
        // Destructure elements from an array
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const [h,s,l] = rgbToHsl(...rgb);
        return `hsl(${h}, ${s}%,${l}%,${alpha})`;
    }
};

// Convert Pixel to rem
export const rem = (pixel: number,base = BASE_FONT_SIZE) => {
    return `${(pixel / base)}rem`;
};


// Convert pixel line-height to normal
export const lineHeight = (pixel: number,base = BASE_FONT_SIZE) => {
    return `${(pixel / base)}`;
};
