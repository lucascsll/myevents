import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {DetailsTickets} from '../screens/DetailsTickets';
import {Account} from '../screens/Account';
import {Tickets} from '../screens/Tickets';
import {TabRoutes} from './tab.routes';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="Tickets" component={Tickets} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="DetailsTickets" component={DetailsTickets} />
    </Stack.Navigator>
  );
}

export function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>
  );
}
