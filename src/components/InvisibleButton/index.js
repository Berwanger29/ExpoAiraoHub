import { Button } from "./styles"

const InvisibleButton = ({ children, onPress }) => {
    return (
        <Button
            //onPress={onPress}
            onPress={onPress}
        >
            {children}
        </Button>
    )
}

export default InvisibleButton