import {
    Container,
    Input,
    SearchButton
} from './styles'

import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

const SearchBar = ({value, onChangeText}) => {

    return (
        <Container
            style={{
                elevation: 5,
            }}
        >
            <Input
                placeholder='O que você procura ?'
                value={value}
                onChangeText={onChangeText}
            />
            <SearchButton>
                <AntDesign name="search1" size={RFValue(21)} color={'rgba(44, 44, 44, 0.38)'} />
            </SearchButton>
        </Container>
    )
}

export default SearchBar