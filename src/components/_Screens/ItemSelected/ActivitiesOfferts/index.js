import {
    Container,
    Header,
    Main
} from "./styles"

import { TextSubTitle } from "../../../Texts"
import Contact from "../../Activities/Contact"
import { useEffect } from "react"

const ActivitiesOfferts = ({ dataActivities }) => {

    let activities = dataActivities.activitiesList

    useEffect(() => {
        console.log(activities)
    }, [])

    if (activities.length < 1){
        return <></>
    }

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