import {
    Container,
    Header,
    Main,
    ScriptsList,
} from './styles'

import { useNavigation } from '@react-navigation/native'

import { TextSubTitle } from '../../../components/Texts'
import UserButtonContainer from '../../../components/UserButtonContiner'
import UserButton from '../../../components/UserButton'

import ScriptCard from '../../../components/_Screens/Scripts/ScriptCard'

const Scripts = () => {

    const navigation = useNavigation()

    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <TextSubTitle
                    text="Roteiros"
                />
            </Header>
            <Main>

                <ScriptsList
                    showsVerticalScrollIndicator={false}
                >
                    <ScriptCard
                        label="Apenas um dia"
                        onPress={() => navigation.navigate('ScriptList', {
                            title: 'Apenas um dia'
                        })}
                        image={{ uri: 'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80' }}
                    />
                    <ScriptCard
                        label="Final de semana"
                        onPress={() => navigation.navigate('ScriptList', {
                            title: 'Final de semana'
                        })}
                        image={{ uri: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' }}
                    />
                </ScriptsList>
            </Main>
        </Container>
    )
}

export default Scripts