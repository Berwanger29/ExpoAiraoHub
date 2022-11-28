import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";
import LinkButton from "../LinkButton";

const _Boat = () => {
    return (
        <>
            <TitleMap
                title='Barco'
            />
            <TextRegular
                text='Para chegar em Novo Airão de barco, é necessário ir até o porto na rua Sagrado Coração de Jesus no bairro São Raimundo.
                A viagem começa à noite e a chegada em Novo Airão é no dia seguinte pela manhã. '
                format='justify'
            />
            <LinkButton
                label='Marcar destino'
                link='https://goo.gl/maps/opctdNKb8z1PuYHn8'
                type='navigation-2'
            />
        </>
    )
}

export default _Boat