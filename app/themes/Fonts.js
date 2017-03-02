/**
 * HealthMobile React Native App
 *
 * Fonts.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */

const type = {
    base: 'HelveticaNeue',
    bold: 'HelveticaNeue-Bold',
    italic: 'HelveticaNeue-Italic'
};

const size = {
    header: 20,
    input: 18,
    regular: 17,
    title:16,
    medium: 14,
    small: 12,
    tiny: 8.5
};

const style = {

    header: {
        fontFamily: type.base,
        fontSize: size.header
    },

    normal: {
        fontFamily: type.base,
        fontSize: size.regular
    },

    description: {
        fontFamily: type.base,
        fontSize: size.medium
    },

};

export default {
    type,
    size,
    style
}