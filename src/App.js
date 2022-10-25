import React from "react";

import { View,ScrollView } from "react-native";
import StylingComponent from "./pages/StylingComponent";
import SimpleComponent from "./pages/SimpleComponent";
import FlexBox from "./pages/FLexBox";
import Position from "./pages/Position";
import PropsDinamis from "./pages/PropsDinamis";
import SetCounter from "./pages/StateDinamis";

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <StylingComponent />
        <SimpleComponent /> 
        <FlexBox />
        <Position /> */}
        {/* <PropsDinamis /> */}
        <SetCounter />
      </ScrollView>
    </View>
  )
}

export default App;