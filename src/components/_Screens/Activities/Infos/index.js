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
                    onPress={() => Alert.alert('Aviso', 'O parna Anavilhanas trata-se de um parque ecológico e por isso, contamos com a colaboração de todos para a preservação do mesmo.')}
                >
                    <Ionicons name="alert-circle-outline" size={29} color={theme.colors.yellow} />
                </ButtonAlert>
            </LocalGroup>

            <Line />

            <DetailsGroup>
                <InfoContainer>
                    <IconCircle>
                        <FontAwesome name="arrows-v" size={40} color="black" />
                    </IconCircle>
                    <TextThin
                        text={`${data?.activities.height}m`}
                    />
                </InfoContainer>

                <InfoContainer>
                    <IconCircle>
                        <FontAwesome name="arrows-h" size={40} color="black" />
                    </IconCircle>
                    <TextThin
                        text={`${data?.activities.distance}m`}
                    />
                </InfoContainer>

                <InfoContainer>
                    <IconCircle>
                        <Octicons name="stopwatch" size={40} color="black" />
                    </IconCircle>
                    <TextThin
                        text={`${data?.activities.duration}m`}
                    />
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
        </Container>
    )
}

export default Infos