import {
    Container,
    Image,
    Shadow,
    Title
} from './styles'


const Card = ({ title, image }) => {
    return (
        <Container>
            <Image
                source={{uri: image}}
                imageStyle={{borderRadius: 5}}
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