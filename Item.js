/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  viewItemDetails = item => {
    console.log(item);
  };

  // markAsFavourite = item => {
  //   let favourites = localStorage.getItem('favourites');
        // if (favourites.length <=5) {
        //   favourites.push(item)
        // }
        // alert
  //   localStorage.setItem();
  // };

  getData = () => {};

  render() {
    const renderFooter = () => {
      return (
        <View style={styles.footers}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={this.getData()}
            style={styles.loadMoreBtn}>
            <Text style={styles.btnText}>Load More</Text>
            {this.state.loading ? (
              <ActivityIndicator color="white" style={{marginLeft: 8}} />
            ) : null}
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <FlatList
            style={styles.root}
            data={this.state.data}
            extraData={this.state}
            ListFooterComponent={renderFooter}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={items => {
              const item = items.item;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.viewItemDetails(item);
                    }}>
                    <View style={styles.container}>
                      <Image
                        source={{uri: item.gif.images.original.url}}
                        style={styles.avatar}
                      />
                      <View style={styles.content}>
                        <View style={styles.mainContent}>
                          <View style={styles.text}>
                            <Text style={styles.groupName}>{item.name}</Text>
                          </View>

                          <Text style={styles.countMembers}>
                            {item.name_encoded}
                          </Text>
                        </View>
                        <View style={styles.cardHeaderss}>
                          <Icon
                            name="heart"
                            color={'#000'}
                            onPress={() => this.onSubmit()}
                            size={30}
                            style={[this.state.toggle && styles.iconAlt]}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  footers: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  text: {
    marginLeft: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  footer: {
    backgroundColor: '#e6e9ed',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  searchbox: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    backgroundColor: '#4680FF',
    width: '48%',
    height: 45,

    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    color: '#1C2B55',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  cardHeaderss: {
    alignSelf: 'flex-end',
    zIndex: 10,
    position: 'absolute',
    padding: 15,
  },
  iconAlt: {
    color: 'red',
  },
  root: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 60,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  countMembers: {
    fontSize: 15,
    color: 'gray',
  },
  groupName: {
    fontSize: 18,
    color: '#000',
  },
});
