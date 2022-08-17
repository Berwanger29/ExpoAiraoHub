import {
    Container
} from './styles'
import { Entypo } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../../global/styles/theme';


const ButtonLink = ({ onPress, nameIcon }) => {
    return (
        <Container
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Entypo
                name={nameIcon}
                size={RFValue(40)}
                color={theme.colors.black}
            />
        </Container>
    )
}

export default ButtonLink