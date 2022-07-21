import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import User from "../../screens/User";
import Home from "../../screens/Home";
import Accommodation from "../../screens/Accommodation";
import Scripts from "../../screens/Scripts";
import RecoveryPassword from "../../screens/RecoveryPassword";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login"
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
                    name="User"
                    component={User}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Accommodation"
                    component={Accommodation}
                />
                <Stack.Screen
                    name="Scripts"
                    component={Scripts}
                />
                <Stack.Screen
                    name="RecoveryPassword"
                    component={RecoveryPassword}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginStack