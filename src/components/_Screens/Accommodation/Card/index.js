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
            <Title>
                {title}
            </Title>

        </Container>
    )
}

export default Card