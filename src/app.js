/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Provider} from 'react-redux'
import Header from './components/Header'


const App = () =>(
 
    <Header herderText={'Counter!'}/>
)

AppRegistry.registerComponent('AlbumApp', () => App);
