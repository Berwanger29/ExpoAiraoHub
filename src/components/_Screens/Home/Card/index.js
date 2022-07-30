import {
    Container,
    Image,
    Shadow,
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
                imageStyle={{ borderRadius: 5 }}
            >
                <Shadow>
                    <Title>
                        {title}
                    </Title>
                </Shadow>
            </Image>
        </Container>
    )
}

export default Card