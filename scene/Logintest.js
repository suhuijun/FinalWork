import React, { Component } from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export class Logintest extends Component {
    render() {
        return (
            <View>
                <Button title="跳返回登录页" onPress={()=>Actions.pop()}/>
                <Text>登录测试</Text>
            </View>
        )
    }
}

export default Logintest
