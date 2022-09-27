import { useEffect, useState } from 'react'
import BackButton from '../../../components/BackButton'
import {
    Container,
    ContainerBackButton,
    Header,
    Main,
} from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextRegular, TextSubTitle } from '../../../components/Texts'


const UserInfo = () => {

    const [infoProfile, setInfoProfile] = useState('')


    async function getData() {
        try {
            const jsonValue = await AsyncStorage.getItem('@airaoHub_infoProfile')
            if (jsonValue !== null) {
                let asyncData = JSON.parse(jsonValue)
                // 90 - 75: Aventureiro
                // 75 - 45: Moderado
                // 45 - 30: Normal
                if (asyncData >= 75) {
                    setInfoProfile('aventureiro')
                } else if ((asyncData < 75) && (asyncData >= 45)) {
                    setInfoProfile('moderado')
                } else {
                    setInfoProfile('normal')
                }

            } else {
                return null
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <Container>
            <Header>
                <ContainerBackButton>
                    <BackButton />
                </ContainerBackButton>
                <TextSubTitle
                    text='Informações do usuário'
                />
            </Header>
            <Main>
                <TextRegular
                    text={`Você tem um perfil: ${infoProfile}`}
                />
            </Main>
        </Container>
    )
}

export default UserInfo