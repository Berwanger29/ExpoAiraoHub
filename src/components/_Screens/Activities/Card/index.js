import theme from "../../../../global/styles/theme"
import {
    Container,
    ImageCard,
    ImageContainer,
    PriceContainer,
    PriceLabel,
    Title,
} from "./styles"


const Card = ({ title, image, price }) => {
    return (
        <Container>
            <ImageContainer>
                <ImageCard
                    source={image}
                    style={{
                        resizeMode: 'cover'
                    }}
                />
            </ImageContainer>
            <Title>
                {title}
            </Title>
            <PriceContainer>
                <PriceLabel
                    style={{
                        fontFamily: theme.fonts.bold
                    }}
                >R${' '}{price} </PriceLabel>
                <PriceLabel>/ pessoa</PriceLabel>
            </PriceContainer>

        </Container>
    )
}

export default Card