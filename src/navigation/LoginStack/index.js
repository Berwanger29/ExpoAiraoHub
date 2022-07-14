import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import Home from "../../screens/Home";
import User from "../../screens/User";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="User"
                    component={User}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginStack