/**
 * HealthMobile React Native App
 *
 * NavigationRouter.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {
    Scene,
    Router,
    Modal,
    Reducer
} from 'react-native-router-flux';

import Styles from './styles/NavigationRouterStyle';
import {Metrics} from '../themes';
import Login from './LoginScreen';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        // console.log('ACTION:', action);
        return defaultReducer(state, action);
    }
};

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {

    const style = Styles.scene;

    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : Metrics.navBarHeight;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;

    }
    return style;
};

class NavigationRouter extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate}
                    getSceneStyle={getSceneStyle}
                    navigationBarStyle={Styles.navigationbar}
                    titleStyle={Styles.title} >
                <Scene key="root" hideTabBar hideNavBar>
                    <Scene initial key="login" component={Login} title="系统登录"/>
                </Scene>
            </Router>
        )
    }
}

export default NavigationRouter;