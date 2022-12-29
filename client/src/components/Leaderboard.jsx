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
import downArrow from '../../assets/down-arrow.png';
import circle from "../../assets/circle.png";

// const [name, setName] = React.useState("");
// useEffect(() => {
//   const getUseraData = async () => {
//     const userData = await getUser("andrew");
//     setName(userData.name);
//   };
//   getUseraData();
//   console.log(name);
// });

const Leaderboard = ({ navigation }) => {

  const [name, setName] = React.useState("");
  useEffect(() => {
    const getUseraData = async () => {
      //const userData = await getUser("andrew");
      //setName(userData.name);
    };
    getUseraData();
    console.log(`user is named "${name}"`);
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.center}>
          <Text style={styles.username}>Leaderboard</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.sub}>— top ten —</Text>
        </View>
        <View style={styles.topTen}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              0.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              1.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              2.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              3.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              4.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              5.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              6.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              7.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              8.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie1
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>
              9.
            </Text>
            <Image source={circle} style={styles.circle} />
            <Text style={styles.name}>
              charlie9
            </Text>
            <Text style={styles.count}>
              #
            </Text>
          </View>
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
    alignItems: 'center',
  },
  center: {
    alignItems: "center",
    paddingTop: 60,
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
  topTen: {
    marginTop: 5,
    width: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: 40,
    width: 40,
    position: 'absolute',
    left: 35,
    top: 20
  },
  name: {
    color: '#fff',
    position: 'absolute',
    fontSize: 30,
    top: 20,
    left: 90
  },
  subtitle: {
    alignItems: 'center',
  },
  sub: {
    fontSize: 15,
    color: 'white',
  },
  count: {
    color: 'white',
    position: 'absolute',
    right: 10,
    top: 20,
    fontSize: 30,
  }
});

export default Leaderboard;
