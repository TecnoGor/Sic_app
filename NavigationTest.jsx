import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Screens

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import StackScreen from "./src/screens/StackScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStacks() {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
        >
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
            />
            <Stack.Screen 
                name="Stack" 
                component={StackScreen} 
            />
        </Stack.Navigator>
    )
}

function MyTabs() {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "purple",
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStacks}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={30} color={color} />
                    ),
                    tabBarBadge: 10,
                    headerShown: false
                }} 
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Configuración",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="brightness-5" size={30} color={color} />
                    ),
                    tabBarBadge: 3,
                }} 
            />
        </Tab.Navigator>

    );
}

export default function Navigation() {
    return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
    )

}


