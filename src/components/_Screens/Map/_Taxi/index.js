import { useState, useEffect } from "react";
import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";
import LinkButton from "../LinkButton";

import * as pt from '../../../../utils/pt'
import * as en from '../../../../utils/en'


const _Taxi = () => {

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
                title={language.map.meio.taxi.title}
            />

            <TextRegular
                text={language.map.meio.taxi.text}
                format='justify'
            />

            <LinkButton
                label={language.map.ligar}
                link='tel://+5592994280595'
                type='phone'
            />

            <LinkButton
                label={language.map.mapa}
                link={'https://goo.gl/maps/ynfMUrttkmQcF9vMA'}
                type='navigation-2'
            />
        </>
    )
}

export default _Taxi