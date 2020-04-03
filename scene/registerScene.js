import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput,TouchableOpacity,ImageBackground,Image} from 'react-native';
import {Actions,refresh} from 'react-native-router-flux';

export class RegisterScene extends Component {

    constructor(props){
        super(props);
        this.state = {
            u:null,
            p:null,
            cf:null,
            dh:null,
            yzm:null
        }
    }

    zhuce(){
        if(this.state.u == null){
            alert("账号不能为空！")
        }else if(this.state.p == null){
            alert("密码不能为空！")
        }else if(this.state.p != this.state.cf){
            alert("密码不一致！")
        }else if(this.state.dh == null){
            alert("联系方式不能为空！")
        }else{
            alert("注册成功！！")
        }
    }

    render() {
        return (
            <View style={style_login.box_login}>
                <Image source={require('../img/login-b.jpg')} style={{height:'100%'}}></Image>
                <View style={{flexDirection:'row',marginTop:-700}}>
                    <Text style={style_login.text_input}>账号：</Text>
                    <TextInput placeholder="请输入账号" style={style_login.input_up} onChangeText={(text)=>{
                        this.setState({u:text})
                    }}></TextInput>
                </View>
                <View style={{flexDirection:'row',marginTop:50}}>
                    <Text style={style_login.text_input}>密码：</Text>
                    <TextInput placeholder="请输入密码" style={style_login.input_up} onChangeText={(text)=>{
                        this.setState({p:text})
                    }}></TextInput>
                </View>
                <View style={{flexDirection:'row',marginTop:50}}>
                    <Text style={style_login.text_input}>确认：</Text>
                    <TextInput placeholder="确认密码" style={style_login.input_up} onChangeText={(text)=>{
                        this.setState({cf:text})
                    }}></TextInput>
                </View>
                <View style={{flexDirection:'row',marginTop:50}}>
                    <Text style={style_login.text_input}>联系：</Text>
                    <TextInput placeholder="请输入联系方式" style={style_login.input_up} onChangeText={(text)=>{
                        this.setState({dh:text})
                    }}></TextInput>
                </View>
                <View style={{flexDirection:'row',marginTop:50}}>
                    <TextInput placeholder="请输入验证码" style={style_login.input_up1} onChangeText={(text)=>{
                        this.setState({yzm:text})
                    }}></TextInput>
                    <TouchableOpacity style={{backgroundColor:'white',height:45,width:130,marginTop:2,borderRadius:4}}>
                        <Text style={{fontSize:20,marginLeft:'12%',marginTop:5}}>获取验证码</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style_login.style_btn} onPress={()=>zhuce()}>
                    <Text style={{fontSize:25,marginLeft:'45%',marginTop:5,color:'white'}}>提交</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style_login.style_btn} onPress={()=>Actions.pop({refresh:({zhanghao:this.state.u,mima:this.state.p})})}>
                    <Text style={{fontSize:25,marginLeft:'40%',marginTop:5,color:'white'}}>返回登录</Text>
                </TouchableOpacity>
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
    input_up1:{
        backgroundColor:'white',
        width:'60%',
        marginLeft:25,
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:4,
        fontSize:20,
    },
    style_btn:{
        width:'90%',
        backgroundColor:'#712438',
        height:45,
        marginTop:50,
        marginLeft:'5%',
        borderRadius:20
    },
    box_login:{
        backgroundColor:'blue',
        flex:1,
    }
})

export default RegisterScene
