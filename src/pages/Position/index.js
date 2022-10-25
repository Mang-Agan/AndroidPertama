import React from "react";
import { View,Image, Text, StyleSheet } from "react-native";

const Position = () => {
    return (
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={CartStyle.boxStyle}>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Cart</Text>
                <View style={CartStyle.Absolute}>
                    <Text >10</Text>
                </View>
            </View>
        </View>
    )
}

const CartStyle = StyleSheet.create({
    boxStyle: {
        width: 100,
        height: 100,
        borderWidth: 1,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2,
        position:'relative'
    },
    Absolute: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 30 / 2,
        backgroundColor:'green',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right:0
    }
})

export default Position;