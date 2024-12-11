import React, {Component, useEffect, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import service from '../../utils/serviceApi';
import DeviceStorage from '../../utils/localStorage';
import {toast, hideToast, showLoading, hideLoading} from '../../utils';
import RootNavigation from '../../utils/RootNavigation';
import { useImmer } from 'use-immer';

function Register(): React.JSX.Element {
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [cityName, setCityName] = React.useState('');
  const [key, setKey] = React.useState('');
  const [time, setTime] = useImmer(90);
  const timer = useRef<any>();

  const onChangeText = (type: any, text: any) => {
    let _value;
    if (type === 'phone') {
      setPhone(text.replace(/[^0-9]/gi, ''));
    } else if (type === 'name') {
      setName(text);
    } else if (type === 'cityName') {
      setCityName(text);
    }
  };
  const getCode = () => {
    if (!phone) return toast('请输入正确的手机号');
    if (time < 90) return '';
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
    service.getPhoneCode({phone}).then(res => success(res));
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
   * Register
   */
  const register = async () => {
    if (!phone || !name || !cityName) return;
    showLoading();
    const success = async (data: any) => {
      hideLoading();
      if (data.code === 200) {
        RootNavigation.navigate('Login');
      } else {
        hideLoading();
        toast(data.message);
      }
    };

    service.register({mobile: phone, name, cityName}).then(res => success(res));
  };

  useEffect(() => {
    // hideToast();
    // hideLoading();
    DeviceStorage.clear();
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Apply</Text>
      <View style={styles.main}>
        <View style={[styles.mainLine]}>
          <TextInput
            maxLength={20}
            keyboardType="number-pad"
            placeholderTextColor="#3F3F3F"
            value={name}
            style={styles.mainMobile}
            placeholder="输入名字"
            onChangeText={text => onChangeText('name', text)}
          />
        </View>
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
            maxLength={50}
            keyboardType="number-pad"
            placeholderTextColor="#3F3F3F"
            value={cityName}
            style={styles.mainMobile}
            placeholder="输入所在城市"
            onChangeText={text => onChangeText('cityName', text)}
          />
        </View>
        {/* <View style={[styles.mainLine]}>
          <TextInput secureTextEntry={true} value={password}  placeholderTextColor="#3F3F3F" style={styles.mainMobile} placeholder="输入密码" onChangeText={text => this.onChangeText('password', text)} />
      </View> */}
        {/* <View style={[styles.mainLine, styles.borderNormal]}>
          <TextInput maxLength={6} keyboardType="number-pad" value={code} style={styles.mainCode} placeholder="请输入验证码" onChangeText={text => this.onChangeText('code', text)} />
          <TouchableOpacity activeOpacity={0.75} onPress={() => this.getCode()} style={[styles.mainCodeBtn]}>
              <Text style={styles.mainCodeFont}>{time < 90 ? time + 's 后获取' : '获取验证码'}</Text>
          </TouchableOpacity>
      </View> */}
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => register()}
          style={[styles.mainLoginBtn]}>
          <Text style={styles.mainLogin}>Apply</Text>
        </TouchableOpacity>
        {/* <Text style={styles.loginTip}>仅限网约车平台司机登录</Text> */}
      </View>
    </View>
  );
}

export default Register;
