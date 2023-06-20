import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text } from "react-native";
import Router from "./router";

const App = () => {
  // const width = Dimensions.get("window").width;
  // const height = Dimensions.get("window").height;

  return (

    <NavigationContainer>
      <Router />
    </NavigationContainer>

  )
}

export default App;