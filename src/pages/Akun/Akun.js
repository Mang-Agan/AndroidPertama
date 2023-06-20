import React from "react";
import { StyleSheet, Text } from "react-native";
import { Logo } from "../../assets";
import { View, ImageBackground, Image } from "react-native";

export default class Akun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const styles = StyleSheet.create({
            backGround: {
                display: 'flex',
                width: '50%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
        return (
            <View>
                <ImageBackground source={Logo} style={styles.backGround}></ImageBackground>
                <Text>Akunn</Text>
            </View>

        )
    }
}