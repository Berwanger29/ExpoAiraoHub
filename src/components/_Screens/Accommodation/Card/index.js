import {
    Container,
    Image,
    IsOpen,
    IsOpenDot,
    IsOpenText,
    PriceContainer,
    PricePeriod,
    PriceText,
    Title
} from './styles'

const Card = ({ title, isOpen, value, image }) => {
    return (
        <Container>
            <Image
                source={{
                    uri: image
                }}
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