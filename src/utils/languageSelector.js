import { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as pt from './pt'
import * as en from './en'

const LanguageSelector = createContext();

export function LanguageProvider({ children }) {

    const portuguese = pt.labels
    const english = en.labels
    const [selectedLanguage, setSelectedLanguage] = useState("pt")
    const [language, setLanguage] = useState(portuguese)
    const [flag, setFlag] = useState(require('../../assets/icons/pt.png'))

    function handleLanguage() {
        if (selectedLanguage === 'pt') {
            //muda pra ingles
            setLanguage(english);
            setSelectedLanguage("en");
            setFlag(require('../../assets/icons/en.png'))
        } else if (selectedLanguage === 'en') {
            //muda pra portugues
            setLanguage(portuguese);
            setSelectedLanguage("pt");
            setFlag(require('../../assets/icons/pt.png'))
        } else if ((selectedLanguage !== 'pt') || (selectedLanguage !== 'en')) {
            setLanguage(portuguese);
            setSelectedLanguage("pt");
            setFlag(require('../../assets/icons/pt.png'))
        }
        storeData();
    }

    function initLanguage(lingua){
        if (lingua === 'en') {
            //recebe ao contrario de pt
            setLanguage(portuguese);
            setSelectedLanguage("pt");
            setFlag(require('../../assets/icons/pt.png'))
        }
        if (lingua === 'pt') {
            setLanguage(english);
            setSelectedLanguage("en");
            setFlag(require('../../assets/icons/en.png'))
        }
    }

    async function storeData() {
        try {
            const value = selectedLanguage;
            await AsyncStorage.setItem('@airaoHub_Language', value);
        } catch (e) {
        }
    }

    async function getData() {
        try {
            const value = await AsyncStorage.getItem('@airaoHub_Language')
            if(value !== null) {
                initLanguage(value);
              }
            
        } catch (e) {
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <LanguageSelector.Provider value={{ language, handleLanguage, portuguese, english, flag }}>
            {children}
        </LanguageSelector.Provider>
    );
}

export default LanguageSelector;










// const portuguese = pt.labels
// const english = en.labels

// export const selectLanguage = async (value) => {

//     // let language = null

//     const [language, setLanguage] = useState()

//     if (value === 'pt') {
//         setLanguage(portuguese)
//     } else if (value === 'en') {
//         setLanguage(english)
//     }

//     // try {
//     //     await AsyncStorage.setItem('@airaoHub_language', value)
//     // } catch (e) {
//     //     alert('An error ocurred')
//     // }

//     return language
// }
