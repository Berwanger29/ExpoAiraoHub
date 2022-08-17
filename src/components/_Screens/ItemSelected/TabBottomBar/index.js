import {
    Container,
    ContactButton,
    ContacText,
} from './styles'

const TabBottomBar = ({ onPress }) => {
    return (
        <Container>
            <ContactButton
             onPress={onPress}
             activeOpacity={0.7}
            >
                <ContacText>
                    Contato
                </ContacText>
            </ContactButton>
        </Container>
    )
}

export default TabBottomBar;