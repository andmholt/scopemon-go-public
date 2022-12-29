// code for PROFILE (COMPLETE DO NOT TOUCHHHH)
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
import { getUserFromID } from "../services/user";
import img3748 from '../../assets/IMG_3748.jpg';
import { ScrollView } from "react-native-gesture-handler";
import downArrow from '../../assets/down-arrow.png';
import logoFull from '../../assets/logoFull.png';

// const [name, setName] = React.useState("");
// useEffect(() => {
//   const getUseraData = async () => {
//     const userData = await getUser("andrew");
//     setName(userData.name);
//   };
//   getUseraData();
//   console.log(name);
// });

const Greeting = (props) => {
  return (
    <View>
      <Text style={styles.greetingText}>{props.name}</Text>
    </View>
  );
};

const charlie = {
  uri: "https://res.cloudinary.com/dwcrti1cs/image/upload/v1668317288/scopemon-go/captures/IMG_3748_lmcvuj.jpg",
};

const Profile = (props) => {

  const [userData, setUserData] = React.useState(null)

  useEffect(() => {
    const getUseraData = async () => {
      setUserData(await getUserFromID(props.userID));
    }

    // if user data is null, get user data
    console.log('USER: ', userData)
    if (!userData) {
      getUseraData()
    }
  });

  trophies = null
  console.log('kjhfhgfhgfj', userData)
  if (userData != null && userData.verifiedCaptures != null) {
    trophies = userData.verifiedCaptures.map((userID) =>
      <View style={styles.trophyLeft} key={userID}>
        <Image source={charlie} style={styles.charlieL}/>
        <Text style={styles.trophyTextL}>
          Charlie1
        </Text>
    </View>)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.left}>
          <View style={styles.smallLogoImgView}>
            <Image style={styles.logoImg} source={logoFull}></Image>
          </View>
        </View>
        <Greeting name="Scoper Name" />
        <View style={styles.center}>
          <View style={styles.userImgView}>
            <Image style={styles.userImg} source={img3748}></Image>
          </View>
          <Text style={styles.username}>{userData?userData.username:'username'}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>
            Has Spotted......................0
          </Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>
            Spotted By......................0
          </Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>
            Leaderboard....................100
          </Text>
        </View>
        <View style={styles.arrowBox}>
          <Image source={downArrow} style={styles.arrow} />
        </View>
        <View style={styles.trophy}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              Trophy Wall
            </Text>
          </View>
          {trophies}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#221132',
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  left: {
    alignItems: "left",
    paddingTop: 55,
  },
  smallLogoImgView: {
    display: 'flex',
    height: 40,
    width: 110,
    marginBottom: 20,
  },
  logoImg: {
    maxHeight: '100%',
    maxWidth: '100%',
    resizeMode: 'cover',
    borderRadius: 0
  },
  center: {
    alignItems: "center",
    paddingTop: 15,
    marginTop: 50,
  },
  greetingText: {
    marginTop: 5,
    fontSize: 40,
    color: 'white'
  },
  userImgView: {
    display: 'flex',
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  userImg: {
    maxHeight: '100%',
    maxWidth: '100%',
    resizeMode: 'cover',
    borderRadius: 50
  },
  username: {
    fontSize: 30,
    color: 'white',
  },
  userInfo: {
    // backgroundColor: "#808080",
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    paddingTop: 20,
    marginBottom: 20,
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
  touchable: {},
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  imageCam: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  trophy: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    paddingTop: 20,
    marginBottom: 20,
    height: 800,
    // adjust height by deleting it
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trophyLeft: {
    flex: 1,
    height: 30,
    width: '100%',
    paddingTop: 20,
    marginBottom: 20,
  },
  charlieL: {
    height: 120,
    width: 120,
    position: 'absolute',
    left: 20,
    top: 30,
  },
  trophyTextL: {
    position: 'absolute',
    right: 20,
    top: 70,
    fontSize: 30,
    color: '#fff',
  },
  charlieR: {
    height: 120,
    width: 120,
    position: 'absolute',
    right: 20,
    top: 30,
  },
  trophyTextR: {
    position: 'absolute',
    left: 20,
    top: 70,
    fontSize: 30,
    color: '#fff',
  },
  arrowBox: {
    display: 'flex',
    height: 100,
    width: 100,
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 25,
  },
  arrow: {
    height: 300,
    width: 300,
  }
});

export default Profile;
