import React, { Component } from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export class yljs2 extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../img/zfw.jpeg')} style={{width:'100%',height:300}}></Image>
                <Text style={{fontSize:20,marginTop:20}}>生于马其顿王国首都派拉城，曾师从古希腊著名学者亚里士多德，十八岁随父出征，二十岁继承王位。是欧洲历史上最伟大的军事天才，马其顿帝国最富盛名的征服者。他雄才伟略，勇猛善战，领军驰聘欧亚非大陆，使得古希腊文明广泛传播，被誉为“征服王”，同时是古代史上最著名的军事家和政治家。</Text>
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

export default yljs2

