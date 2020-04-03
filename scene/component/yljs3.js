import React, { Component } from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export class yljs3 extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../img/yxw.jpg')} style={{width:'100%',height:300}}></Image>
                <Text style={{fontSize:20,marginTop:20}}>拥有典藏了世上一切珍宝的宝库，甚至不但英灵宝具的原型也被收藏其中，连令人棘手的传说都理所当然般的拥有着。普通的英灵根本不是这个男人的对手 [4]  。如果认真战斗的话他就是“无敌的从者” [1]  ，战争将会在一夜间结束 [5]  。参加圣杯战争的理由是因为在他眼中圣杯也是属于自己的财宝之一，别人敢未经自己允许就窥视争夺是对自己莫大的不敬，因此必须要将其惩戒。</Text>
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

export default yljs3
