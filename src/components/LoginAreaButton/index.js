import theme from "../../global/styles/theme"
import { TextRegular } from "../Texts"
import {
    Container,
} from "./styles"


const LoginAreaButton = ({ label, onPress }) => {
    return (
        <Container
            onPress={onPress}
            style={{
                elevation: 5
            }}
        >

            <TextRegular
                color={theme.colors.light}
                text={label}
            />
        </Container>
    )
}

export default LoginAreaButton