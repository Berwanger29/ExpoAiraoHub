import theme from '../../../../global/styles/theme'
import { TextRegular } from '../../../Texts'
import {
    Container,
    Image,
    Title
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
            <TextRegular
                text={title}
                color={theme.colors.darkGreen}
            />

        </Container>
    )
}

export default Card