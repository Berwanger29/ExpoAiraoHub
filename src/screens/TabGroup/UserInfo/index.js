import { useEffect, useState } from 'react'
import BackButton from '../../../components/BackButton'
import {
    Container,
    ContainerBackButton,
    Header,
    Title,
    UserProfile
} from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'


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
            <ContainerBackButton>
                <BackButton />
            </ContainerBackButton>
            <Header>
                <Title>
                    Informações do usuário
                </Title>
            </Header>
            <UserProfile>
                Você tem um perfil {infoProfile}
            </UserProfile>
        </Container>
    )
}

export default UserInfo