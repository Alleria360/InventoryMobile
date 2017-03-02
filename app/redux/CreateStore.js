/**
 * HealthMobile React Native App
 *
 * CreateStore.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

export default (rootReducer, rootSaga) => {

    const middleware = [];
    const enhancers = [];

    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(
        rootReducer,
        compose(...enhancers)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}