import {
    OptionsText,
    Dot
} from './styles'

const OptionalText = ({ text }) => {
    return (
        <>
            <Dot />
            <OptionsText>
                {text}
            </OptionsText>
        </>
    )
}

export default OptionalText