import React, { Component } from 'react';
import { View, Text } from 'react-native';

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

// import screen
import Dashboard from '../dashboard';
import Home from '../home'

export default class Mengsplash extends Component {
    constructor() {
        super();
        this.state = {
            cekToken: false
        }

        AsyncStorage.getItem('token', (error, result) => {
            let mydata = result
            if (mydata === null) {
                console.log('Token Kosong!')
                this.setState({ cekToken: false })
            } else {
                this.setState({ cekToken: true })
            }
        });

    }


    render() {
        if (this.state.cekToken === true) {
            return <Dashboard />
        } else {
            return <Home />
        }
    }
}