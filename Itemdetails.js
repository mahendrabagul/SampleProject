import React, {Component} from 'react';
import {Text, View, Image, SafeAreaView, StyleSheet} from 'react-native';
export class Itemdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewItemDetails: this.props.route.params.item,
    };
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    return (
      <SafeAreaView>
        <Image
          source={{uri: this.state.viewItemDetails.image}}
          style={styles.avatar}
        />
        <View style={styles.mainView}>
          <View style={styles.subView}>
            <Text style={styles.textTitle}>Title</Text>
            <Text style={styles.textTitles}>
              {this.state.viewItemDetails.title}
            </Text>
          </View>
          <View style={styles.subView}>
            <Text style={styles.textTitle}>Description</Text>
            <Text style={styles.textTitles}>
              {this.state.viewItemDetails.Description}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  mainView: {
    margin: 10,
  },
  subView: {
    borderBottomColor: '#e3e0da',
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  textTitle: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
  textTitles: {
    fontSize: 18,
  },
});
