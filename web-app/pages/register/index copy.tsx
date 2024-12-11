import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import service from '../../utils/serviceApi';
import DeviceStorage from '../../utils/localStorage';
import { toast, hideToast, showLoading, hideLoading } from '../../utils';
import RootNavigation from '../../utils/RootNavigation';

export default class Register extends Component {
    state = {
        phone: '',
        name: '',
        cityName: '',
        key: '',
        timer: null,
        time: 90,
    };
    componentDidMount() {
        hideToast();
        hideLoading();
        DeviceStorage.clear();
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    onChangeText(type, text) {
        let _value;
        switch (type) {
            case 'phone':
                _value = text.replace(/[^0-9]/gi, '');
                break;
            default:
                _value = text;
                break;
        }
        this.setState({
            [type]: _value,
        });
    }
    getCode() {
        // this.props.navigation.replace('My');
        // RootNavigation.TabarJump('My');
        // this.props.navigation.navigate('Home');
        // TabarNavigation.jumpTo('My');
        // return;
        const { time, phone, timer } = this.state;
        if (!phone) return toast('请输入正确的手机号');
        if (time < 90) return;
        showLoading();
        const success = data => {
            hideLoading();
            if (data.code === 200) {
                toast('短信发送成功');
            } else {
                clearInterval(timer);
                this.setState({ time: 90 });
                toast('服务器异常');
            }
        };
        service.getPhoneCode({ phone }).then(res => success(res));
        this.setState({
            timer: setInterval(() => {
                this.dealTime();
            }, 1000),
        });
    }
    dealTime() {
        const { time, timer } = this.state;
        if (time <= 0) {
            clearInterval(timer);
            this.setState({ time: 90 });
        } else {
            this.setState({
                time: time - 1,
            });
        }
    }
    /**
     * Register
     */
    async register() {
        const { phone, name, cityName } = this.state;
        if (!phone || !name || !cityName) return;
        showLoading();
        const success = async data => {
            hideLoading();
            if (data.code === 200) {
                RootNavigation.navigate('Login');
            } else {
                hideLoading();
                toast(data.message);
            }
        };
        
        service.register({mobile: phone, name,cityName}).then(res => success(res));
    }
    render() {
        const { phone, name, cityName } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Driver Apply</Text>
                <View style={styles.main}>
                    <View style={[styles.mainLine]}>
                        <TextInput maxLength={20} keyboardType="number-pad" placeholderTextColor="#3F3F3F" value={name} style={styles.mainMobile} placeholder="输入名字" onChangeText={text => this.onChangeText('name', text)} />
                    </View>
                    <View style={[styles.mainLine]}>
                        <TextInput maxLength={20} keyboardType="number-pad" placeholderTextColor="#3F3F3F" value={phone} style={styles.mainMobile} placeholder="输入手机号" onChangeText={text => this.onChangeText('phone', text)} />
                    </View>
                    <View style={[styles.mainLine]}>
                        <TextInput maxLength={50} keyboardType="number-pad" placeholderTextColor="#3F3F3F" value={cityName} style={styles.mainMobile} placeholder="输入所在城市" onChangeText={text => this.onChangeText('cityName', text)} />
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
                    <TouchableOpacity activeOpacity={0.75} onPress={() => this.register()} style={[styles.mainLoginBtn]}>
                        <Text style={styles.mainLogin}>Apply</Text>
                    </TouchableOpacity>
                    {/* <Text style={styles.loginTip}>仅限网约车平台司机登录</Text> */}
                </View>
            </View>
        );
    }
}