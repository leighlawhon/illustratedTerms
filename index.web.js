import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView
} from 'react-native';
import Flashcard from './components/Flashcard';
import Utils from './components/utils'

import styles from './css/index';
var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title2', year: '2016', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
];

class ReactNativeWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
  componentDidMount() {
    this.getQuestions();
  }
  getQuestions() {
    return fetch('illustratedTerms.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          questions: responseJson.javascript,
          loaded: true
        })
        console.log(this.state);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <Flashcard questions={this.state.questions}  styles={styles}/>
    );
  }

}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });
