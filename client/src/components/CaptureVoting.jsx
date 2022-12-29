import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { getAll } from '../services/captures';
import VotingCard from './VotingCard'
import logoFull from '../../assets/logoFull.png';

const CaptureVoting = ({ voterID }) => {
  
  // hold all current captures
  const [captures, setCaptures] = React.useState([])
  
  React.useEffect(() => {
    (async () => {
        const all = await getAll();
        console.log('captures in the callback:', all);
        setCaptures(all);
    })();    
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Recent Captures</Text>
          {captures.map((c, index) => (
          <VotingCard
            captureInfo={c}
            voterId={voterID}
            key={index}
            lastCard={index === captures.length - 1}
          />))}
      </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    padding: 10,
    paddingBottom: 0,
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
    marginLeft: 20,
    borderRadius: 0
  },
  captureCardText: {
    fontSize: 15,
    color: 'white',
    marginLeft: 20,
  },
  container: {
    display: 'flex',
    backgroundColor: '#221132',
    height: '100%',
    width: '100%',
  },
  
  title: {
    marginTop: 50,
    marginLeft: 30,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  imageContainer: {
    display: 'flex',
  },
});

export default CaptureVoting
