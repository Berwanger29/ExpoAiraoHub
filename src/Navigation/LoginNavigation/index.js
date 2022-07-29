import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import RecoveryPassword from "../../screens/RecoveryPassword";

import QuizStack from '../QuizStack';



const LoginNavigation = () => {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
            <Stack.Screen
                name="RecoveryPassword"
                component={RecoveryPassword}
            />
            <Stack.Screen
                name='QuizStack'
                component={QuizStack}
            />
        </>
    )
}

export default LoginNavigation