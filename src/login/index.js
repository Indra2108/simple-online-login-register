import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

// IMPORT STYLE
import styles from "./styles";

// IMPORT PICTURE
import open from '../assets/eye.png';
import close from '../assets/hidden.png';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hide: true,
        }

        // AsyncStorage.getItem('REGISTER', (error, result) => {
        //     if (result) {
        //        let resultParsed = JSON.parse(result)
        //        this.setState({
        //             cekData: true,
        //             teksUsername: resultParsed.username
        //         });
        //     }
        // });
    }

    loginDataMengtodo = () => {
        let dataku = {
            email: this.state.email,
            password: this.state.password,
        }

        fetch('https://api-nodejs-todolist.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataku)
        })
        .then((response) => response.json())
        .then((mengrespon) => { console.log(mengrespon) })
        .catch(error => { console.log(error) }) 
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.inputbackground}>
                    <TextInput 
                        placeholder='Alamat Email anda' 
                        style={styles.textinput}
                        onChangeText={(email) => { this.setState({ email }) }} 
                    />
                </View>

                <View style={styles.inputbackground}>
                    <TextInput 
                        placeholder='Password baru' 
                        style={styles.inputbackground}
                        secureTextEntry={this.state.hide}
                        onChangeText={(password) => { this.setState({ password }) }} 
                    />
                </View>
                    
                <TouchableOpacity style={styles.tombol} onPress={() => this.loginDataMengtodo()}>
                    <Text style={styles.tulisantombol}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}