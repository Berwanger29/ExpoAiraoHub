import {
    Title,
    SubTitle,
    Regular,
    Thin
} from './styles'

export function TextTitle({ text, color }) {
    return (
        <Title
            color={color}
        >
            {text}
        </Title>
    )
}

export function TextSubTitle({ text, color }) {
    return (
        <SubTitle
            color={color}
        >
            {text}
        </SubTitle>
    )
}

export function TextRegular({ text, color, format }) {
    return (
        <Regular
            color={color}
            format={format}
        >
            {text}
        </Regular>
    )
}

export function TextThin({ text, color }) {
    return (
        <Thin
            color={color}
        >
            {text}
        </Thin>
    )
}
