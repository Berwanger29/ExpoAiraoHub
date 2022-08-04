import { Container } from "./styles"


const ListHomeCards = ({ data }) => {
    return (
        <Container
            data={data}
            renderItem={() => null}
        />
    )
}

export default ListHomeCards