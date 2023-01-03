import { useState, useEffect } from "react";
import BackButton from "../../../components/BackButton";
import {
    Container,
    ContainerBackButton,
    Header,
    Main,
    Scroll,
} from "./styles";

import { TextRegular, TextSubTitle } from '../../../components/Texts'
import BackgroundImage from "../../../components/BackgroundImage";
import CardText from "../../../components/_Screens/User/CardText";

import * as pt from '../../../utils/pt'
import * as en from '../../../utils/en'

const UserAbout = () => {


    const portuguese = pt.labels
    const english = en.labels
    const [selectedLanguage, setSelectedLanguage] = useState('pt')
    const [language, setLanguage] = useState(portuguese)

    function handleLanguage() {
        if (selectedLanguage === 'pt') {
            setLanguage(portuguese)
        } else if (selectedLanguage === 'en') {
            setLanguage(english)
        }
    }
    useEffect(() => {
        handleLanguage()
    }, [])
    return (
        <BackgroundImage
            filter={1}
            image={require('../../../../assets/images/plantBackground.jpg')}
        >
            <Container>
                <ContainerBackButton>
                    <BackButton />
                </ContainerBackButton>
                <Header>
                    <TextSubTitle
                        text={language.account.about.about}
                    />
                </Header>
                <Main>
                    <Scroll>
                        <CardText>
                            <TextRegular
                                format='justify'
                                text={language.account.about.text}
                            />
                        </CardText>
                    </Scroll>
                </Main>
            </Container>
        </BackgroundImage>
    )
}

export default UserAbout