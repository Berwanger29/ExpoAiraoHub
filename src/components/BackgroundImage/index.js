import {
    Background,
    Filter,
} from "./styles"


const BackgroundImage = ({ children, image, filter }) => {
    return (
        <Background
            source={image}
        >
            <Filter
                filter={filter}
            >
                    {children}
             
            </Filter>
        </Background>
    )
}

export default BackgroundImage