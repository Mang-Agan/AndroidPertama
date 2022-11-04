import React, { useState,useRef } from "react";
import { SafeAreaView, Text, View, Dimensions } from "react-native";
import FaceSDK, { Enum, FaceCaptureResponse, LivenessResponse, MatchFacesResponse, MatchFacesRequest, MatchFacesImage, MatchFacesSimilarityThresholdSplit } from '@regulaforensics/react-native-face-api';

const Home = ({ navigation }) => {
    const [face_detection, setFaceDetection] = useState("");
    const [image, setImage] = useState(""); 
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;


    const openCamera = () => {
        FaceSDK.presentFaceCaptureActivity(result => {
            setImage({ image: FaceCaptureResponse.fromJson(JSON.parse(result)).image.bitmap },Enum.ImageType.LIVE);
        }, e => console.log(e))
    }   
    

    return (
        <View style={{ backgroundColor: 'orange', height: height + 30, width: width, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{backgroundColor:'purple', padding:20,width:200, flexDirection:"row", justifyContent:'center', alignItems:'center',borderRadius:25, marginBottom:20}}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} onPress={() => {
                    navigation.navigate('Login');
            }}>Login</Text>
                </View>
                <View style={{backgroundColor:'purple', padding:20,width:200, flexDirection:"row", justifyContent:'center', alignItems:'center',borderRadius:25}}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} onPress={() => {
                    openCamera();
                    }}>Face Detection</Text>
                </View>
        </View>
    )
}

export default Home;