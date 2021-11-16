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
            password: '',
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
                <TextInput placeholder='Nama anda'/>
            </View>
        )
    }
}