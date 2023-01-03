import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as pt from './pt'
import * as en from './en'

const portuguese = pt.labels
const english = en.labels

export const selectLanguage = async (value) => {

    // let language = null

    const [language, setLanguage] = useState()

    if (value === 'pt') {
        setLanguage(portuguese)
    } else if (value === 'en') {
        setLanguage(english)
    }

    // try {
    //     await AsyncStorage.setItem('@airaoHub_language', value)
    // } catch (e) {
    //     alert('An error ocurred')
    // }

    return language
}
