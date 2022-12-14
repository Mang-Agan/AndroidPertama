import React, { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import axios from "axios";

const HitApi = () => {

    useEffect(() => {
        readData();
    }, []);
    
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [bidang, setBidang] = useState("");
    const [button, setButton] = useState("Simpan");
    const [users, setUsers] = useState([]);
    const [users_id, setUsers_id] = useState("");

    const postData = () => {
        let data = {
            nama:nama,
            email:email,
            bidang:bidang,
        }

        if (button == "Simpan") {
            axios.post('http://10.0.2.2:3005/users', data).then((result) => {
                alert("success");
                setNama("");
                setEmail("");
                setBidang("");

                readData();
            }).catch((er) => {
                alert('error');
            });
        } else {
            // alert(users_id);
            axios.put(`http://10.0.2.2:3005/users/${users_id}`, data).then((result) => {
                alert("success");
                setNama("");
                setEmail("");
                setBidang("");

                 setButton("Simpan");
                readData();
            }).catch((er) => {
                alert('error update');
            });
        }
        
       
    }

    const readData = () => {
        axios.get('http://10.0.2.2:3005/users').then((result) => {
            setUsers(result.data);
        }).catch((er) => {
            console.log(er); 
        });
    }

    const updateData = (props) => {
        setNama(props.nama);
        setEmail(props.email);
        setBidang(props.bidang);
        setUsers_id(props.id);

        setButton('Update');
    }

    return (
        <View style={{ padding: 20 }}>
           
                <View>
                    <TextInput style={StylingApi.Input} placeholder="Name" value={nama} onChangeText={(value)=> setNama(value)}></TextInput>
                    <TextInput style={StylingApi.Input} placeholder="Email" value={email} onChangeText={(value)=> setEmail(value)}></TextInput>
                    <TextInput style={StylingApi.Input} placeholder="Bidang" value={bidang} onChangeText={(value)=> setBidang(value)}></TextInput>
                </View>
            
            <View style={{marginTop:20}}>
                <Button title={button} onPress={postData}></Button>
            </View>
            <View style={{height:2, backgroundColor:'black', marginTop:5, marginBottom:5}}></View>
            <Item users={users} readData={readData} updateData={()=>updateData(users[0])} />
        </View>
    )
}

const Item = (props) => {
    const deleteData = (id) => {
       
        axios.delete(`http://10.0.2.2:3005/users/${id}`).then((result) => {
            alert('ok');
            props.readData();
        }).catch((er) => {
            alert('not ok');
            props.readData();
        });
    }

    const Actions = (props) => {
        return (
            <View>
                <Text style={{ backgroundColor: 'blue', padding: 5, color: 'white' }} onPress={() => {
                    props.updateData(props.users)
                }}>Update</Text>
                <Text style={{ backgroundColor: 'red', padding: 5, color: 'white' }} onPress={() => {
                    deleteData(props.id);
                }}>Hapus</Text>
            </View>
        )
    }
    return (
        <View>
            {props.users.length > 0 ? 
                props.users.map((item, index) => {
                    return (
                        <View style={{ margin: 10 }} key={index}> 
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text>{item.nama}</Text>
                                    <Text>{item.email}</Text>
                                    <Text>{item.bidang}</Text>
                                </View>
                                <Actions id={item.id} users={props.users} updateData={props.updateData} />
                            </View>    
                           
                        </View>
                    )
                })
           :
           <View>     
               <Text style={{textAlign:'center'}}>Belum Ada Data</Text>
           </View>
           }
        </View>
    )
}

const StylingApi = StyleSheet.create({
    Input: {
        borderWidth: 1,
        marginBottom1: 12,
        borderRadius: 25,
        marginTop: 10,
        paddingHorizontal: 18,
        height:40
    },
    btnSimpan: {
        borderRadius: 25,
        marginTop:10
    }
});

export default HitApi;