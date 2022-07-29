import {
    Container,
    Label,
    List,

} from './styles'

import Card from '../../components/_Screens/Activities/Card'

import data from '../../../data'



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
                        image={item.content.image}
                        title={item.title}
                        price={item.content.prices}
                    />
                )}
            />
        </Container>
    )
}

export default ActivitiesTour 