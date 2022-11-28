import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";
import LinkButton from "../LinkButton";

const _Taxi = () => {
    return (
        <>
            <TitleMap
                title='Lotação'
            />

            <TextRegular
                text='É possível chegar em Novo Airão por meio de taxistas que realizam este trajeto. Para reservar uma
                vaga num carro, basta ligar clicando no bot"ao abaixo. Também é possível ir ao ponto dos taxistas
                perto da ponte marcando o destino clicando no botão "marcar destino".'
                format='justify'
            />

            <LinkButton
                label='Ligar'
                link='tel://+5592994280595'
                type='phone'
            />

            <LinkButton
                label='Marcar destino'
                link={'https://goo.gl/maps/ynfMUrttkmQcF9vMA'}
                type='navigation-2'
            />
        </>
    )
}

export default _Taxi