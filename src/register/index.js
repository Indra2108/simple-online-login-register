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
            nama: '',
            email: '',
            password: '',
            password_confirmation: '',
            teksUsername: '',
            hide: true,
            cekData: null
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

    render() {
        return(
            <View style={styles.container}>
                <View>
                    <TextInput 
                        placeholder='Nama lengkap anda' 
                        style={styles.inputbackground} 
                        onChangeText={(nama) => { this.setState({ nama })}}
                    />

                    <TextInput 
                        placeholder='Alamat Email anda' 
                        style={styles.inputbackground}
                        onChangeText={(email) => { this.setState({ email })}} 
                    />

                    <TextInput 
                        placeholder='Password baru' 
                        style={styles.inputbackground}
                        onChangeText={(password) => { this.setState({ password })}} 
                    />

                    <TextInput 
                        placeholder='Ulangi Passwordmu' 
                        style={styles.inputbackground}
                        onChangeText={(password_confirmation) => { this.setState({ password_confirmation })}} 
                    />


                </View>
            </View>
        )
    }
}