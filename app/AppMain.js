/**
 * HealthMobile React Native App
 *
 * AppMain.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';

import RootContainer from './containers/RootContainer';
import createStore from './redux';


const store = createStore();

class appMain extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        )
    }
}

export default appMain;