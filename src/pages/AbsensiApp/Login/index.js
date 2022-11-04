import React from "react";
import { Button,Text, TextInput, View, Dimensions, Pressable, TouchableOpacity } from "react-native";

class Login extends React.Component{
    constructor(props) {
        super(props);
        // console.log(props.navigation)
        this.state = {
            Login: { email: '', password: '' },
            navigation:props.navigation
        }
        this.checkLogin = this.checkLogin.bind(this);
        this.handleCleared = this.handleCleared.bind(this);
    }

    checkLogin() {
        if (this.state.Login.email == '' && this.state.Login.password == '') {
           alert('username dan password wajib di isi')
        } else if(this.state.Login.email == 'admin' && this.state.Login.password == 'admin'){
            this.handleCleared();
            this.state.navigation.navigate('DashboardRoute', { data: this.state.Login });
        } else {
            alert('username dan password salah');
        }
    }

    handleCleared() {
        let login = this.state.Login;
        login.email = "";
        login.password = "";
        this.setState({ login });
    }

    render() {

        const width = Dimensions.get('window').width;
        const height = Dimensions.get('window').height;
        return (
            <View>
                <View style={{paddingLeft:30,paddingRight:30, height:height + 30, backgroundColor:'orange',justifyContent:'center'}}>
                    <TextInput style={{ backgroundColor: '#35e865', borderRadius: 25, paddingLeft: 20, marginBottom: 20 }} value={this.state.Login.email} placeholder="Email" onChangeText={(e) => {
                            let email = this.state.Login;
                            email.email = e
                            this.setState({ email });
                    }}></TextInput>
                    <TextInput style={{ backgroundColor: '#35e865', borderRadius: 25, paddingLeft: 20 }} placeholder="Password" value={this.state.Login.password} onChangeText={(e) => {
                        let password = this.state.Login;
                        password.password = e;
                            this.setState({ password });
                    }}></TextInput>
                    
                    <View style={{marginTop:30, flexDirection:'row'}}>
                        <TouchableOpacity style={{ marginRight: 10, backgroundColor: '#35e865', padding: 15, width: 100, flexDirection: 'row', justifyContent: 'center', borderRadius: 25, }} onPress={() => {
                        //    this.state.navigation.navigate('Dashboard',{data:this.state.Login})
                            this.checkLogin();
                        }}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#35e865', padding:15, width:100, flexDirection:'row', justifyContent:'center', borderRadius:25,}}>
                            <Text>SignIn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login;