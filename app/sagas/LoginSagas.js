/**
 * HealthMobile React Native App
 *
 * LoginSagas.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {put} from 'redux-saga/effects';
import LoginActions from '../redux/LoginRedux';

export function * login({usercode, password}) {
    if (password === '') {
        yield put(LoginActions.loginFailure('WRONG'))
    } else {
        yield put(LoginActions.loginSuccess(usercode))
    }
}