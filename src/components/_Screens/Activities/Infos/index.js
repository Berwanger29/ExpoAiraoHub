import { useEffect } from "react";
import {
    ContactsGroup,
    Container,
    DetailsGroup,
    InfoContainer,
    IconCircle
} from "./styles"

import { TextThin } from "../../../Texts";

import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Contact from "../Contact";
import Line from "../../../Line";


const Infos = ({ data }) => {

    let contactList = data.contactList

    return (
        <Container>
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
                            tel={e.tel}
                        />
                    )
                }
            </ContactsGroup>
        </Container>
    )
}

export default Infos