import TitleMap from "../TitleMap";
import { TextRegular } from "../../../Texts";
import LinkButton from "../LinkButton";

const _Bus = () => {
    return (
        <>
            <TitleMap
                title='Ônibus'
            />

            <TextRegular
                text='Para chegar em Novo Airão por meio de ônibus, é necessário comprar um bilhete no terminal rodoviário de Manaus
                 localizado na avenida Djalma Batista. A viagem de ônibus passa por Manacapuru e tem uma duração média de três horas e meia
                 até chegar em Novo Airão.'
                format='justify'
            />
            <LinkButton
                label='Marcar destino'
                link={'https://goo.gl/maps/bqqSGqUdK8qpUVgG9'}
                type='gps'
            />
        </>
    )
}

export default _Bus