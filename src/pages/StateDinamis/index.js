import React, { useState } from "react";
import { View,Text, Button } from "react-native";

const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <View>
            <Text>{number}</Text>
            <Button title="Tambah" onPress={()=> setNumber(number + 1)}></Button>
        </View>
    )
}

const SetCounter = () => {
    return (
        <View>
            <Counter/>
            <Counter/>
        </View>
    )
}

export default SetCounter;