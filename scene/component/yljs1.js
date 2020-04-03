import React, { Component } from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export class yljs1 extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../img/qsw.jpeg')} style={{width:'100%',height:300}}></Image>
                <Text style={{fontSize:20,marginTop:20}}>亚瑟・潘德拉贡[Arthur Pendragon]是以不列颠之王的身份即位，长久以来从袭向不列颠岛的撒克逊[Saxon]人手中坚守住国土的传说之王。 同时也是圆桌骑士（Knights of the Round Table）的领导者。亚瑟之名，以罗马文表示的话就是“阿尔托利乌斯[Artorius]”，女性形式是“阿尔托莉雅”。</Text>
                <TouchableOpacity style={styles.xqq} onPress={()=>Actions.Xq1()}>
                    <Text style={{fontSize:15,marginLeft:'35%',marginTop:10,color:'white'}}>查看大图</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.xq} onPress={()=>Actions.yljs1()}>
                        <Text style={{fontSize:20,marginLeft:'30%',marginTop:15,color:'white'}}>骑士王</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.xq} onPress={()=>Actions.yljs2()}>
                        <Text style={{fontSize:20,marginLeft:'30%',marginTop:15,color:'white'}}>征服王</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.xq} onPress={()=>Actions.yljs3()}>
                        <Text style={{fontSize:20,marginLeft:'30%',marginTop:15,color:'white'}}>英雄王</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    xq:{
        width:'33%',
        backgroundColor:'gray',
        height:55,
        marginTop:60,
        marginLeft:'0%',
        borderRadius:5
    },
    xqq:{
        width:'40%',
        backgroundColor:'#712438',
        height:45,
        marginTop:60,
        marginLeft:"30%",
        borderRadius:20
    },
})

export default yljs1
