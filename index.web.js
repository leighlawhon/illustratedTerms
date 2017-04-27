import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Flashcard from './components/Flashcard';
import styles from './css/index'
var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title2', year: '2016', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
];

class ReactNativeWeb extends Component {
  render() {
    return (
      <Flashcard movies={MOCKED_MOVIES_DATA}  styles={styles}/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });
