import React, { useEffect, useState } from "react";
import GetLocation from 'react-native-get-location'
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const TestLocation = () => {

    const [data_location, setData_Location] = useState({
        lat: "",
        long: "",
        time: "",
        accuracy: "",
        altitude:""
    });

    useEffect(() => {
        requestLocationPermission()
    }, []);

    const getLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            setData_Location({
                accuracy: location.accuracy,
                lat: location.latitude,
                long: location.longitude,
                time: location.time,
                altitude:location.altitude
            });
            console.log(data_location);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    }

    const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Izinkan Akses Lokasi ?",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
    } else {
      console.log("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} />
  </View>
    );
    
    return (
        <View>
            <Text style={{ textAlign: 'center' }}>Latihan Location</Text>
            <Text>Latitude : {data_location.lat}</Text>
            <Text>Longitude : {data_location.long}</Text>
            <Text>Altitude : {data_location.altitude}</Text>
            <Text>Time : {data_location.time}</Text>
        </View>
    )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

}
export default TestLocation;