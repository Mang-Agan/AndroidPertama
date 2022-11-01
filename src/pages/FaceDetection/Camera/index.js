import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import FaceDetection, { FaceDetectorContourMode, FaceDetectorLandmarkMode, FaceContourType } from "react-native-face-detection";


const TestCamera = () => {
    const [camera, setCamera] = useState(null);
    
    const openCamera = () => {
        const options = {
            mediaType : 'photo',
            quality:0.1
        }

        launchCamera(options, async function (res) {
            if (res.didCancel) {
                alert('canceled');
            } else if (res.errorCode) {
                alert(res.errorMessage)
            } else {
                const data = res.assets;
                setCamera(data[0].uri)
            }
        });
       
    }

    return (
        <View>
            <Text style={{ textAlign: 'center' }}>Face Detection</Text>
            <Pressable style={{textAlign:'center'}}>
                <Text
                    style={{ padding: 5, backgroundColor: 'skyblue', width: 100 }}
                    onPress={openCamera}
                >Open Camera</Text>
            </Pressable>

            {camera == null ? null :
                <Image source={{uri:camera}} style={{width:100,height:100}}></Image>
            }

        </View>
    )
}

export default TestCamera;