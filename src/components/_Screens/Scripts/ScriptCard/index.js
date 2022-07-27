import {
    Container,
    ImageBackground,
    ShadowFilter,
    Title
} from './styles'

const ScriptCard = ({ image, label }) => {
    return (
        <Container>
            <ImageBackground
                source={{ uri: image }}
                resizeMode="cover"
                imageStyle={{ borderRadius: 5 }}
            >
                <ShadowFilter>
                    <Title>
                        {label}
                    </Title>
                </ShadowFilter>
            </ImageBackground>
        </Container>
    )
}

export default ScriptCard