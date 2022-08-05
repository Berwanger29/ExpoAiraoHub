import {
    Container,
    PriceText,
    LabelText
} from "./styles"


const PriceLabel = ({ price, label }) => {
    return (
        <Container>
            <PriceText>
                R$ {price}
            </PriceText>
            <LabelText>
                / {label}
            </LabelText>
        </Container>
    )
}

export default PriceLabel