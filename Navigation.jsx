import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import StackScreen from "./src/screens/StackScreen";
import PersonalScreen from "./src/screens/PersonalScreen";
import CarnetDesignScreen from "./src/screens/CarnetsDesignScreen";
import UsersScreen from "./src/screens/UsersScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

import { AuthContext, AuthProvider } from "./src/context/AuthContext";
// import TablePersonalScreen from "./src/screens/TablePersonalScreen";

const drawer = createDrawerNavigator();
function MyDrawer () {

    const { isAuthenticated } = React.useContext(AuthContext);
    

    return(
    <drawer.Navigator
    >
        {isAuthenticated ? (
            <>
                <drawer.Screen name="Home" component={HomeScreen} />
                <drawer.Screen name="Stack" component={StackScreen} />
                <drawer.Screen name="Settings" component={SettingsScreen} />
                <drawer.Screen name="Personal" component={PersonalScreen} />
                <drawer.Screen name="CarnetsDesign" component={CarnetDesignScreen} />
                <drawer.Screen name="Users" title='Usuarios' component={UsersScreen} />
            </>
        ) : (
            <>
                <drawer.Screen name="Login" component={LoginScreen} />
                <drawer.Screen name="Register" component={RegisterScreen} />
            </>
        )}
        
    </drawer.Navigator>
    )
}

export default function Navigation () {
    return (
        <AuthProvider>

        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
        </AuthProvider>
    )
}

