import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Keyboard, Dimensions, TextInput, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';



const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
export default class LoginSreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onPress = () => {
        this.props.navigation.navigate("AppNavigator");
    }

    render() {
        return (
            <DismissKeyboard>
                <KeyboardAvoidingView style={styles.login} behavior="padding">
                    <LinearGradient
                        colors={['#009494', '#02b876']}
                        // colors={['#ffffff', '#e4f7f0', '#a7f2d7', '#3afcb6', '#00ffa3']}
                        start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                        style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center' }}
                    >

                        <View style={styles.container}>

                            <View>
                                <Text style={styles.titleLogin}>Đăng nhập</Text>
                            </View>

                            <View style={styles.viewInput}>
                                <View style={styles.viewIcon}>
                                    <Ionicons name="md-person" size={32} color="white" />

                                </View>
                                <TextInput
                                    value={this.state.username}
                                    onChangeText={(username) => this.setState({ username })}
                                    placeholder={'Username'}
                                    placeholderTextColor="#fff"
                                    style={styles.input}
                                />
                            </View>

                            <View style={styles.viewInput}>
                                <View style={styles.viewIcon}>
                                    <Ionicons name="md-key" size={32} color="white" />

                                </View>
                                <TextInput
                                    value={this.state.password}
                                    onChangeText={(password) => this.setState({ password })}
                                    placeholder={'Password'}
                                    placeholderTextColor="#fff"
                                    secureTextEntry={true}
                                    style={styles.input}
                                />
                            </View>

                            <TouchableOpacity
                                onPress={this.onPress}
                            >
                                <View style={styles.button}>
                                    <Text style={styles.textbutton}> Đăng nhập </Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </KeyboardAvoidingView>
            </DismissKeyboard>
        );
    }
}

LoginSreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    titleLogin: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',
        // textShadowColor: 'black',
        // // textShadowOffset: { width: -1, height: 1 },
        // textShadowRadius: 5
    },
    login: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    button: {
        color: '#333333',
        borderRadius: 10,
        backgroundColor: 'white',
        height: 50,
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    textbutton: {
        textAlign: 'center',
        color: 'green',
        fontFamily: 'Cochin',
        fontSize: 22,
        fontWeight: 'bold',
    },
    viewInput: {
        width: width * 0.8,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        fontFamily: 'Cochin',
        fontSize: 20,
        flex: 1,
        borderRadius: 0,
        borderWidth: 0,
        color: 'white'
    }, viewIcon: {
        marginHorizontal: 10
    }
});