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
    <View>
    <Header herderText={'Counter'}/>
    <AlbumList/>
    </View>
)

AppRegistry.registerComponent('AlbumApp', () => App);
