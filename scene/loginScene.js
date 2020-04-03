import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux';
import { red } from 'color-name';

export class LoginScene extends Component {
    constructor(props){
        super(props);
        this.state = {
            load:"none",
            usernameht:"123",
            paswordht:"123",
            u:null,
            p:null,
        }
    }

    denglu(){
        this.setState({
            usernameht:this.props.zhanghao,
            paswordht:this.props.mima
        })
        if(this.state.u == this.state.usernameht || this.state.p == this.state.paswordht){
            Actions.Home()
        }else{
            alert("账号、密码不正确！")
            return;
        }
    }

    render() {
        return (
            <View style={style_login.box_login}>
                <Image source={require('../img/login-b.jpg')} style={{height:'100%'}}></Image>
                <View style={{flexDirection:'row',marginTop:-550}}>
                    <Text style={style_login.text_input}>账号：</Text>
                    <TextInput placeholder="请输入账号" style={style_login.input_up} onChangeText={(text)=>{
                        this.setState({u:text})
                    }}></TextInput>
                </View>
                <View style={{flexDirection:'row',marginTop:50}}>
                    <Text style={style_login.text_input}>密码：</Text>
                    <TextInput placeholder="请输入密码" style={style_login.input_up}></TextInput>
                </View>
                <TouchableOpacity style={style_login.style_btn} onPress={()=>this.denglu()}>
                    <Text style={{fontSize:25,marginLeft:'45%',marginTop:5,color:'white'}}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style_login.style_btn} onPress={()=>Actions.Register()}>
                    <Text style={{fontSize:25,marginLeft:'45%',marginTop:5,color:'white'}}>注册</Text>
                </TouchableOpacity>
                <View style={{flex:1,marginTop:-580,backgroundColor:'#5f0a20',opacity:0.8,display:this.state.load}}>
                    <Image source={require('../img/load.jpg')} style={{width:200,height:200,marginTop:'35%',marginLeft:'32%'}}></Image>
                    <Text style={{fontSize:30,color:'white',marginLeft:'35%',marginTop:15}}>正在登录。。</Text>
                </View>
            </View>
        )
    }

    
}

const style_login = StyleSheet.create({
    text_input:{
        fontSize:20,
        color:'#5f0a20',
        marginTop:6,
        marginLeft:25,
        
    },
    input_up:{
        backgroundColor:'white',
        width:'75%',
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:4,
        fontSize:20,
    },
    style_btn:{
        width:'90%',
        backgroundColor:'#712438',
        height:45,
        marginTop:60,
        marginLeft:'5%',
        borderRadius:20
    },
    box_login:{
        backgroundColor:'blue',
        flex:1,
    }
})

export default LoginScene
