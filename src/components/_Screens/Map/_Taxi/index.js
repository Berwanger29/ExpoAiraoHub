import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";

const _Taxi = () => {
    return (
        <>
            <TitleMap
                title='Lotação'
            />

            <TextRegular
                text='É possível chegar em Novo Airão por meio de taxistas que realizam este trajeto. Para reservar uma
                vaga num carro, basta ligar para o número (92)99428-0595. Também é possível ir ao ponto dos taxistas
                perto da ponte no endereço Av.Coronel Cirílo Neves, nº 61 e esperar a partida do próximo táxi.'
                format='justify'
            />
        </>
    )
}

export default _Taxi