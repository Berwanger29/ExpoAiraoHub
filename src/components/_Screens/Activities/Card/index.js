import theme from "../../../../global/styles/theme"
import {
    Container,
    ImageCard,
    ImageContainer,
} from "./styles"


import { useNavigation } from "@react-navigation/native"
import { TextRegular } from "../../../Texts"


const Card = ({ id, title, image }) => {

    const navigation = useNavigation()

    function handleNavigation(id) {
        navigation.navigate('ItemSelected', {
            itemId: id
        })
    }


    return (
        <Container
            activeOpacity={0.5}
            onPress={() => handleNavigation(id)}
        >
            <ImageContainer>
                <ImageCard
                    source={image}
                    style={{
                        resizeMode: 'cover'
                    }}
                />
            </ImageContainer>
            <TextRegular
                text={title}
                color={theme.colors.darkGreen}
            />
        </Container>
    )
}

export default Card