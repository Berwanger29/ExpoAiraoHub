import { useContext } from "react";
import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";
import LinkButton from "../LinkButton";

import LanguageSelector from "../../../../utils/LanguageSelector";

const _Boat = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);

    return (
        <>
            <TitleMap
                title={language.map.meio.barco.title}
            />
            <TextRegular
                text={language.map.meio.barco.text}
                format='justify'
            />
            <LinkButton
                label={language.map.mapa}
                link='https://goo.gl/maps/opctdNKb8z1PuYHn8'
                type='navigation-2'
            />
        </>
    )
}

export default _Boat