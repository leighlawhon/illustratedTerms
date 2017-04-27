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
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds.cloneWithRows(props.movies),
    };
  }

  render() {
    console.log(this.props.styles);
    const styles= this.props.styles;
    return (
      <ListView
        dataSource={this.state.ds}
        style={styles.listView}
        renderRow={
          (movie) =>
          <View style={styles.container}>
            <Text>{movie.title}</Text>
            <Text>{movie.year}</Text>
            <Image
              source={{uri: movie.posters.thumbnail}}
              style={styles.thumbnail}
            />
          </View>
        }
      />
    );
  }
}
