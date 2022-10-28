import React, { useState } from "react";

import { View, Text, Image,StyleSheet, TouchableOpacity } from "react-native";
import Laptop from "../../assets/images/laptop.jpg";

const Produk = (props) => {
    return (
      
        <View>
            <Text style={Styling.Text}>StylingComponent</Text>
            <Card onButtonPress={props} />
        </View>
      
    )
}

const Styling = StyleSheet.create({
  Text: {
    color: 'red',
    marginTop: 20,
    marginLeft:20
  },

  Outer_1: {
    width: 250,
    backgroundColor: 'red',
    height:500
  }
});

const Card = (props) => {
  return (  
    <View style={{padding:12, backgroundColor:'orange', marginTop:20,marginLeft:20, width:212, borderRadius:8}}>
      <Image source={Laptop} style={{ width: 188, height: 107, borderRadius: 8 }} />
      <Text style={{ marginTop: 20, fontWeight: 'bold', color: 'black', fontSize:14 }}>New Macbook Pro 2019</Text>
      <Text style={{marginTop:10,color:'red', fontSize:12, fontWeight:'bold'}}>Rp. 25.000.000,-</Text>
      <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 'bold', color: 'black' }}>Jakarta Barat</Text>
          <TouchableOpacity onPress={() => props.onButtonPress()}>        
            <View style={{marginTop:12, backgroundColor:'green', paddingVertical:5, borderRadius:12}}>
                <Text style={{textAlign:'center', color:'white', fontSize:12,fontWeight:'600'}}>Beli</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Card;