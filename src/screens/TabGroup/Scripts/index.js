import { useState } from 'react'
import { Button } from 'react-native'

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

import Title from '../../../components/Title'
import UserButtonContainer from '../../../components/UserButtonContiner'
import UserButton from '../../../components/UserButton'
import ScriptCard from '../../../components/_Screens/Scripts/ScriptCard'

import { AntDesign } from '@expo/vector-icons';

import theme from '../../../global/styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'

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
                            onPress={()=>setIsVisible(!isVisible)}
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
                <Title
                    text="Roteiros"
                />
                <Button
                    title="Abrir modal"
                    onPress={() => setIsVisible(!isVisible)}
                >

                </Button>
            </Header>
            <Main>
                <ScriptsList
                    showsVerticalScrollIndicator={false}
                >
                    <ScriptCard
                        label="Em família"
                        image={'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80'}
                    />
                    <ScriptCard
                        label="Em casal"
                        image={'https://images.unsplash.com/photo-1518325877900-02407bd1ca59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                    />
                    <ScriptCard
                        label="Só"
                        image={'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80'}
                    />
                </ScriptsList>
            </Main>
        </Container>
    )
}

export default Scripts