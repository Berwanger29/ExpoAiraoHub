import {
    Container,
    ImageButton,
    Label
} from "./styles"



const ScriptCard = ({ onPress, label, image }) => {
    return (
        <Container
            onPress={onPress}
            activeOpacity={0.7}
        >
            <ImageButton
                source={image}
                imageStyle={{ borderRadius: 5 }}
            >
                <Label>
                    {label}
                </Label>
            </ImageButton>
        </Container>
    )
}

export default ScriptCard