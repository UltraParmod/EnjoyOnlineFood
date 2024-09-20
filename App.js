import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './Src/Screens/Welcome';
import Routes from './Src/Routes/Routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Src/Screens/Home';
import TabsNavigation from './Src/Screens/TabsNavigation';
import Details from './Src/Screens/Details';
import Cart from './Src/Screens/Cart';
import ContextApi from './Src/Components/ContextApi';
import OrderPleaced from './Src/Screens/OrderPleaced';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <ContextApi>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="OrderPleaced" component={OrderPleaced} />



      </Stack.Navigator>
    </NavigationContainer>
    </ContextApi>
  );
};

export default App;

const styles = StyleSheet.create({});
