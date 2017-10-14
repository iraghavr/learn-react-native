/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor() {
    super()
    this.state = {
      backgroundColor: 'white'
    }

    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    this.setState({ backgroundColor: this.state.backgroundColor === 'white' ? 'green' : 'white' })
  }
  render() {
    console.log('hello')
    return (
      <View style={[styles.container,
        { backgroundColor: this.state.backgroundColor }
      ]}>
        <StatusBar hidden={true} />
        <Text style={styles.welcome}>
          Welcomes to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get starteds, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text onPress={this.changeColor}>
          click me to change backgroundColor
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
