/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import {Provider} from 'react-redux'
import Header from './components/Header'
import Albumlist from './components/Albumlist'


const App = () =>(
    <View>
    <Header herderText={'Counter!'}/>
    <Albumlist/>
    </View>
)

AppRegistry.registerComponent('AlbumApp', () => App);
