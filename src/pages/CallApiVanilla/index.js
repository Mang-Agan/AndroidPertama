import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const CallApi = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const getData = () => {
         fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
             .then(json => {
                //  console.log(json.data);
                 setDataUsers(json.data);
                 console.log(dataUsers[0]);
             })
    
    }

    const delData = () => {
        setDataUsers([]);
    }
    return (
        <View>
            {/* <Text>Name : {dataUsers.first_name} {dataUsers.last_name}</Text> */}
            <Button title="Get Data" onPress={getData}></Button>
            {dataUsers.length > 0 ? dataUsers.map((item, index) => {
                return (
                    <Text key={index}>{item.email}</Text>
               )
            }) : null}
             <Button title="Del Data" onPress={delData}></Button>
        </View>
    )
}

export default CallApi;