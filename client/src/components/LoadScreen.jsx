import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import logo from "../../assets/logo.png";

// add logo

const LoadScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#221132',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: 50,
      resizeMode: "contain",
    }
  });

export default LoadScreen