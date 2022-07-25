import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import User from "../screens/User";
import Home from "../screens/Home";
import Accommodation from "../screens/Accommodation";
import Scripts from "../screens/Scripts";
import RecoveryPassword from "../screens/RecoveryPassword";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Início"
                component={Home}
            />
            <Tab.Screen
                name="Roteiros"
                component={Scripts}
            />
            <Tab.Screen
                name="Hospedagem"
                component={Accommodation}
            />

        </Tab.Navigator>
    )
}


const Navigation = () => {
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
                    name="RecoveryPassword"
                    component={RecoveryPassword}
                />

                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                />

                <Stack.Screen
                    name="User"
                    component={User}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation