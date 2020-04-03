import React, { Component } from 'react';
import {StyleSheet,View,Text,} from 'react-native';

import { Router, Scene,Actions} from 'react-native-router-flux';
import Xq1 from '/xq1';
import Xq2 from './xq2';
import Xq3 from './xq3';

export class comhome extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene 
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
                    titleStyle={{flex:1,textAlign:'center'}} 
                    renderRightButton={<View></View>}
                    />
                    <Scene 
                    key='Xq3' 
                    component={Xq3} 
                    title="英雄王" 
                    titleStyle={{flex:1,textAlign:'center'}} 
                    renderRightButton={<View></View>}
                    />
                </Scene>
            </Router>
        )
    }
}

export default comhome
