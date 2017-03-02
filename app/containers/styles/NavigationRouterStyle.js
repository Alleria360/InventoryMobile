/**
 * HealthMobile React Native App
 *
 * NavigationRouterStyle.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/13
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
    scene:{
        flex: 1,
        backgroundColor: Colors.backgroundWhite,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null
    },

    navigationbar:{
        backgroundColor: Colors.flatBlue
    },

    title:{
        fontSize: Fonts.size.title,
        color: Colors.textBlack,
        fontFamily: Fonts.type.base
    }

})

