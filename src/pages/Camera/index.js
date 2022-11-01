import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const TestCamera = () => {
    const [camera, setCamera] = useState(null);
    const openCamera = () => {
        const options = {
            mediaType : 'photo',
            quality:0.1
        }

        launchCamera(options, function (res) {
            if (res.didCancel) {
                alert('canceled');
            } else if (res.errorCode) {
                alert(res.errorMessage)
            } else {
                const data = res.assets;
                console.log(data);
                setCamera(data[0].uri)
            }
        });
       
    }

    return (
        <View>
            <Text style={{ textAlign: 'center' }}>Test Camera</Text>
            <Pressable style={{textAlign:'center'}}>
                <Text
                    style={{ padding: 5, backgroundColor: 'skyblue', width: 100 }}
                    onPress={openCamera}
                >Open Camera</Text>
            </Pressable>

            {camera == null ? null :
                <Image source={{uri:camera}} style={{width:100,height:100}}>
                
                </Image>
            }

        </View>
    )
}

export default TestCamera;