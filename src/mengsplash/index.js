import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Mengsplash extends Component {
    constructor() {
        super();

        this.state = {
            muncul: true
        }

        setTimeout(() => {
            this.setState({
                muncul: false,
            });
        }, 5000);
    }


    // render() {
    //     return (

    //     )
    // }
}