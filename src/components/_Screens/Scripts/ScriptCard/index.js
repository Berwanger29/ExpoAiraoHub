import { TextRegular } from "../../../Texts"
import {
    Container,
    ImageButton,
    Label
} from "./styles"
import theme from '../../../../global/styles/theme'



const ScriptCard = ({ onPress, label, image }) => {
    return (
        <Container
            onPress={onPress}
            activeOpacity={0.7}
        >
            <ImageButton
                source={image}
                imageStyle={{ borderRadius: 5 }}
            >
                <TextRegular
                    text={label}
                    color={theme.colors.light}
                />
            </ImageButton>
        </Container>
    )
}

export default ScriptCard