import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import QuizA from "../../screens/QuizA";
import QuizB from "../../screens/QuizB";
import QuizC from "../../screens/QuizC";

import UserStack from "../UserStack";

const Stack = createNativeStackNavigator()


const QuizStack = () => {
    return (
        <>
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

            <Stack.Screen
                name="UserStack"
                component={UserStack}
            />
        </>
    )
}

export default QuizStack