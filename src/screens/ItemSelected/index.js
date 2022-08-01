import {
    Container,
    Image,
    ImageContainer,
    TextContentContainer,
    Title,
    Line,
    MainText,
    ContainerBackButton
} from "./styles"

import BackButton from "../../components/BackButton";

import data from "../../../data";

const ItemSelected = ({ route }) => {

    const { itemId } = route.params;

    let itemData = data.filter((item) => {
        return item.id == itemId
    })

    return (
        <Container>
            <ImageContainer>
                <Image
                    source={itemData[0].content.image}
                />

                <ContainerBackButton>
                    <BackButton />
                </ContainerBackButton>
            </ImageContainer>

            <TextContentContainer>
                <Title>
                    {itemData[0].title}
                </Title>
                <Line />
                <MainText>
                    {itemData[0].content.description}
                </MainText>
                <Line />
            </TextContentContainer>
        </Container>
    )
}

export default ItemSelected