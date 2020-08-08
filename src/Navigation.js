import React from 'react'

import { AntDesign , Ionicons , Entypo , Foundation } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/Home/index'

import Button from './components/Button/index'
import ProfileButton from './components/User-Profile-Button/index'

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    borderTopColor: 'rgba(255,255,255, 0.2)',

                },
                activeTintColor: '#000',
                tabStyle: {
                    paddingTop: 15
                }
            }}            
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    title: '',
                    tabBarIcon: ({ size , color }) => <Foundation name="home" size={size} color={color} />,
                }}

            />
            <Tab.Screen 
                name="Search"
                component={HomeScreen}
                options={{
                    title: '',
                    tabBarIcon: ({ size , color }) => <AntDesign name="search1" size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Instagram"
                component={HomeScreen}
                options={{
                    title: '',
                    tabBarIcon: ({ size , color }) => (
                        <Button />
                    )
                    
                }}
            />
            <Tab.Screen 
                name="Activity"
                component={HomeScreen}
                options={{
                    title: '',
                    tabBarIcon: ({ size , color }) => <AntDesign name="hearto" size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={HomeScreen}
                options={{
                    title: '',
                    tabBarIcon: ({ size , color }) => (
                        <ProfileButton />
                    )
                }}
            />
        </Tab.Navigator>
    )
}