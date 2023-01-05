import { useContext } from "react";

import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";
import LinkButton from "../LinkButton";

import LanguageSelector from "../../../../utils/LanguageSelector";

const _Taxi = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);

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