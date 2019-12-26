import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity, Animated, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


export default class Welcome extends Component {
    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    padding: 16,
                    backgroundColor: 'white',
                    flex: 1,
                    width: width
                }}>
                <Text>{item.key}</Text>
            </View>
        );
    };
    
    onPress = () => {
        this.props.navigation.navigate("LoginSreen");
    }

    render() {
        const { illustrations } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textheader}>Quản Lý Toà Nhà MF9</Text>
                </View>
                <View style={styles.content}>
                    <FlatList
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        data={illustrations}
                        extraDate={this.state}
                        keyExtractor={(item, index) => `${item.id}`}
                        renderItem={({ item }) => (
                            <Image
                                source={item.source}
                                resizeMode="contain"
                                style={{ width, height: height / 2, overflow: 'visible' }}
                            />
                        )}
                        onScroll={
                            Animated.event([{
                                nativeEvent: { contentOffset: { x: this.scrollX } }
                            }])
                        }
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={this.onPress}
                    >
                        <View style={styles.button}>
                            <Text style={styles.textbutton}> Bắt đầu </Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Welcome.defaultProps = {
    illustrations: [
        { id: 1, source: require('../assets/images/illustration_1.png') },
        { id: 2, source: require('../assets/images/illustration_2.png') },
        { id: 3, source: require('../assets/images/illustration_3.png') },
    ],
};

Welcome.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    header: {
        flex: 0.2,
        width: width,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textheader: {
        // fontFamily: 'Cochin',
        fontSize: 22,
        fontWeight: 'bold',
    },
    content: {
        flex: 0.5,
        width: width,
        fontSize: 20,
        textAlign: 'center',
    },
    footer: {
        flex: 0.3,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        color: '#333333',
        borderRadius: 20,
        backgroundColor: 'green',
        height: 50,
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbutton: {
        // fontFamily: 'Cochin',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});