import { useEffect } from "react";
import { Linking, StatusBar } from "react-native";
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
    ScrollContainer,
    OptionalsContainer,
} from "./styles"

import BackButton from "../../../components/BackButton";
import ButtonLink from "../../../components/_Screens/ItemSelected/ButtonLink";
import OptionalText from "../../../components/_Screens/ItemSelected/OptionalText";

import data from "../../../../data";
import { TextSubTitle } from "../../../components/Texts";


const ItemSelected = ({ route }) => {

    const { itemId } = route.params;

    let arrayData = data.filter((item) => {
        return item.id == itemId
    })
    let itemData = arrayData[0]
    let optionals = itemData.content.offering

    let instagramLink = itemData.content.social?.instagram
    let facebookLink = itemData.content.social?.facebook
    let siteLink = itemData.content.social?.site

    function handleLinkURL(link) {
        Linking.openURL(link)
    }

    return (
        <Container>
            <StatusBar
                backgroundColor='transparent'
                translucent
            />
            <ScrollContainer
                showsVerticalScrollIndicator={false}
            >
                <ImageContainer>
                    <Image
                        source={itemData.content.image}
                    />

                    <ContainerBackButton>
                        <BackButton />
                    </ContainerBackButton>
                </ImageContainer>

                <TextContentContainer>
                    <TextSubTitle
                        text={itemData.title}
                    />
                    <Line />
                    <MainText>
                        {itemData.content.description}
                    </MainText>
                    <Line />
                    <OptionalsContainer>
                        {
                            optionals.map((e, id) => {
                                return (
                                    <OptionalText
                                        key={id}
                                        text={e}
                                    />
                                )
                            })
                        }
                    </OptionalsContainer>
                    <Line />
                    <ContainerLinks>

                        {instagramLink !== '' &&
                            <ButtonLink
                                onPress={() => handleLinkURL(instagramLink)}
                                nameIcon={"instagram-with-circle"}
                            />
                        }
                        {facebookLink !== '' &&
                            <ButtonLink
                                onPress={() => handleLinkURL(facebookLink)}
                                nameIcon={"facebook-with-circle"}
                            />
                        }
                        {siteLink !== '' &&
                            <ButtonLink
                                onPress={() => handleLinkURL(siteLink)}
                                nameIcon="globe"
                            />
                        }
                        {itemData.content.contacts !== '' &&
                            <ButtonLink
                                onPress={() => handleLinkURL(itemData.content?.contacts)}
                                nameIcon="phone"
                            />
                        }
                        {
                            itemData.content.addressLink !== '' &&
                            <ButtonLink
                                onPress={() => handleLinkURL(itemData.content?.addressLink)}
                                nameIcon="map"
                            />
                        }

                    </ContainerLinks>
                </TextContentContainer>

            </ScrollContainer>

        </Container >
    )
}

export default ItemSelected