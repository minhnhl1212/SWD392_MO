import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';
import { LoginPage } from '../screens';

const oauthredirect = () => {

    // navigation.navigate('Login');
    return (
        <Redirect href={'/'} />
    )
}

export default oauthredirect