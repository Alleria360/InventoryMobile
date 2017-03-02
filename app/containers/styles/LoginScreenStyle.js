/**
 * HealthMobile React Native App
 *
 * LoginScreenStyle.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {StyleSheet} from 'react-native'
import {Colors, Metrics, Fonts} from '../../themes';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundWhite,
        paddingTop: 80
    },

    form: {
        // backgroundColor: Colors.backgroundGray,
        margin: Metrics.baseMargin,
        paddingVertical: Metrics.baseMargin,
        borderRadius: 4
    },
    row: {
        flexDirection: 'row',
        // paddingVertical: Metrics.baseMargin,
        paddingTop: Metrics.baseMargin,
        paddingHorizontal: Metrics.doubleBaseMargin,
        paddingRight: Metrics.doubleBaseMargin * 2,
    },
    icon:{
        alignSelf: 'center',
        resizeMode: 'contain',
        width: Metrics.icons.medium,
        height: Metrics.icons.medium,
        // paddingHorizontal: Metrics.doubleBaseMargin,
        marginLeft: Metrics.baseMargin,
        marginRight: Metrics.doubleBaseMargin,
    },
    rowLabel: {
        color: Colors.charcoal
    },
    textInput: {
        // flex: 1,
        height: 40,
        fontSize: Fonts.size.input,
        color: Colors.coal
    },
    textInputReadonly: {
        height: 40,
        color: Colors.steel
    },
    line:{
        backgroundColor: Colors.lineDrakGray,
        height: 0.5
    },

    loginRow: {
        paddingBottom: Metrics.doubleBaseMargin,
        paddingHorizontal: Metrics.doubleBaseMargin,
        flexDirection: 'row'
    },
    loginButtonWrapper: {
        flex: 1,
        width: 176,
        height: Metrics.buttonHeight,
        alignSelf: 'center',

    },
    loginButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.flatLightBlue,
        borderRadius: Metrics.buttonArcRadius,
        backgroundColor: Colors.textBlue,
        padding: 6,
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',

        color: Colors.textWhite,
        fontSize: Fonts.size.input,
    },
    logo: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: Metrics.icons.xl,
        height: Metrics.icons.xl,
    },

    logoText: {
        textAlign: 'center',
        color: Colors.textBlue,
        fontSize: Fonts.size.regular,
        paddingBottom: Metrics.smallMargin
    },



    backgroundImage: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: Metrics.screenWidth,
        height: Metrics.screenWidth * 0.355,
        justifyContent: 'flex-end',
        resizeMode: 'contain',
    },

    bottomText:{
        position: 'absolute',
        marginBottom: Metrics.baseMargin,
        backgroundColor: Colors.transparent,
        width: Metrics.screenWidth,
        bottom:0
    },

    comTitle: {
        textAlign: 'center',
        margin: Metrics.baseMargin,
        fontSize: Fonts.size.small,
        color: Colors.textWhite
    }

})