import React from "react";
import { View, Image, Text, TextInput } from "react-native";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const FlexBox = () => {
    return (

        <View>
            <AppBar title="Sober">
            </AppBar>

            <TextInput
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginLeft: 10, marginRight: 10, marginTop: 10 }}
                placeholder="Cari..."

            />

            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image source={{ uri: 'https://yt3.ggpht.com/yti/AJo0G0mYyFqiG0Nfy_vdmUAy4KE45JXMGi8DcI4o6DFZ=s88-c-k-c0x00ffffff-no-rj-mo' }} style={{ width: 100, height: 100, borderRadius: 50 }} />

                <View>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Galih Setia Adi Pradana</Text>
                    <Text style={{ fontSize: 15, fontWeight: '600' }}>100 jt Subscriber</Text>
                </View>
            </View>

            <Tab.Navigator>
                <Tab.Screen name="Home" />
                <Tab.Screen name="Settings" />
            </Tab.Navigator>

        </View>
    )
}

export default FlexBox;