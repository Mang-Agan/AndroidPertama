import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Logo } from "../../assets";

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        let navigation = this.props.navigation;
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000);
    }

    render() {
        const styles = StyleSheet.create({
            background: {
                backgroundColor: '#0dd9fe',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            },
            text: {
                color: 'white'
            },

            logo: {
                width: '10%',
                height: '10%'
            }
        });
        return (
            <View style={styles.background}>
                <Image source={Logo} style={styles.logo}></Image>
                <Text style={styles.text}>Antar Laundy</Text>
            </View>
        )
    }
}