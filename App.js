/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet,View,Text,} from 'react-native';

import { Router, Scene} from 'react-native-router-flux';

import LoginScene from './scene/loginScene';
import RegisterScene from './scene/registerScene';
import HomeScene from './scene/homeScene';
import { black } from 'color-name';

const App: () => React$Node = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene 
          key='Login'
          component={LoginScene} 
          title="欢迎来到迦勒底" 
          titleStyle={{width:'93%',textAlign:'center',backgroundColor:'#5f0a20',fontSize:30,height:45,textAlign:'center',color:'white'}} 
          initial={true}
        />
        <Scene 
          key='Home' 
          component={HomeScene} 
          title="主页" 
          titleStyle={{flex:1,textAlign:'center'}} 
          renderRightButton={<View></View>}
        />
        <Scene 
          key='Register' 
          component={RegisterScene} 
          title="注册页" 
          titleStyle={{flex:1,textAlign:'center'}} 
          renderRightButton={<View></View>}
        />
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
