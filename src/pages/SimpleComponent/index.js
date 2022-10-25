import React from "react"
import { View,Text,TextInput,Image } from "react-native"

const SimpleComponent = () => {
  return (  
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: 'red' }}></View>
      <Name />
      <Text>Hello Word</Text>
      <Text>Hello Guys</Text>
      <Text>Hello Cuy</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <CobaTest />
      <Animal/>
  </View>
  )
  
}

const Name = () => {
  return (
    <Text>Galih Setia Adi P</Text>
  )
}

const Photo = () => {
  return (
    <Image source={{uri:'https://placeimg.com/100/100/tech'}} style={{width:100,height:100}}></Image>
  )
}

class CobaTest extends React.Component {
  render() {
    return (
      <Text>Ini Di Buat Dari Class Component</Text>
    )
  }
}

class Animal extends React.Component {
  render() {
    return (
      <>
        <Image source={{uri:'https://placeimg.com/100/100/animals'}} style={{width:100,height:100, borderRadius:50}}></Image>
        <Text>Ini hewan</Text>
      </>
    )
  }
}

export default SimpleComponent;