import { useContext } from "react";

import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";
import LinkButton from "../LinkButton";

import LanguageSelector from "../../../../utils/LanguageSelector";

const _Bus = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);

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