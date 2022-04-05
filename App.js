import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RoutesNavigation from './src/routes/indexNavigation'
import ContextProvider from './src/content/context'
import {
  ReadexPro_200ExtraLight,
  ReadexPro_300Light,
  ReadexPro_400Regular,
  ReadexPro_500Medium,
  ReadexPro_600SemiBold,
  ReadexPro_700Bold
} from '@expo-google-fonts/readex-pro';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



const App = () => {

    
let[fontsLoaded, error] = useFonts({
  ReadexPro_200ExtraLight,
  ReadexPro_300Light,
  ReadexPro_400Regular,
  ReadexPro_500Medium,
  ReadexPro_600SemiBold,
  ReadexPro_700Bold
});

if(!fontsLoaded){
  return <AppLoading />
}


  return (
    <ContextProvider>
      <NavigationContainer>

        <RoutesNavigation />


      </NavigationContainer>
    </ContextProvider>

  )
}



export default App


