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
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            age: '',
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

    registerDataMengtodo = () => {
        let dataku = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age
        }

        fetch('https://api-nodejs-todolist.herokuapp.com/user/register', {
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
                        placeholder='Nama lengkap anda' 
                        style={styles.textinput} 
                        onChangeText={(name) => { this.setState({ name }) }}
                    />
                </View>

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

                <View style={styles.inputbackground}>
                    <TextInput 
                        placeholder='Ulangi Passwordmu' 
                        style={styles.inputbackground}
                        secureTextEntry={this.state.hide}
                        onChangeText={(password_confirmation) => { this.setState({ password_confirmation }) }} 
                    />
                </View>

                <View style={styles.inputbackground}>
                    <TextInput 
                        placeholder='Umur' 
                        style={styles.inputbackground}
                        onChangeText={(age) => { this.setState({ age }) }} 
                    />
                </View>
                
                    {/* <TouchableOpacity style={styles.tombol} onPress={() => this.submitData()}> */}
                    {/* <TouchableOpacity style={styles.tombol} onPress={() => this.submitDataReqres()}> */}
                    <TouchableOpacity style={styles.tombol} onPress={() => this.registerDataMengtodo()}>
                    {/* <TouchableOpacity style={styles.tombol} onPress={() => alert('Nama: '+this.state.name +' Email: '+ this.state.email +' Password: '+ this.state.password +' Password Lagi '+ this.state.password_confirmation)}> */}
                        <Text style={styles.tulisantombol}>REGISTER</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.tombol} onPress={() => this.loginDataMengtodo()}>
                        <Text style={styles.tulisantombol}>LOGIN</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}