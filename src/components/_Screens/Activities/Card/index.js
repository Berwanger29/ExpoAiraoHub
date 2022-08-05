import theme from "../../../../global/styles/theme"
import {
    Container,
    ImageCard,
    ImageContainer,
    Title,
} from "./styles"

import PriceLabel from "../../../PriceLabel"


const Card = ({ title, image, price, type }) => {
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

            <PriceLabel
                price={price}
                label={type}
            />
            {/* <PriceContainer>
                <PriceLabel
                    style={{
                        fontFamily: theme.fonts.bold
                    }}
                >R${' '}{price} </PriceLabel>
                <PriceLabel>/ pessoa</PriceLabel>
            </PriceContainer> */}

        </Container>
    )
}

export default Card