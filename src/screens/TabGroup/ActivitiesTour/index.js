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
                        image={item.content.image}
                        title={item.title}
                    />

                )}
            />
        </Container>
    )
}

export default ActivitiesTour 