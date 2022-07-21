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

const Card = ({ title, isOpen, value }) => {
    return (
        <Container>
            <Image />
            <Title>
                {title}
            </Title>
            <IsOpen>
                <IsOpenDot isOpen={isOpen} />
                <IsOpenText>
                    {isOpen ? "Aberto" : "Fechado"}
                </IsOpenText>
            </IsOpen>
            <PriceContainer>
                <PriceText>
                    R${value}
                </PriceText>
                <PricePeriod>
                    {' /'} diária
                </PricePeriod>
            </PriceContainer>
        </Container>
    )
}

export default Card