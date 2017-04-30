import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Flashcard extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'p questions');
    this.state = {
      questions: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
  componentDidMount(){
    console.log(this.state, 'component mounted');
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({
      questions: ds.cloneWithRows(this.props.questions)
    })
  }
  render() {
    console.log(this.state, "FC render");
    const styles= this.props.styles;
    return (
      <ListView
        dataSource={this.state.questions}
        style={styles.listView}
        renderRow={
          (q) =>
          <View style={styles.container}>
            <Text>{q.term}</Text>          
          </View>
        }
      />
    );
  }
}
