import React from "react";

import { View,ScrollView } from "react-native";
import StylingComponent from "./pages/StylingComponent";
import SimpleComponent from "./pages/SimpleComponent";
import FlexBox from "./pages/FLexBox";
import Position from "./pages/Position";
import PropsDinamis from "./pages/PropsDinamis";
import SetCounter from "./pages/StateDinamis";
import KomunikasiComponent from "./pages/KomunikasiComponent";
import AndroidSvg from "./pages/AndroidSvg";
import CallApi from "./pages/CallApiVanilla";
import CallApiAxios from "./pages/CallApiAxios";
import HitApi from "./pages/LocalApi";
import TestCamera from "./pages/Camera";
import TestLocation from "./pages/Location";
import FaceDetection from "./pages/FaceDetection";

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
        {/* <KomunikasiComponent /> */}
        {/* <AndroidSvg /> */}
        {/* <CallApi /> */}
        {/* <CallApiAxios /> */}
        {/* <HitApi /> */}
        {/* <TestCamera /> */}
        {/* <TestLocation /> */}
        <FaceDetection />
      </ScrollView>
    </View>
  )
}

export default App;