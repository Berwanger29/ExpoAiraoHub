import Title from "../../components/Title"
import UserButton from "../../components/UserButton"
import UserButtonContainer from "../../components/UserButtonContiner"
import {
    Container, Header,

} from "./styles"


const Map = () => {
    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
            </Header>
            <Title
                text="Como chegar"
            />
        </Container>
    )
}

export default Map