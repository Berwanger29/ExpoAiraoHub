import { Container } from "./styles"


const Buttons = ({ children, onPress }) => {
    return (
        <Container
            style={{
                elevation: 2
            }}
            activeOpacity={0.7}
            onPress={onPress}
        >
            {children}
        </Container>
    )
}

export default Buttons