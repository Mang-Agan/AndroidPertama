import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Home";
import ProfilPages from "../pages/Profil";
import DashboardPage from "../pages/Dashboard";

const Tab = createBottomTabNavigator();
const DashboardRoute = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="DashboardPage" component={DashboardPage} />
            <Tab.Screen name="Profil" component={ProfilPages} />
        </Tab.Navigator>
    )
}

export default DashboardRoute;