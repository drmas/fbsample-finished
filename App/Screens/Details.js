/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {getRepos} from '../Api/github';
import Item from '../Components/Item'

export default class Home extends Component {
  render() {
    return (
      <View
        style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.full_name}>{this.props.full_name} ({this.props.stargazers_count} Stars - {this.props.watchers_count} Watchs)</Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 60,
      padding: 10
  },
  name: {
    fontSize: 40
  },
  full_name: {
    fontSize: 14,
    marginLeft: 6
  },
  description: {
    fontSize: 16,
    marginTop: 12
  }
});
