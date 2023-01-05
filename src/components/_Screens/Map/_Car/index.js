import { useContext } from "react";
import TitleMap from "../TitleMap";

import { TextRegular } from '../../../Texts';
import LinkButton from '../LinkButton';

import LanguageSelector from "../../../../utils/LanguageSelector";

const _Car = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);
    
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