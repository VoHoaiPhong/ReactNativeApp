import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Dimensions, FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import data from '../data/EventData';
import FlatListItem from './FlatListItem';

const { width, height } = Dimensions.get('window');

const eventData1 = [
  {
    'key': 'ev1',
    'nguoitao': 'Tran Ba Long',
    'tensk': 'San Khau',
    'sdate': '10:10 12-08-2018',
    'edate': '20:00 15-08-2018',
    'sl': '30',
    'diachi': 'Ninh Kieu-Can Tho',
    'theloai': 'am nhac',
    'tinhtrang': '1',
    'linkanh': 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
    'avatar': 'https://wallpaper-house.com/data/out/8/wallpaper2you_244361.jpg'
  }]

const eventData2 = [
  {
    'key': 'ev1',
    'nguoitao': 'Phong',
    'tensk': 'San Khau',
    'sdate': '10:10 12-08-2018',
    'edate': '20:00 15-08-2018',
    'sl': '30',
    'diachi': 'Ninh Kieu-Can Tho',
    'theloai': 'am nhac',
    'tinhtrang': '1',
    'linkanh': 'https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg',
    'avatar': 'https://wallpaper-house.com/data/out/8/wallpaper2you_244361.jpg'
  }]
export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myCondition1: 'auto',
      myCondition2: 'auto',
      myCondition3: 'none',
      listData: data,
      openQR: true

    };
  }
  render() {
    onPress1 = () => {
      this.setState({
        ...this.state,
        myCondition1: 'none',
        myCondition2: 'auto',
        myCondition3: 'auto',
        openQR: false
      });
    }
    onPress2 = () => {
      this.setState({
        ...this.state,
        myCondition1: 'auto',
        myCondition2: 'none',
        myCondition3: 'auto',
        openQR: true
      });
    }
    onPress3 = () => {
      this.setState({
        ...this.state,
        myCondition1: 'auto',
        myCondition2: 'auto',
        myCondition3: 'none',
        openQR: true
      });
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.viewImage}>
            <Image source={require('../assets/images/accountAvata.png')}
              style={styles.image}>
            </Image>
          </View>
          <Text style={styles.groupText}>Nhom A</Text>
          <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
            <TouchableOpacity
            // onPress={this.onPress}
            >
              <View>
                <Image source={require('../assets/images/logout.png')}
                  style={styles.imageLogout}>
                </Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewButton}>
          <View style={styles.button}>

            <View style={styles.buttonApprove} pointerEvents={this.state.myCondition1}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ...this.state,
                    myCondition1: 'none',
                    myCondition2: 'auto',
                    myCondition3: 'auto',
                    listData: eventData1,
                    openQR: false

                  });
                }}
              >
                <View style={styles.button}>
                  <Ionicons name="md-done-all" size={32} color={this.state.myCondition1 == 'none' ? 'gray' : 'black'} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonReject} pointerEvents={this.state.myCondition2}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ...this.state,
                    myCondition1: 'auto',
                    myCondition2: 'none',
                    myCondition3: 'auto',
                    listData: eventData2,
                    openQR: true

                  });
                }}
              >
                <View style={styles.button}>
                  <Ionicons name="md-funnel" size={32} color={this.state.myCondition2 == 'none' ? 'gray' : 'black'} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonAll} pointerEvents={this.state.myCondition3}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ...this.state,
                    myCondition1: 'auto',
                    myCondition2: 'auto',
                    myCondition3: 'none',
                    listData: data,
                    openQR: true

                  });
                }}
              >
                <View style={styles.button}>
                  <Ionicons name="md-grid" size={32} color={this.state.myCondition3 == 'none' ? 'gray' : 'black'} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              // onRefresh={() => this.onRefresh()}
              // refreshing={this.state.isFetching}
              data={this.state.listData}
              renderItem={({ item, index }) =>
                <TouchableOpacity onPress={() => {
                  if (this.state.openQR) {
                    this.props.navigation.navigate("QRScanner");
                  }
                }}>

                  <FlatListItem item={item} index={index} />
                </TouchableOpacity>
              }
              keyExtractor={item => item.key}
            ></FlatList>
          </View>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'column'
  },
  header: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginHorizontal: 20

  },
  viewButton: {
    flex: 0.1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    margin: 12,
    justifyContent: 'center',
    marginHorizontal: 20
  },
  button: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    height: 55
  },
  buttonApprove: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
    borderWidth: 1,
    borderColor: 'black',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonReject: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
    borderWidth: 1,
    borderColor: 'black'
  },
  buttonAll: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
    borderWidth: 1,
    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textbutton: {
    // fontFamily: 'Cochin',
    textAlign: 'center',
    color: 'white',
  },
  content: {
    flex: 0.75,
    flexDirection: 'column'
  },
  viewImage: {
    marginVertical: 10,
    flex: 0.5,
  },
  image: {
    // flex: 1,
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 25
  },
  imageLogout: {
    width: width * 0.12,
    height: width * 0.12
  },
  groupText: {
    // fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginLeft: 25
  },

});
