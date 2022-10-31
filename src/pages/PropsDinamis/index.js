import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import Gambar_1 from "../../assets/images/gambar_1.jpg";
import Gambar_2 from "../../assets/images/gambar_2.jpg";
import Gambar_3 from "../../assets/images/gambar_3.jpg";
import Gambar_4 from "../../assets/images/gambar_4.jpg";
import Gambar_5 from "../../assets/images/gambar_5.jpg";
import Laptop from "../../assets/images/laptop.jpg";

const Story = (props) => {
    return (
        <View style={{ marginRight: 20 }}>
            <Image source={props.image} style={{ width: 75, height: 75, borderRadius: 75 / 2 }} />
            <Text style={{maxWidth:75, textAlign:'center'}}>{props.text}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', marginBottom:20 }}>Latihan Props Dinamis</Text>
            <ScrollView horizontal>
                <View style={{flexDirection:'row'}}>
                    <Story image={Gambar_1} text={'Gambar satu'} />
                    <Story image={Gambar_2} text={'Gambar dua'}/>
                    <Story image={Gambar_3} text={'Gambar tiga'}/>
                    <Story image={Gambar_4} text={'Gambar empat'}/>
                    <Story image={Gambar_5} text={'Gambar lima'}/>
                    <Story image={Laptop} text={'Gambar Laptop'}/>
                </View>
            </ScrollView>
            
            
        </View>
    )
}


export default PropsDinamis;