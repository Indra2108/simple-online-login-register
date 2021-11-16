import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

// IMPORT STYLE
import styles from "./style";

// IMPORT PICTURE
import open from '../assets/eye.png';
import close from '../assets/hidden.png';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
                {this.state.cekData ? <Text>{`Hallo! anda sudah mempunyai akun dengan nama ${this.state.teksUsername}, silahkan Log in`}</Text> : null}
                <View style={styles.inputbackground}>
                    <TextInput 
                        placeholder='Username'
                        style={styles.textinput}
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>

                <View style={styles.inputbackground}>
                    <TextInput 
                        placeholder='Password'
                        style={styles.textinput}
                        secureTextEntry={this.state.hide}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity onPress={() => this.state.hide ? this.setState({ hide: false }) : this.setState({ hide: true })}> 
                        <Image source={this.state.hide ? open : close} style={styles.eye}/>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity onPress={this.readStorage} style={styles.tombol}>
                    <Text style={styles.tulisantombol}>BACA</Text>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={this.saveStorage} style={styles.tombol}>
                    <Text style={styles.tulisantombol}>REGISTER</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.removeStorage} style={styles.tombol}>
                    <Text style={styles.tulisantombol}>BATAL</Text>
                </TouchableOpacity>
                
                {/* <TouchableOpacity onPress={() => alert(`${this.state.cekData}`)} style={styles.tombol}>
                    <Text style={styles.tulisantombol}>CEK</Text>
                </TouchableOpacity> */}

                <View style={styles.tekslogin}>
                    <Text>Sudah punya akun? </Text>
                    <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.login}>LOGIN</Text>
                </View>
            </View>
        )
    }
}