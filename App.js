
import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Home';
import Details from './src/Details';
const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}


export default App =()=> {

    
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen
         name='Home'
         component={Home}
        />
        <Stack.Screen
         name='Details'
         component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>




  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily:'Inter-Bold'
  },
  highlight: {
    fontWeight: '700',
  },
});

