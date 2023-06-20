import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconHomeActive from '../../assets/img/Home/homeActive.svg';
import IconHome from '../../assets/img/Home/home.svg';
import IconAkunActive from '../../assets/img/Home/akun.svg';
import IconAkun from '../../assets/img/Home/akunActive.svg';
import IconPesananActive from '../../assets/img/Home/pesananActive.svg';
import IconPesanan from '../../assets/img/Home/pesanan.svg';

export default class TabsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { label, isFocused, onLongPress, onPress, index } = this.props;
        console.log(index);
        const Icon = () => {
            if (label === "Home") return isFocused ? <IconHomeActive /> : <IconHome />
            if (label === "Pesanan") return isFocused ? <IconPesananActive /> : <IconPesanan />
            if (label === "Akun") return isFocused ? <IconAkunActive /> : <IconAkun />

            return <IconHome />
        }
        const styles = StyleSheet.create({
            container: {
                alignItems: 'center'
            }
        });
        return (
            <TouchableOpacity
                key={this.props.index}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.container}>
                <Icon key={this.props.index} />
                {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                    {label}
                </Text> */}
            </TouchableOpacity>
        )
    }
}