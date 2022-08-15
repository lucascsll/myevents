import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Tickets} from '../screens/Tickets';
import {Account} from '../screens/Account';

const {Navigator, Screen} = createBottomTabNavigator();
export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Ingressos" component={Tickets} />
      <Screen name="Conta" component={Account} />
    </Navigator>
  );
}
