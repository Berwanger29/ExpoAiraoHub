import {
    Container,
    Header,
    Main,
    ScriptsList
} from './styles'

import Title from '../../components/Title'
import UserButtonContainer from '../../components/UserButtonContiner'
import UserButton from '../../components/UserButton'
import ScriptCard from '../../components/_Screens/Scripts/ScriptCard'

const Scripts = () => {
    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <Title
                    text="Roteiros"
                />
            </Header>
            <Main>
                <ScriptsList>
                    <ScriptCard

                    />
                </ScriptsList>
            </Main>
        </Container>
    )
}

export default Scripts