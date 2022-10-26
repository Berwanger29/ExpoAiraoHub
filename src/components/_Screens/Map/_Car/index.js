import * as Linking from 'expo-linking'

import {
    MapLinkContainer,
    TextContent
} from './styles'

import TitleMap from "../TitleMap";
import { Feather } from '@expo/vector-icons';
import theme from '../../../../global/styles/theme';
import { TextRegular } from '../../../Texts';
import LinkButton from '../LinkButton';


const _Car = () => {

    return (
        <>
            <TitleMap
                title={'Veículo pessoal'}
            />

            <TextRegular
                text='Para chegar em Novo Airão é necessário pegar rodovia AM-070, que passa pela ponte do Rio Negro e após passar pelo banho do Miriti, entrar na primeira saída para a AM-352 e seguir até o final. A viagem tem uma duração média de duas horas e meia.'
            />

            <LinkButton
                label='Marcar destino'
                link={'https://goo.gl/maps/zUddL19ymU1gCYgf9'}
                type='gps'
            />
        </>
    )
}

export default _Car