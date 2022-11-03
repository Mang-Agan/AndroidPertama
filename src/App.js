import React from "react";

import { View,ScrollView, Dimensions, SafeAreaView } from "react-native";
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
import AbsensiApp from "./pages/AbsensiApp";

const App = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View>
      <ScrollView>
        <SafeAreaView style={{ backgroundColor: 'orange', height: height + 30, width: width, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <AbsensiApp />
        </SafeAreaView>
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
        {/* <FaceDetection /> */}
      </ScrollView>
    </View>
  )
}

export default App;