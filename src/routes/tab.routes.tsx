import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Tickets} from '../screens/Tickets';
import {Account} from '../screens/Account';
import {CreateEvents} from '../screens/CreateEvents';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0076CB',
      }}>
      <Screen
        name="Eventos "
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => {
            return <FontAwesome size={size} color={color} name="star" />;
          },
        }}
      />
      <Screen
        name="Ingressos"
        component={Tickets}
        options={{
          tabBarIcon: ({size, color}) => {
            return <FontAwesome size={size} color={color} name="ticket" />;
          },
        }}
      />
      <Screen
        name="Criar evemtos"
        component={CreateEvents}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons
                size={size}
                color={color}
                name="party-popper"
              />
            );
          },
        }}
      />
      <Screen
        name="Conta"
        component={Account}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons
                size={size}
                color={color}
                name="account"
              />
            );
          },
        }}
      />
    </Navigator>
  );
}
