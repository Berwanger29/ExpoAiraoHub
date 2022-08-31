import { useEffect, useState } from 'react'
import BackButton from '../../../components/BackButton'
import {
    Container,
    ContainerBackButton,
    Header,
    UserProfile
} from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'


const UserInfo = () => {

    const [infoProfile, setInfoProfile] = useState('')


    async function getData() {
        try {
            const jsonValue = await AsyncStorage.getItem('@airaoHub_infoProfile')
            //return jsonValue != null ? JSON.parse(jsonValue) : null;
            if (jsonValue !== null) {
                let asyncData = JSON.parse(jsonValue)
                setInfoProfile(asyncData)
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

            </Header>
            <UserProfile>
                {infoProfile}
            </UserProfile>
        </Container>
    )
}

export default UserInfo