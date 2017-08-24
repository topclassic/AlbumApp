/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux'
import Header from './components/Header'
import AlbumList from './components/AlbumList'

import {
  AppRegistry,
  View
} from 'react-native';

const App = () =>(
    <View style={{flex:1}}>
    <Header herderText={'Albums'}/>
    <AlbumList/>
    </View>
)

AppRegistry.registerComponent('AlbumApp', () => App);
