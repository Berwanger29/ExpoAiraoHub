import {
    Container,
    ShadowFilter,
    Title
} from './styles'

const Card = ({title}) => {
    return (
        <Container>
            <ShadowFilter>
                <Title>
                    {title}
                </Title>
            </ShadowFilter>
        </Container>
    )
}

export default Card