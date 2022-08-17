import { useEffect } from "react";
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
    ScrollContainer,
    OptionalsContainer,
} from "./styles"

import BackButton from "../../../components/BackButton";
import ButtonLink from "../../../components/_Screens/ItemSelected/ButtonLink";
import TabBottomBar from "../../../components/_Screens/ItemSelected/TabBottomBar";
import OptionalText from "../../../components/_Screens/ItemSelected/OptionalText";

import SystemNavigationBar from "react-native-system-navigation-bar";

import data from "../../../../data";


const ItemSelected = ({ route }) => {

    useEffect(() => {
        SystemNavigationBar.navigationHide()
    }, [])

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
                    <Title>
                        {itemData.title}
                    </Title>
                    <Line />
                    <MainText>
                        {itemData.content.description}
                    </MainText>
                    <Line />
                    <OptionalsContainer>
                        {
                            optionals.map((e) => {
                                return (
                                    <OptionalText
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

                    </ContainerLinks>
                </TextContentContainer>

            </ScrollContainer>

        </Container >
    )
}

export default ItemSelected