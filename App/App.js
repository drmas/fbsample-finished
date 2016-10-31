/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import Home from './Screens/Home';
import Details from './Screens/Details';

export default class App extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Repos"/>
        <Scene key="details" component={Details} title="Details"/>
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('Quizzer', () => App);
