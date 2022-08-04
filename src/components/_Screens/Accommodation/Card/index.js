import {
    Container,
    Image,
    PriceContainer,
    PriceText,
    Title
} from './styles'

const Card = ({ title, value, image, onPress }) => {
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
            <PriceContainer>
                <PriceText>
                    {value}
                </PriceText>
            </PriceContainer>
        </Container>
    )
}

export default Card