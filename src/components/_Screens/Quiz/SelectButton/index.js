import { useEffect } from 'react'
import theme from '../../../../global/styles/theme'
import { TextRegular } from '../../../Texts'
import {
    Container,
} from './styles'

const SelectButton = ({ text, onPress, changeColor }) => {

    useEffect(() => {
        console.log(changeColor)
    }, [])

    return (
        <Container
            activeOpacity={0.7}
            onPress={onPress}
            isFocused={changeColor}
        >
            <TextRegular
                color={theme.colors.light}
                text={text}
            />
        </Container>
    )
}

export default SelectButton