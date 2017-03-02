/**
 * HealthMobile React Native App
 *
 * RootContainer.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {View} from 'react-native';

import Styles from './styles/RootContainerStyle';
import NavigationRouter from './NavigationRouter';

class RootContainer extends Component {
    render() {
        return (
            <View style={Styles.applicationView}>
                <NavigationRouter/>
            </View>
        )
    }
}

export default RootContainer;