import { Container } from "./styles"
import { TextRegular } from "../../../Texts"
import theme from "../../../../global/styles/theme"
import { useEffect } from "react"


const FilterButton = ({ label, index, changeColor, onPress }) => {
    useEffect(() => {
        console.log('vvvvvvvvvvvvvvvvvvvvvv')
        console.log(index)
        console.log(changeColor)
    }, [])

    return (
        <Container
            key={index}
            onPress={onPress}
        >
            <TextRegular
                text={label}
                color={changeColor && index ? theme.colors.black : theme.colors.yellow}
            />
        </Container>
    )
}

export default FilterButton