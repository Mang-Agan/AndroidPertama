import React from "react";
import { View,Image,Text } from "react-native";

const FlexBox = () => {
    return (
        

        <View>
            <View style={{marginTop:20,flexDirection:'row', justifyContent:'space-around'}}>
                <View style={{width:50, height:50, backgroundColor:'red'}}></View>
                <View style={{width:50, height:50, backgroundColor:'green'}}></View>
                <View style={{width:50, height:50, backgroundColor:'yellow'}}></View>
                <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
            </View>

            <View style={{marginTop:20, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                <Image source={{ uri: 'https://yt3.ggpht.com/yti/AJo0G0mYyFqiG0Nfy_vdmUAy4KE45JXMGi8DcI4o6DFZ=s88-c-k-c0x00ffffff-no-rj-mo' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                
                <View>
                    <Text style={{fontSize:20, fontWeight:'600'}}>Galih Setia Adi Pradana</Text>
                    <Text style={{fontSize:15, fontWeight:'600'}}>100 jt Subscriber</Text>
                </View>
            </View>
        
        </View>
    )
}

export default FlexBox;