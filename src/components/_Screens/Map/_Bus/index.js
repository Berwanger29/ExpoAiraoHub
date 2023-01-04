import { useState, useEffect } from "react";
import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";
import LinkButton from "../LinkButton";

import * as pt from '../../../../utils/pt'
import * as en from '../../../../utils/en'


const _Bus = () => {
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
                title={language.map.meio.onibus.title}
            />

            <TextRegular
                text={language.map.meio.onibus.text}
                format='justify'
            />
            <LinkButton
                label={language.map.mapa}
                link={'https://goo.gl/maps/bqqSGqUdK8qpUVgG9'}
                type='navigation-2'
            />
        </>
    )
}

export default _Bus