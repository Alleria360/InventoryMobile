/**
 * HealthMobile React Native App
 *
 * LoginScreen.js
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
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import LoginActions from '../redux/LoginRedux';
import Styles from './styles/LoginScreenStyle';
import {Metrics, Images} from '../themes';

/**
 * 属性
 */
type LoginScreenProps = {
    dispatch: () => any,
    fetching: boolean,
    attemptLogin: () => void
}

class LoginScreen extends Component {

    props: LoginScreenProps;

    /** 状态 */
    state: {
        usercode: string,
        password: string,
        visibleHeight: number,
        topLogo:{width: number}
    };

    isAttempting: boolean;

    constructor(props: LoginScreenProps) {
        super(props);
        this.state = {
            usercode: '',
            password: '',
            visibleHeight: Metrics.screenHeight,
            topLogo:{ width: Metrics.icons.xl}
        };
        this.isAttempting = false
    }


    /**
     * 输入用户名
     * @param text
     */
    handleChangeUsername = (text) => {
        this.setState({ usercode: text })
    };

    /**
     * 输入密码
     * @param text
     */
    handleChangePassword = (text) => {
        this.setState({ password: text })
    };

    /**
     * 登录
     */
    handlePressLogin = () => {
        const {usercode, password} = this.state;
        this.isAttempting = true;

        this.props.attemptLogin(usercode, password);
    };


    render() {
        const {usercode, password} = this.state;
        const {fetching} = this.props;
        const editable = !fetching;
        const textInputStyle = editable ? Styles.textInput :
            Styles.textInputReadonly;

        return (
            <View style={{flex: 1, backgroundColor: 'blue'}}>


                <ScrollView contentContainerStyle={{justifyContent: 'center'}}
                            style={[Styles.container, {height: this.state.visibleHeight}]}
                >
                    <Image source={Images.loginLogo} style={Styles.logo}/>
                    <Text style={Styles.logoText}>孚诺检验</Text>
                    <View style={Styles.form}>
                        <View style={Styles.row}>
                            <Image source={Images.loginUser} style={Styles.icon}/>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <TextInput
                                    ef='usercode'
                                    style={textInputStyle}
                                    value={usercode}
                                    editable={editable}
                                    keyboardType='default'
                                    returnKeyType='next'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    underlineColorAndroid='transparent'
                                    placeholder='登录账号'
                                    onChangeText={this.handleChangeUsername}
                                    onSubmitEditing={() => this.refs.password.focus()}/>
                                <View style={Styles.line}/>
                            </View>

                        </View>
                        <View style={Styles.row}>
                            <Image source={Images.loginPwd} style={Styles.icon}/>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <TextInput
                                    ref='password'
                                    style={textInputStyle}
                                    value={password}
                                    editable={editable}
                                    keyboardType='default'
                                    returnKeyType='go'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    secureTextEntry
                                    underlineColorAndroid='transparent'
                                    placeholder='密码'
                                    onChangeText={this.handleChangePassword}
                                    onSubmitEditing={this.handlePressLogin}/>
                                <View style={Styles.line}/>
                            </View>
                        </View>

                        <View style={{paddingTop: 36}}>
                            <TouchableOpacity style={Styles.loginButtonWrapper}
                                              onPress={this.handlePressLogin}>
                                <View style={Styles.loginButton}>
                                    <Text style={Styles.loginText}>登录</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>

                <Image style={Styles.backgroundImage}
                       source={Images.loginBottom}/>

                <View style={Styles.bottomText}>
                    <Text style={Styles.comTitle}>孚诺科技(大连)有限公司</Text>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.login.fetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (usercode, password) =>
            dispatch(LoginActions.loginRequest(usercode, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);