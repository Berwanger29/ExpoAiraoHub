import { Platform } from 'react-native'
import {
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
const Keyboard = ({ children }) => {
    return (
        <KeyboardAvoidingView
        style={{flex:1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                   contentContainerStyle={{ flex: 1 }}
                   bounces={false}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Keyboard