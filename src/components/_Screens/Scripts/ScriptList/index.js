import { Container, Options } from "./styles"

import { TextRegular } from "../../../Texts"

import data from "../../../../../data"


const ScriptList = ({ route }) => {

    const scripts = data.filter((item) => {
        if (item.type === 'script') {
            return item
        }
    })

    const { title } = route.params

    return (
        <Container>
            <TextRegular
                text={title}
            />

            <Options
                data={scripts}
                renderItem={({ item }) => (
                    <TextRegular
                        text={item.title}
                    />
                )}
            />
        </Container>
    )
}

export default ScriptList