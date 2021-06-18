import React, {Component} from 'react';
import {Item} from './Item';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    FlatList,
    StyleSheet,
    ActivityIndicator,
  } from 'react-native';
export class ItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://api.giphy.com/v1/gifs/categories?api_key=YbL2aVsPsu8heuIrfpm9w14hdchdZNAG',
    )
      .then(response => response.json())
      .then(data => this.setState({data: data.data}));
  }

  render() {
    return <Item data={this.state.data} />;
    // return <Text>{JSON.stringify(this.state.data)}</Text>;
  }
}
