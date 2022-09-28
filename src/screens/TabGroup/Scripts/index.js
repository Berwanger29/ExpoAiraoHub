import { useState } from 'react'
import {
    Container,
    ModalScript,
    ModalContainer,
    ModalContent,
    CloseModalButton,
    Header,
    Main,
    ScriptsList,
} from './styles'

import { TextTitle } from '../../../components/Texts'
import UserButtonContainer from '../../../components/UserButtonContiner'
import UserButton from '../../../components/UserButton'

import { AntDesign } from '@expo/vector-icons';

import theme from '../../../global/styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'
import ScriptCard from '../../../components/_Screens/Scripts/ScriptCard'

const Scripts = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <Container>
            <ModalScript
                animationType='fade'
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    setIsVisible(!isVisible)
                }}
            >
                <ModalContainer>
                    <ModalContent>
                        <CloseModalButton
                            onPress={() => setIsVisible(!isVisible)}
                        >
                            <AntDesign
                                name="close"
                                size={RFValue(22)}
                                color={theme.colors.black}
                            />
                        </CloseModalButton>
                    </ModalContent>
                </ModalContainer>

            </ModalScript>

            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <TextTitle
                    text="Roteiros"
                />

            </Header>
            <Main>
                <ScriptsList
                    showsVerticalScrollIndicator={false}
                >
                    <ScriptCard
                        label="Monte seu roteiro"
                        onPress={() => setIsVisible(!isVisible)}
                        image={{ uri: 'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80' }}
                    />
                    <ScriptCard
                        label="Sugestões para você"
                        image={{ uri: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' }}
                    />
                </ScriptsList>
            </Main>
        </Container>
    )
}

export default Scripts