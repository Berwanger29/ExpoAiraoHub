import { useState, useEffect } from "react";
import TitleMap from "../TitleMap";

import { TextRegular } from '../../../Texts';
import LinkButton from '../LinkButton';

import * as pt from '../../../../utils/pt'
import * as en from '../../../../utils/en'

const _Car = () => {

    const portuguese = pt.labels
    const english = en.labels
    const [selectedLanguage, setSelectedLanguage] = useState('pt')
    const [language, setLanguage] = useState(portuguese)

    function handleLanguage() {
        if (selectedLanguage === 'pt') {
            setLanguage(portuguese)
        } else if (selectedLanguage === 'en') {
            setLanguage(english)
        }
    }
    useEffect(() => {
        handleLanguage()
    }, [])

    return (
        <>
            <TitleMap
                title={language.map.meio.pessoal.title}
            />

            <TextRegular
                text={language.map.meio.pessoal.text}
            />

            <LinkButton
                label={language.map.mapa}
                link={'https://goo.gl/maps/zUddL19ymU1gCYgf9'}
                type='navigation-2'
            />
        </>
    )
}

export default _Car