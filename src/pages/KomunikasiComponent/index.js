import React, { useState } from "react";
import { TouchableHighlight, View } from "react-native";
import Cart from "../../components/Cart/Cart";
import Card from "../../components/Produk/Produk";

const KomunikasiComponent = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Cart countProduk={number} />
            <Card onButtonPress={()=> setNumber(number + 1)} />
        </View>
    )
}

export default KomunikasiComponent;