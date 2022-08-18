import * as Linking from 'expo-linking'

import {
    MapButton,
    MapLinkContainer
} from './styles'

import TextMap from "../TextMap";
import TitleMap from "../TitleMap";
import { Feather } from '@expo/vector-icons'


const mapLink = 'https://goo.gl/maps/q1HGYamtj4RF1Fy8A'


const _Car = () => {



    return (
        <>
            <TitleMap
                title={'Veículo pessoal'}
            />

            <TextMap
                text={'Para chegar em Novo Airão é necessário pegar  rodovia AM-070, que passa pela ponte Phelippe Daou e após passar pelo banho do Miriti, entrar na primeira saída para a AM-352 e seguir até o final. A viagem tem uma duração média de duas horas e meia.'}
            />

            <MapLinkContainer>
                <MapButton
                    onPress={() => {
                        Linking.openURL('https://goo.gl/maps/q1HGYamtj4RF1Fy8A')
                    }}
                >
                    <Feather name="map" size={24} color="black" />
                </MapButton>
            </MapLinkContainer>
        </>
    )
}

export default _Car