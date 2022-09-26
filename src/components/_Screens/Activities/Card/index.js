import theme from "../../../../global/styles/theme"
import {
    Container,
    ImageCard,
    ImageContainer,
    Title,
} from "./styles"

import PriceLabel from "../../../PriceLabel"

import { useNavigation } from "@react-navigation/native"


const Card = ({ id, title, image, price, type }) => {

    const navigation = useNavigation()

    function handleNavigation(id) {
        navigation.navigate('ItemSelected', {
            itemId: id
        })
        console.log(id)
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
            <Title>
                {title}
            </Title>
        </Container>
    )
}

export default Card