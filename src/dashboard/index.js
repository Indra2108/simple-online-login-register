import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import styles
import styles from './styles'

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Ini Dashboard</Text>
            </View>
        )
    }
}