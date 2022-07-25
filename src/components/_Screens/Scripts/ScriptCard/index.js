import {
    Container, ImageBackground
} from './styles'

const ScriptCard = () => {
    return (
        <Container>
            
            <ImageBackground
                source={{
                    uri: 'https://images.unsplash.com/photo-1518325877900-02407bd1ca59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                }}
            />
        </Container>
    )
}

export default ScriptCard