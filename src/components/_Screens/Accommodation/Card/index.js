import {
    Container,
    Image,
    Title
} from './styles'
import PriceLabel from '../../../PriceLabel'



const Card = ({ title, value, type, image, onPress }) => {
    return (
        <Container
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Image
                source={image}
            />
            <Title>
                {title}
            </Title>
            <PriceLabel
                price={value}
                label={type}
            />
        </Container>
    )
}

export default Card