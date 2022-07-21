import {
    Container,
    HorizontalView,
    Title
} from "./styles";

export const Carroussel = ({ children, title }) => {
    return (
        <Container
            horizontal
            
        >
            <Title>
                {title}
            </Title>
            <HorizontalView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {children}
            </HorizontalView>
        </Container>
    )
}

export default Carroussel