/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Flashcard from './components/Flashcard';
import Data from 'illustratedTerms';
import styles from './css/index';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title2', year: '2016', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
];

export default class illustratedTerms extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Flashcard movies={MOCKED_MOVIES_DATA} styles={styles}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('illustratedTerms', () => illustratedTerms);
