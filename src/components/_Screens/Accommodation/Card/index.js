import theme from '../../../../global/styles/theme'
import { TextRegular } from '../../../Texts'
import {
    Container,
    Image,
    TextContainer,
} from './styles'

const Card = ({ title, image, onPress }) => {
    return (
        <Container
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Image
                source={image}

            />

            <TextContainer>
                <TextRegular
                    text={title}
                    color={theme.colors.darkGreen}
                />
            </TextContainer>
        </Container>
    )
}

export default Card