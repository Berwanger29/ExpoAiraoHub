import { ScrollView } from 'react-native'
const Keyboard = ({ children }) => {
    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            bounces={false}
        >
            {children}
        </ScrollView>
    )
}

export default Keyboard