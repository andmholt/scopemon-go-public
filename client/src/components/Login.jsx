import React, { useState } from 'react';
import { logIn } from '../services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import logoFull from '../../assets/logoFull.png';

export default Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // if login is successful, call this to store user email locally
  const submit = () => {
    // try to log in
    const attemptLogIn = async () => {

      const logInRes = await logIn(username, password)

      if (logInRes.data.userID != undefined) {
        try {
          await AsyncStorage.setItem('userID', logInRes.data.userID)
        } catch (e) {
          // saving error
          console.log(e)
        }
        props.loginCallback()
      } else {
        // log in not valid
      }
    }

    attemptLogIn()
  }

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.logoImgView}>
          <Image style={styles.logoImg} source={logoFull}></Image>
        </View>
      </View>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
                
        <View style={styles.inputView}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            onChangeText={setUsername}
            autoCapitalize='none'
            style={styles.input}
            placeholder=''
            value={username}
          />
        </View>


        <View style={styles.inputView}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={setPassword}
            autoCapitalize='none'
            style={styles.input}
            placeholder=''
            value={password}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => submit()}
        >
          <Text style={styles.buttonText}>Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#221132',
    height: '100%',
    width: '100%'
  },
  center: {
    alignItems: "center",
    paddingTop: 70,
  },
  logoImgView: {
    display: 'flex',
    height: 120,
    width: 330,
    marginBottom: 20,
  },
  logoImg: {
    maxHeight: '100%',
    maxWidth: '100%',
    resizeMode: 'cover',
    borderRadius: 0
  },
  title: {
    fontSize: 40,
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  inputView: {
    width: '100%'
  },

  button: {
    borderWidth: 2,
    borderColor: 'white',
    fontWeight: 'bold',
    borderRadius: 50000,
    padding: 10,
    marginTop: 30,
    width: '25%',
    backgroundColor: 'white'
  },

  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  input: {
    borderWidth: 4,
    padding: 10,
    marginTop: 5,
    borderRadius: 5000,
    color: 'white',
  },

  label: {
    marginLeft: 20,
    marginTop: 25,
    color: 'white'
  },

  inputContainer: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
  }
})
