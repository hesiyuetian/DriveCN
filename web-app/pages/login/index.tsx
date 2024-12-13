import React, {useEffect, useRef, useState} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './style';
import service from '../../utils/serviceApi';
import DeviceStorage from '../../utils/localStorage';
import {toast, hideToast} from '../../utils/index';
import {useImmer} from 'use-immer';
import Toast from 'react-native-root-toast';
import {useLoading} from '../../../state/base/hooks';

const sha1 = require('js-sha1');

function Login({navigation}: any): React.JSX.Element {
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [time, setTime] = useImmer(90);
  const timer = useRef<any>(null);
  const [, {showLoading, hideLoading}] = useLoading();

  const onChangeText = (type: any, text: any) => {
    if (type === 'phone') {
      setPhone(text.replace(/[^0-9]/gi, ''));
    } else {
      setPassword(text);
    }
  };

  const register = () => {
    // RootNavigation.navigate('Register');
    navigation.navigate('Register');
  };
  
  const getCode = () => {
    if (!phone) return toast('请输入正确的手机号');
    if (time < 90) return;

    showLoading();

    const success = (data: any) => {
      hideLoading();
      if (data.code === 200) {
        toast('短信发送成功');
      } else {
        clearInterval(timer.current);
        setTime(90);
        toast('服务器异常');
      }
    };
    service.getPhoneCode({phone}).then((res: any) => success(res));
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      dealTime();
    }, 1000);
  };

  const dealTime = () => {
    if (time <= 0) {
      clearInterval(timer.current);
      setTime(90);
    } else {
      setTime((dafer: any) => dafer - 1);
    }
  };

  /**
   * Login
   */
  const login = async () => {
    if (!phone || !password) return '';

    showLoading();
    const success = async (data: any) => {
      hideLoading();
      console.log('---', data);
      if (data.code === 200 && data.result) {
        await DeviceStorage.set('token', data.result.token);
        // this.props.driverStore.startTask();
        getUserInfo();
      } else {
        hideLoading();
        toast(data.message);
      }
    };
    service
      .login({phoneNum: phone, pass: sha1(password)})
      .then(res => success(res));
  };

  /**
   * GetUserInfo
   */
  const getUserInfo = () => {
    const success = async (data: any) => {
      hideLoading();
      if (data.code === 200) {
        console.log('start My');
        await DeviceStorage.set('userInfo', data.result);
        console.log('My');
        navigation.replace('My');
      } else {
        toast(data.message);
      }
    };
    service.getUserInfo().then(res => success(res));
  };

  useEffect(() => {
    hideToast();
    hideLoading();
    DeviceStorage.clear();
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Login</Text>
      <View style={styles.main}>
        <View style={[styles.mainLine]}>
          <TextInput
            maxLength={20}
            keyboardType="number-pad"
            placeholderTextColor="#3F3F3F"
            value={phone}
            style={styles.mainMobile}
            placeholder="输入手机号"
            onChangeText={text => onChangeText('phone', text)}
          />
        </View>
        <View style={[styles.mainLine]}>
          <TextInput
            secureTextEntry={true}
            value={password}
            placeholderTextColor="#3F3F3F"
            style={styles.mainMobile}
            placeholder="输入密码"
            onChangeText={text => onChangeText('password', text)}
          />
        </View>

        {/* <View style={[styles.mainLine, styles.borderNormal]}>
                    <TextInput maxLength={6} keyboardType="number-pad" value={code} style={styles.mainCode} placeholder="请输入验证码" onChangeText={text => this.onChangeText('code', text)} />
                    <TouchableOpacity activeOpacity={0.75} onPress={() => this.getCode()} style={[styles.mainCodeBtn]}>
                        <Text style={styles.mainCodeFont}>{time < 90 ? time + 's 后获取' : '获取验证码'}</Text>
                    </TouchableOpacity>
                </View> */}

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => login()}
          style={[styles.mainLoginBtn]}>
          <Text style={styles.mainLogin}>登录</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => register()}>
          <Text style={styles.register}>申请注册</Text>
        </TouchableOpacity>
        {/* <Text style={styles.loginTip}>仅限网约车平台司机登录</Text> */}
      </View>
    </View>
  );
}

export default Login;
