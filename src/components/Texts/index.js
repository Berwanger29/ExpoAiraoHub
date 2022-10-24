import {
    Title,
    SubTitle,
    Regular,
    Thin
} from './styles'

export function TextTitle({ text, color, format, textDecoration }) {
    return (
        <Title
            color={color}
            format={format}
            textDecoration={textDecoration}
        >
            {text}
        </Title>
    )
}

export function TextSubTitle({ text, color, format, textDecoration }) {
    return (
        <SubTitle
            color={color}
            format={format}
            textDecoration={textDecoration}
        >
            {text}
        </SubTitle>
    )
}

export function TextRegular({ text, color, format, textDecoration }) {
    return (
        <Regular
            color={color}
            format={format}
            textDecoration={textDecoration}
        >
            {text}
        </Regular>
    )
}

export function TextThin({ text, color, format, textDecoration }) {
    return (
        <Thin
            color={color}
            format={format}
            textDecoration={textDecoration}
        >
            {text}
        </Thin>
    )
}
