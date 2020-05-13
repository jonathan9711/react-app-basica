/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";

//Screens
import UserList from './src/screens/UserList'
import UserDetails from './src/screens/UserDetails'

const AppNavigator = createStackNavigator({
    UserList: {
        screen: UserList
    },
    UserDetails: {
        screen: UserDetails
    }
});

export default createAppContainer(AppNavigator);