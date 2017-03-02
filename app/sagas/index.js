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
import {takeLatest} from 'redux-saga'

import {LoginTypes} from '../redux/LoginRedux'

import {login} from './LoginSagas'

export default function * root() {
    yield [
        takeLatest(LoginTypes.LOGIN_REQUEST, login),
    ]
}