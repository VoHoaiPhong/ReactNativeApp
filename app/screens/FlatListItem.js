import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

export default class FlatListItem extends Component {
    render() {
        // var ar = (this.props.item.linkImage).split(',');
        var image = '';
        // if(ar.length == 1){
        //     image = JSON.parse(this.props.item.linkImage);
        // } else {
        //     image = JSON.parse(ar[0].substr(1));
        // }
        onPress = () => {
        this.props.navigation.navigate("AppNavigator");
    }
        return (
            <View style={styles.viewlist}>
                {/* <View style={styles.viewInfo}>
                    <Text style = {styles.listTextTitle}>{this.props.item.eventName }</Text>
                    <Text style = {styles.listText}>{ this.props.item.startTime + ' ' + this.props.item.startDate}</Text>
                    <Text style = {styles.listText}>{ this.props.item.location }</Text>
                </View> */}
                {/* <Text>{this.props.item.key}</Text> */}
                {/* <TouchableOpacity style={styles.info} onPress={() => {
                    alert('Thong tin nguoi dung')
                }}> */}
                    <Image source={{ uri: this.props.item.avatar }}
                        style={styles.listImage}>
                    </Image>
                    <View style={styles.text}>
                        <Text style={styles.title}>{this.props.item.nguoitao}</Text>
                    </View>
                {/* </TouchableOpacity> */}

                {/* <TouchableOpacity style={styles.button} onPress={() => {
                    // alert('Quet QR')
                    this.props.navigation.navigate('QRScanner');
                }}> */}
                    <View>
                        <Ionicons name="md-barcode" size={32} color="green" />
                    </View>
                {/* </TouchableOpacity> */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    viewlist: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        marginRight: 16,
        marginLeft: 21,
        height: 70
    },
    info: {
        flex: 0.8,
        flexDirection: 'row',
    },
    button: {
        flex: 0.2,
        borderColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10
    },
    text: {
        marginLeft:10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
    },
    listTextTitle: {

    },
    listImage: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: 20
    }
});