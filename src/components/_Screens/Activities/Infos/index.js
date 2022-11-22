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
import { Alert } from "react-native";
import advices from "../../../../../advices";


const Infos = ({ data }) => {

    let contactList = data.contactList

    return (
        <Container>
            <LocalGroup>
                <LocalLabel>
                    <TextRegular
                        text={`Local : ${data.local[0]}`}
                    />
                </LocalLabel>
                <ButtonAlert
                    onPress={() => Alert.alert('Aviso', advices.anavilhanas)}
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
                    <IconCircle>
                        <FontAwesome5 name="hiking" size={40} color="black" />
                    </IconCircle>
                    <TextThin
                        text={`${data.activities.effort}`}
                    />
                </InfoContainer>
            </DetailsGroup>
            <Line />
            <ContactsGroup>
                {
                    contactList.map((e, index) =>
                        <Contact
                            key={index}
                            name={e.name}
                            link={e.link}
                        />
                    )
                }
            </ContactsGroup>
        </Container >
    )
}

export default Infos