/**
 * HealthMobile React Native App
 *
 * index.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {combineReducers} from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas'

export default () => {
    const rootReducer = combineReducers({
        login: require('./LoginRedux').reducer,
    });

    return configureStore(rootReducer, rootSaga)
}