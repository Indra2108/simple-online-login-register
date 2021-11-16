import React, { Component } from "react";
import {View, Text} from 'react-native';

// import screen
import Login from './src/login';
import Register from './src/register';

export default class App extends Component {
  render() {
    return(
      <>
        {/* <Login /> */}
        <Register />
      </>
    )
  }
}