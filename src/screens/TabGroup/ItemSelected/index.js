import { useEffect, useState } from "react";
import { Linking, StatusBar } from "react-native";
import {
    Container,
    Image,
    ImageContainer,
    TextContentContainer,
    MainText,
    ContainerBackButton,
    ContainerLinks,
    ScrollContainer,
    OptionalsContainer,
    FontButton,
    NavigateButton,
} from "./styles"

import Line from '../../../components/Line'
import BackButton from "../../../components/BackButton";
import ButtonLink from "../../../components/_Screens/ItemSelected/ButtonLink";
import OptionalText from "../../../components/_Screens/ItemSelected/OptionalText";
import { TextRegular, TextSubTitle } from "../../../components/Texts";
import Infos from "../../../components/_Screens/Activities/Infos";
import ActivitiesOfferts from "../../../components/_Screens/ItemSelected/ActivitiesOfferts";

import data from "../../../../data";

import { useNavigation } from "@react-navigation/native";
import theme from "../../../global/styles/theme";



const ItemSelected = ({ route }) => {

    const { itemId } = route.params;
    const navigation = useNavigation()

    const [links, setLinks] = useState(false)

    let agenciesData = data.filter((item) => {
        return item.type == 'agencies'
    })

    let arrayData = data.filter((item) => {
        return item.id == itemId
    })
    let itemData = arrayData[0]

    let optionals = itemData.content.offering

    let instagramLink = itemData.content.social?.instagram
    let facebookLink = itemData.content.social?.facebook
    let siteLink = itemData.content.social?.site
    let contacts = itemData.content.contacts
    let addressLink = itemData.content.addressLink

    let infoActivities = itemData.content.infoActivities
    let dataActivities = itemData.content.showActivities

    function handleLinkURL(link) {
        Linking.openURL(link)
    }


    useEffect(() => {
        if (instagramLink || facebookLink || siteLink || contacts || addressLink) {
            setLinks(true)
        }
    }, [])



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
                    {
                        itemData.content.description != '' ?
                            (
                                <>

                                    <MainText>
                                        {itemData.content.description}
                                    </MainText>
                                    {
                                        itemData.categorie == 'parque' ?
                                            (
                                                <>
                                                    <FontButton
                                                        onPress={() => handleLinkURL('https://www.gov.br/icmbio/pt-br')}

                                                    >
                                                        <TextRegular
                                                            text='Fonte: ICMBIO'
                                                        />
                                                    </FontButton>

                                                    <FontButton
                                                        style={{ borderBottomWidth: 0, alignSelf: 'center', marginTop: 20 }}
                                                        onPress={() => navigation.navigate('IndividualList', {
                                                            title: 'Agência/Operador',
                                                            data: agenciesData
                                                        })}
                                                    >
                                                        <NavigateButton>
                                                            <TextRegular
                                                                text='Explorar agências e operadores'
                                                                color={theme.colors.light}
                                                            />
                                                        </NavigateButton>
                                                    </FontButton>
                                                </>
                                            ) : (null)
                                    }
                                    <Line />
                                </>
                            ) :
                            (null)
                    }


                    {
                        itemData.type == 'tourism' &&
                        (
                            <>
                                <Infos
                                    data={infoActivities}
                                />
                            </>
                        )
                    }

                    {
                        itemData.type !== 'tourism' &&
                        <>
                            {optionals.length != 0 &&
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
                                    <Line />
                                </OptionalsContainer>
                            }

                            {links &&
                                <>
                                    <ContainerLinks>
                                        {
                                            instagramLink !== '' &&
                                            <ButtonLink
                                                onPress={() => handleLinkURL(instagramLink)}
                                                nameIcon={"instagram-with-circle"}
                                            />
                                        }
                                        {
                                            facebookLink !== '' &&
                                            <ButtonLink
                                                onPress={() => handleLinkURL(facebookLink)}
                                                nameIcon={"facebook-with-circle"}
                                            />
                                        }
                                        {
                                            siteLink !== '' &&
                                            <ButtonLink
                                                onPress={() => handleLinkURL(siteLink)}
                                                nameIcon="globe"
                                            />
                                        }
                                        {
                                            contacts !== '' &&
                                            <ButtonLink
                                                onPress={() => handleLinkURL(itemData.content?.contacts)}
                                                nameIcon="phone"
                                            />
                                        }
                                        {
                                            addressLink !== '' &&
                                            <ButtonLink
                                                onPress={() => handleLinkURL(itemData.content?.addressLink)}
                                                nameIcon="map"
                                            />
                                        }
                                    </ContainerLinks>

                                    <Line />
                                </>
                            }
                        </>
                    }

                    {
                        itemData.type == 'agencies' &&
                        (
                            <>
                                <ActivitiesOfferts dataActivities={dataActivities} />
                                <Line />
                            </>
                        )
                    }
                </TextContentContainer>
            </ScrollContainer>
        </Container >
    )
}

export default ItemSelected