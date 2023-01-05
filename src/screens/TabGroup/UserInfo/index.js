import { useEffect, useState, useContext } from 'react'
import BackButton from '../../../components/BackButton'
import {
    Container,
    ContainerBackButton,
    Header,
    Main,
    ButtonLanguage,
    CountryFlag
} from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextRegular, TextSubTitle } from '../../../components/Texts'
import BackgroundImage from '../../../components/BackgroundImage'
import CardText from '../../../components/_Screens/User/CardText'

import LanguageSelector from '../../../utils/LanguageSelector'




const UserInfo = () => {

    const { portuguese, english, language, flag } = useContext(LanguageSelector);
    const { handleLanguage } = useContext(LanguageSelector);

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
                    setInfoProfile(language.account.profile.infoProfile_1)
                } else if ((asyncData < 75) && (asyncData >= 45)) {
                    setInfoProfile(language.account.profile.infoProfile_2)
                } else {
                    setInfoProfile(language.account.profile.infoProfile_3)
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
        <BackgroundImage
            image={require('../../../../assets/images/plantBackground.jpg')}
            filter
        >
            <Container>
                <Header>
                    <ContainerBackButton>
                        <BackButton />
                    </ContainerBackButton>
                    <TextSubTitle
                        text={language.account.profile.profile}
                    />
                </Header>
                <Main>
                    <CardText>
                        <TextRegular
                            text={`${language.account.profile.text} ${infoProfile}`}
                        />
                    </CardText>
                    <ButtonLanguage
                        onPress={() => handleLanguage()}
                    >
                        <CountryFlag
                            source={flag}
                        />
                    </ButtonLanguage>
                </Main>
            </Container>
        </BackgroundImage>
    )
}

export default UserInfo