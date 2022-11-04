import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from "react-native";
import Home from "./Home/index";
import Login from "./Login";
import DashboardRoute from "./DashboardRoute";
import DashboardPage from "./pages/Dashboard";

const AbsensiApp = () => {
     const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Home" component={Home} />
                 <Stack.Screen name="Login" component={Login} />
                 <Stack.Screen name="DashboardRoute" component={DashboardRoute} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AbsensiApp;