import React, { Component } from 'react';
import {StyleSheet,View,Text,} from 'react-native';

import { Router, Scene,Actions} from 'react-native-router-flux';

import Yljs1 from './component/yljs1';
import Yljs2 from './component/yljs2';
import Yljs3 from './component/yljs3';


export class HomeScene extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene 
                    key='yljs1'
                    component={Yljs1} 
                    title="骑士王" 
                    titleStyle={{width:'93%',textAlign:'center',backgroundColor:'#5f0a20',fontSize:30,height:45,textAlign:'center',color:'white'}} 
                    initial={true}
                    />
                    <Scene 
                    key='yljs2' 
                    component={Yljs2} 
                    title="征服王" 
                    titleStyle={{flex:1,textAlign:'center'}} 
                    renderRightButton={<View></View>}
                    />
                    <Scene 
                    key='yljs3' 
                    component={Yljs3} 
                    title="英雄王" 
                    titleStyle={{flex:1,textAlign:'center'}} 
                    renderRightButton={<View></View>}
                    />
                    {/* <Scene 
                    key='Xq1'
                    component={Xq1} 
                    title="骑士王" 
                    titleStyle={{width:'93%',textAlign:'center',backgroundColor:'#5f0a20',fontSize:30,height:45,textAlign:'center',color:'white'}} 
                    initial={true}
                    />
                    <Scene 
                    key='Xq2'
                    component={Xq2} 
                    title="征服王" 
                    titleStyle={{width:'93%',textAlign:'center',backgroundColor:'#5f0a20',fontSize:30,height:45,textAlign:'center',color:'white'}} 
                    initial={true}
                    />
                    <Scene 
                    key='Xq3'
                    component={Xq3} 
                    title="英雄王" 
                    titleStyle={{width:'93%',textAlign:'center',backgroundColor:'#5f0a20',fontSize:30,height:45,textAlign:'center',color:'white'}} 
                    initial={true}
                    /> */}
                </Scene>
            </Router>
        )
    }
}

export default HomeScene
