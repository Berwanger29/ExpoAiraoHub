import {
    Container,
    Label
} from "./styles"


const LoginAreaButton = ({ label, onPress }) => {
    return (
        <Container
            onPress={onPress}
            style={{
                elevation: 5
            }}
        >
            <Label>{label}</Label>
        </Container>
    )
}

export default LoginAreaButton