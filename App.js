import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';


import theme from './src/global/styles/theme';


import LoginStack from './src/navigation/LoginStack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import User from './src/screens/User';



export default function App() {

  let [fontsLoaded, error] = useFonts({
    'ExtraBold': require('./assets/fonts/Lato-Black.ttf'),
    'Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Light': require('./assets/fonts/Lato-Light.ttf'),
    'Thin': require('./assets/fonts/Lato-Thin.ttf'),
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size='large' color={theme.colors.green} />
  }

  return (
    <ThemeProvider theme={theme}>
      <LoginStack />
    </ThemeProvider>
  );
}