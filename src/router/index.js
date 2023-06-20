import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from "../pages/Home/Home";
import Akun from "../pages/Akun/Akun";
import Pesanan from "../pages/Pesanan/Pesanan";
import Splash from "../pages/Splash/Splash";
import BottomTabs from "../components/BottomTabs/BottomTabs";

export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const MainApp = () => {
            return (
                <Tab.Navigator tabBar={props => <BottomTabs {...props} />}>
                    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Tab.Screen name="Pesanan" component={Pesanan} options={{ headerShown: false }} />
                    <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }} />
                </Tab.Navigator>
            );
        }
        return (
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
}