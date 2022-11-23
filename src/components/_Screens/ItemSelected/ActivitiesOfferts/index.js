import {
    Container,
    Header,
    Main
} from "./styles"

import { TextSubTitle } from "../../../Texts"
import { useEffect } from "react"
import Contact from "../../Activities/Contact"

const ActivitiesOfferts = ({ dataActivities }) => {

    let activities = dataActivities.activitiesList

    return (
        <Container>
            <Header>
                <TextSubTitle
                    text='Atividades oferecidas'
                />
            </Header>
            <Main>
                {
                    activities.map((e, index) =>
                        <Contact
                            key={index}
                            name={e.name}
                            link={e.link}
                        />
                    )
                }
            </Main>
        </Container>
    )
}

export default ActivitiesOfferts