import React from "react";

import { View,ScrollView } from "react-native";
import StylingComponent from "./pages/StylingComponent";
import SimpleComponent from "./pages/SimpleComponent";
import FlexBox from "./pages/FLexBox";
import Position from "./pages/Position";
import PropsDinamis from "./pages/PropsDinamis";
import SetCounter from "./pages/StateDinamis";
import KomunikasiComponent from "./pages/KomunikasiComponent";

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <StylingComponent /> */}
        {/* <SimpleComponent />  */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <SetCounter /> */}
        <KomunikasiComponent />
        <KomunikasiComponent />
      </ScrollView>
    </View>
  )
}

export default App;