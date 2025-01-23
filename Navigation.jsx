import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import StackScreen from "./src/screens/StackScreen";
import PersonalScreen from "./src/screens/PersonalScreen";
// import TablePersonalScreen from "./src/screens/TablePersonalScreen";

const drawer = createDrawerNavigator();
function MyDrawer () {
    return(
    <drawer.Navigator
        initialRouteName="Home"
    >
        <drawer.Screen name="Home" component={HomeScreen} />
        <drawer.Screen name="Stack" component={StackScreen} />
        <drawer.Screen name="Settings" component={SettingsScreen} />
        <drawer.Screen name="Personal" component={PersonalScreen} />
    </drawer.Navigator>
    )
}

export default function Navigation () {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}

