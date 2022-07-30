import { Container } from "./styles"


const Buttons = ({ children }) => {
    return (
        <Container
            style={{
                elevation: 2
            }}
        >
            {children}
        </Container>
    )
}

export default Buttons