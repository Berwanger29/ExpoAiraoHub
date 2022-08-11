import { useEffect, useState } from "react";
import { Linking } from "react-native";
import {
    Container,
    Image,
    ImageContainer,
    TextContentContainer,
    Title,
    Line,
    MainText,
    ContainerBackButton,
    ContainerLinks,
    OptionalText,
} from "./styles"

import BackButton from "../../../components/BackButton";
import ButtonLink from "../../../components/_Screens/ItemSelected/ButtonLink";


import data from "../../../../data";
import { ScreenContainer } from "react-native-screens";


const ItemSelected = ({ route }) => {

    const { itemId } = route.params;

    let arrayData = data.filter((item) => {
        return item.id == itemId
    })
    let itemData = arrayData[0]
    let optionals = itemData.content.offering

    let instagramLink = itemData.content.social.instagram
    let facebookLink = itemData.content.social.facebook
    let siteLink = itemData.content.social.site

    useEffect(() => {
        console.log(optionals)
    }, [])

    function handleLink(link) {
        Linking.openURL(link)
    }

    return (
        <Container>
            <ImageContainer>
                <Image
                    source={itemData.content.image}
                />

                <ContainerBackButton>
                    <BackButton />
                </ContainerBackButton>
            </ImageContainer>

            <TextContentContainer>
                <Title>
                    {itemData.title}
                </Title>
                <Line />
                <MainText>
                    {itemData.content.description}
                </MainText>
                <Line />
                {
                    optionals.map((e) => {
                        return (
                            <OptionalText>
                                {e}
                            </OptionalText>
                        )
                    })
                }
                <Line />
                <ContainerLinks>

                    {itemData.content.social.instagram !== '' &&
                        <ButtonLink
                            onPress={() => handleLink(instagramLink)}
                            nameIcon={"instagram-with-circle"}
                        />
                    }
                    {itemData.content.social.facebook !== '' &&
                        <ButtonLink
                            onPress={() => handleLink(facebookLink)}
                            nameIcon={"facebook-with-circle"}
                        />
                    }
                    {itemData.content.social.site !== '' &&
                        <ButtonLink
                            onPress={() => handleLink(siteLink)}
                            nameIcon="globe"
                        />
                    }

                </ContainerLinks>
            </TextContentContainer>
        </Container >
    )
}

export default ItemSelected