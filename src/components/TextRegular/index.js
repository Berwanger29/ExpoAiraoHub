import { Regular } from "./styles";

const TextRegular = ({ text, color }) => {
    return (
        <Regular
            color={color}
        >
            {text}
        </Regular>
    )
}

export default TextRegular