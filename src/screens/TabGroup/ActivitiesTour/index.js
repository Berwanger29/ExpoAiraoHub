import {
    Container,
    List,
} from './styles'

import Card from '../../../components/_Screens/Activities/Card'
import data from '../../../../data'


const ActivitiesTour = () => {

    const adventureData = data.filter((item) => {
        return item.type == "tour"
    })

    return (
        <Container>
            <List
                showsVerticalScrollIndicator={false}
                data={adventureData}
                renderItem={({ item }) => (
                    <Card
                        id={item.id}
                        title={item.title}
                        image={item.content.image}
                    />

                )}
            />
        </Container>
    )
}

export default ActivitiesTour 