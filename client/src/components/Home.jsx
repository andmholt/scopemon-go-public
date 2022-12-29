import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import NavigationContainer from "@react-navigation/native";
import user from "../../assets/user.png";
import home from "../../assets/home-activated.png";
import logo from "../../assets/logo.png";
import circle from "../../assets/circle.png";
import userPost from "../../assets/userPost.png";
import camera from "../../assets/camera.png";

const Home = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
      </View>

      <ScrollView>
      <View>
        <Image source={circle} style={styles.image} />
        <Text> username </Text>
      </View>

      <View>
        <Image
          source = {userPost} style={styles.userImg}
        />
      </View>
      </ScrollView>

      <View style={styles.toolmenu}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image source={home} style={styles.image} />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate("CaptureVoting")}
        >
          <Image source={camera} style={styles.imageCam} />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image source={user} style={styles.image} />
        </TouchableOpacity>
      </View>
      
      <Button
        title="Go to Sign up"
        onPress={() => navigation.navigate("SignUp", {myParam: ':('})}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login", {myParam: ':('})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toolmenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  touchable: {
    alignItems: "center",
  },
  image: {
    width: 50,
    resizeMode: "contain",
  },
  imageCam: {
    width: 80,
    resizeMode: "contain",
  },
  userImg: {
    width: "85%",
    height: 300,
    backgroundColor: "#808080"
  },
  content: {
    flex: 1,
  },
});

export default Home;
