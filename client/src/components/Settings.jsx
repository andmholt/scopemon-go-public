import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import user from "../../assets/user.png";
import home from "../../assets/home.png";
// import charlie from "../../assets/charlie.png";
import camera from "../../assets/camera.png";
//import { getUser } from "../services/user";
import img3748 from '../../assets/IMG_3748.jpg';
import { ScrollView } from "react-native-gesture-handler";
import leftArrow from '../../assets/left-arrow.png';
import circle from "../../assets/circle.png";
import uploadImg from "../../assets/uploadImg.png";
import CameraView from './CameraView.jsx'
import AsyncStorage from '@react-native-async-storage/async-storage';


// const [name, setName] = React.useState("");
// useEffect(() => {
//   const getUseraData = async () => {
//     const userData = await getUser("andrew");
//     setName(userData.name);
//   };
//   getUseraData();
//   console.log(name);
// });


const Settings = (props, { navigation }) => {
    const [showCamera, setShowCamera] = React.useState(false)

    const logOut = async () => {
        await AsyncStorage.removeItem('userID')
        props.loginCallback()
        console.log("logout successful!!")
    }

  const [name, setName] = React.useState("");
  useEffect(() => {
    const getUseraData = async () => {
      //const userData = await getUser("andrew");
      //setName(userData.name);
    };
    getUseraData();
    console.log(`user is named "${name}"`);
  }, ([]));

  if (showCamera){
    return <CameraView/>
  }

  else{
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.leftArrowBox}
            onPress={() => setShowCamera (true)}
            >
            <Image source={leftArrow} style={styles.leftArrow} />
            </TouchableOpacity>
            <View style={styles.center}>
                <Text style={styles.username}>Settings</Text>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.label}>username</Text>
            </View>
            <View style={styles.uploadCont}>
                <Image source={uploadImg} style={styles.upload}/>
            </View>
            <TouchableOpacity
            style={styles.button}
            onPress={logOut}
            >
            <Text style={styles.buttonText} >Log Out</Text>
            </TouchableOpacity>
        </View>
    );
    };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#221132',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  center: {
    alignItems: "center",
    paddingTop: 60,
    width: 150,
  },
  username: {
    fontSize: 30,
    color: 'white',
  },
  userInfo: {
    // backgroundColor: "#808080",
    paddingTop: 20,
    marginBottom: 5,
    width: '100%',
    flex: 1,
  },
  userInfoText: {
    fontSize: 30,
    color: 'white',
  },
  toolmenu: {
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // backgroundColor: "#808080",
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    fontWeight: 'bold',
    borderRadius: 50000,
    padding: 10,
    marginTop: 30,
    width: '50%',
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  uploadCont: {
    marginTop: 10,
    marginBottom: 75,
    backgroundColor: 'white',
    width: 350,
  },
  upload:{
    width: '100%',
  },
  inputView: {
    width: '100%',
    color: 'white'
  },
  label: {
    paddingTop: 100,
    marginLeft: 20,
    color: 'white',
    fontSize: 30,
  },
  leftArrowBox: {
    position: 'absolute',
    left: 10,
    top: 55,
    height: 50,
    width: 100,
    alignItems: 'center',
  },
  leftArrow: {
    position: 'absolute',
    left: 5,
    top: 0,
    height: 50,
    width: 100,
    padding: 0,
  }
});

export default Settings;
