/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Planets';
import ShipsScreen from '../../screens/Ships';
import People from '../../screens/People';
import FilmsScreen from '../../screens/Films';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Planetas"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="ios-planet-outline"
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: '#502F4C',
                    tabBarInactiveTintColor: 'gray',
                }}
            />
            <Tab.Screen
                name="Personajes"
                component={People}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="ios-people-outline"
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: '#502F4C',
                    tabBarInactiveTintColor: 'gray',
                }}
            />
            <Tab.Screen
                name="Naves"
                component={ShipsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialComIcon
                            name={'ship-wheel'}
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: '#502F4C',
                    tabBarInactiveTintColor: 'gray',
                }}
            />
            <Tab.Screen
                name="Peliculas"
                component={FilmsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name={'ios-film-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: '#502F4C',
                    tabBarInactiveTintColor: 'gray',
                }}
            />
        </Tab.Navigator>
    );
}
