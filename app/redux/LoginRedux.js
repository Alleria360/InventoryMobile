/**
 * HealthMobile React Native App
 *
 * LoginRedux.js
 * Version 1.0.0
 *
 * (\_/)
 * (O.o)    Zhang.Tao
 * (> <)    2017/2/12
 *
 * Copyright (c) 2016 zhangtao. All rights reserved.
 */
import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/** --- 创建Types和Action --- */

const {Types, Creators} = createActions({
    loginRequest: ['usercode', 'password'],
    loginSuccess: ['usercode'],
    loginFailure: ['error'],
    logout: null
});

export const LoginTypes = Types;
export default Creators;

/** --- 初始状态 --- */

export const INITIAL_STATE = Immutable({
    usercode: null,
    error: null,
    fetching: false
});

/** --- Reducers --- */

export const request = (state: Object) => state.merge({
    fetching: true
});

export const success = (state: Object, {usercode}: Object) => state.merge({
    fetching: false, error: null, usercode
});

export const failure = (state: Object, {error}: Object) => state.merge({
    fetching: false, error
});

export const logout = (state: Object) => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_REQUEST]: request,
    [Types.LOGIN_SUCCESS]: success,
    [Types.LOGIN_FAILURE]: failure,
    [Types.LOGOUT]: logout,
});


export const isLoggedIn = (loginState: Object) =>
    loginState.usercode != null;