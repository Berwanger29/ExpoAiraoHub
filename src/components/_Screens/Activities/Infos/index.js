import {
    ContactsGroup,
    Container,
    DetailsGroup,
    InfoContainer,
    IconCircle,
    LocalGroup,
    LocalLabel,
    ButtonAlert
} from "./styles"

import { TextRegular, TextThin } from "../../../Texts";

import {
    FontAwesome,
    Octicons,
    FontAwesome5,
    Ionicons
} from '@expo/vector-icons';
import Contact from "../Contact";
import Line from "../../../Line";
import theme from "../../../../global/styles/theme";
import { Alert, View } from "react-native";
import advices from "../../../../../advices";
import { useEffect, useState } from "react";


const Infos = ({ data }) => {

    let contactList = data.contactList
    let hasContact = 0

    const [showContacts, setShowContacts] = useState(true)

    function verifyContact() {
        contactList.map(e => {
            if (e.name !== '') {
                hasContact += 1
                setShowContacts(true)
            } else {
                setShowContacts(false)
            }
        })
    }


    function correctAdvice(e) {
        switch (e) {
            case 'Anavilhanas':
                return advices.anavilhanas
            case 'Jaú':
                return advices.jau
            case 'Rio':
                return advices.rio
            default:
                return advices.default
        }
    }


    useEffect(() => {
        verifyContact()
    }, [])

    return (
        <Container>
            <LocalGroup>
                <LocalLabel>
                    <TextRegular
                        text={`Local : ${data.local[0]}`}
                    />
                </LocalLabel>
                <ButtonAlert
                    onPress={() => Alert.alert('Aviso', correctAdvice(data.local[0]))}
                >
                    <Ionicons name="alert-circle-outline" size={29} color={theme.colors.yellow} />
                </ButtonAlert>
            </LocalGroup>

            <Line />

            <DetailsGroup justifyContent={((data?.activities.height) | (data?.activities.distance) | (data?.activities.duration)) > 0 ? 'space-evenly' : 'center'}>
                <InfoContainer>
                    {
                        data?.activities.height > 0 ?
                            (
                                <>
                                    <IconCircle>
                                        <FontAwesome name="arrows-v" size={40} color="black" />
                                    </IconCircle>
                                    <TextThin
                                        text={`${data?.activities.height}m`}
                                    />
                                </>
                            )
                            :
                            (
                                null
                            )
                    }
                </InfoContainer>
                <InfoContainer>
                    {data?.activities.distance > 0 ?
                        (
                            <>
                                <IconCircle>
                                    <FontAwesome name="arrows-h" size={40} color="black" />
                                </IconCircle>
                                <TextThin
                                    text={`${data?.activities.distance}m`}
                                />
                            </>
                        )
                        : (
                            null
                        )
                    }
                </InfoContainer>
                <InfoContainer>
                    {data?.activities.duration > 0 ?
                        (
                            <>
                                <IconCircle>
                                    <Octicons name="stopwatch" size={40} color="black" />
                                </IconCircle>
                                <TextThin
                                    text={`${data?.activities.duration}m`}
                                />
                            </>
                        )
                        :
                        (
                            null
                        )
                    }
                </InfoContainer>
                <InfoContainer>
                    {
                        data.activities.effort !== '' ?
                            (
                                <>
                                    <IconCircle>
                                        <FontAwesome5 name="hiking" size={40} color="black" />
                                    </IconCircle>
                                    <TextThin
                                        text={`${data.activities.effort}`}
                                    />
                                </>
                            )
                            :
                            (
                                null
                            )

                    }
                </InfoContainer>
            </DetailsGroup>
            <ContactsGroup>
                {
                    showContacts ?
                        (
                            contactList.map((e, index) =>
                                <Contact
                                    key={index}
                                    name={e.name}
                                    link={e.link}
                                />
                            )
                        )
                        :
                        (null)


                }
            </ContactsGroup>
        </Container >
    )
}

export default Infos