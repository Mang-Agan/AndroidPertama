import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { firebase } from '@react-native-firebase/app';
import Img_1 from "../../../assets/images/portrait.png";
import FaceSDK, { Enum, FaceCaptureResponse, LivenessResponse, MatchFacesResponse, MatchFacesRequest, MatchFacesImage, MatchFacesSimilarityThresholdSplit } from '@regulaforensics/react-native-face-api'


const TestCamera = () => {
  const [image, setImage] = useState("");
  const openCamera = () => {
    FaceSDK.presentFaceCaptureActivity(result => {
        setImage(FaceCaptureResponse.fromJson(JSON.parse(result)).image.bitmap, Enum.ImageType.LIVE)
      
      console.log(image);
      }, e => { })
  }
  return (
    <View style={{flexDirection:'row', justifyContent:'center', height:500, alignItems:'center'}}>
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', width: 150, height: 50 }} onPress={() => {
        openCamera();
      }}>
        <Text>Press Camera</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TestCamera;
