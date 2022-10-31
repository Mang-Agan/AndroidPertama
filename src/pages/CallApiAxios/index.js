import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import axios from "axios";

const CallApiAxios = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [dataPost, setDataPost] = useState({
        name: "",
        job:""
    });


    const getData = () => {
        //  fetch('https://reqres.in/api/users?page=2')
        //     .then(response => response.json())
        //      .then(json => {
        //         //  console.log(json.data);
        //          setDataUsers(json.data);
        //          console.log(dataUsers[0]);
        //      })

        axios.get('https://reqres.in/api/users?page=2').then(result => {
              setDataUsers(result.data.data);
        }).catch((er) => alert(er));
    }

    const delData = () => {
        setDataUsers([]);
    }
    const postData = () => {
        axios.post('https://reqres.in/api/users', {
            name: "morpheus",
            job: "leader"
        }).then((result) => {
            setDataPost({
                name: result.data.name,
                job:result.data.job
            });
        }).catch((e) => alert(e))
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
            <Button title="Post Data" onPress={postData}></Button>
            {dataPost.name == "" ? null :  <Text>{dataPost.name}</Text>}
             <Button title="Del Data" onPress={delData}></Button>
        </View>
    )
}

export default CallApiAxios;