import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import theme from "../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

import {
    Entypo,
    MaterialCommunityIcons,
    FontAwesome,
    Ionicons,
    FontAwesome5
} from '@expo/vector-icons';

import Login from "../screens/LoginGroup/Login"
import SignUp from "../screens/LoginGroup/SignUp";
import RecoveryPassword from "../screens/LoginGroup/RecoveryPassword";

import QuizA from "../screens/QuizGroup/QuizA";
import QuizB from "../screens/QuizGroup/QuizB";
import QuizC from "../screens/QuizGroup/QuizC";

import Home from "../screens/TabGroup/Home";
import Accommodation from "../screens/TabGroup/Accommodation";
import Scripts from "../screens/TabGroup/Scripts";
import Activities from "../screens/TabGroup/Activities";
import Map from "../screens/TabGroup/Map";
import ItemSelected from "../screens/TabGroup/ItemSelected";
import User from "../screens/TabGroup/User";



const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: theme.colors.darkGreen },

                tabBarActiveTintColor: theme.colors.semiLight
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Entypo
                                name="home"
                                size={20}
                                color={focused ? theme.colors.light : theme.colors.semiLight}
                            />)
                    }
                }}
            />
            <Tab.Screen
                name="Scripts"
                component={Scripts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <MaterialCommunityIcons
                                name="sign-direction"
                                size={22}
                                color={focused ? theme.colors.light : theme.colors.semiLight}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Accommodation"
                component={Accommodation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome
                                name="hotel"
                                size={20}
                                color={focused ? theme.colors.light : theme.colors.semiLight}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Activities"
                component={Activities}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons
                                name="compass"
                                size={20}
                                color={focused ? theme.colors.light : theme.colors.semiLight}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome5
                                name="map-marked-alt"
                                size={20}
                                color={focused ? theme.colors.light : theme.colors.semiLight}
                            />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

function QuizStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="QuizA"
        >
            <Stack.Screen
                name="QuizA"
                component={QuizA}
            />
            <Stack.Screen
                name="QuizB"
                component={QuizB}
            />
            <Stack.Screen
                name="QuizC"
                component={QuizC}
            />

        </Stack.Navigator>
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
                    name="QuizStack"
                    component={QuizStack}
                />


                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                />

                <Stack.Screen
                    name="ItemSelected"
                    component={ItemSelected}
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