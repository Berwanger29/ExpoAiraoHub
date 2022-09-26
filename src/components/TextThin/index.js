import { Thin } from "./styles";

const TextThin = ({ text, color }) => {
    return (
        <Thin
            color={color}
        >
            {text}
        </Thin>
    )
}

export default TextThin