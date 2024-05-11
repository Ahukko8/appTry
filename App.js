import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  tabNavigation  from './navigation/tabNavigation'



const Stack = createNativeStackNavigator();



export default function App() {
  const [fontsLoaded] = useFonts({
    'MvIzyanreethi': require('./assets/fonts/MvIzyanreethi-Bold.ttf'),
    'ReemKufi': require('./assets/fonts/ReemKufi-SemiBold.ttf'),
    'SanguSuruhee': require('./assets/fonts/SanguSuruhee-Regular.ttf')
  })

const onLayoutRootView = useCallback(async() => {
  if(fontsLoaded) {
    await SplashScreen.hideAsync()
  }
}, [fontsLoaded])

if(!fontsLoaded) {
  return null
}
  


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={tabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

