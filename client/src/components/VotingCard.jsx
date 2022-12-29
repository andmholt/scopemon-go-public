import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import VoteButton from './VoteButton';
import { verify, nullify } from '../services/captures';
import { getUserFromID } from '../services/user';


const VotingCard = ({captureInfo, lastCard, voterId}) => {
  const [username, setUsername] = useState('');
  const [capturedUsername, setCapturedUsername] = useState('');
  const [hasVoted, setHasVoted] = useState(captureInfo.verifiedBy.includes(voterId) || captureInfo.nullifiedBy.includes(voterId));

  React.useEffect(() => {
    (async () => {
      const capturer = await getUserFromID(captureInfo.userID);
      console.log('capturer:', capturer);
      setUsername(capturer.username);
    })();    
    
    (async () => {
      const captured = await getUserFromID(captureInfo.capturedUser);
      setCapturedUsername(captured.username);
    })();    

  }, []);
  
  return (
    <View style={lastCard ? styles.lastCaptureCard : styles.captureCard}>
    
    <Text style={styles.captureCardText}>{username} captured {capturedUsername}!</Text>
    
    <View style={styles.imageContainer}>
      <ImageBackground 
        style={styles.captureCardImage}
        imageStyle={styles.captureCardImageImageStylesFuckYouReactNative}
        source={{uri: captureInfo.url}}>
        
        <View style={styles.voteButtonContainer}>
          {(
            () => {
              console.log(hasVoted);
              if(!hasVoted)
                return (
                  <>
                    <VoteButton isVerify={false} onPress={() => {nullify(captureInfo._id, voterId); setHasVoted(true) }}/>
                    <VoteButton isVerify={true}  onPress={() => {verify(captureInfo._id, voterId); setHasVoted(true) }}/>        
                  </>
                )
            }
          )()}
        </View>

      </ImageBackground>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  captureCardImage: {
    width: 300,
    height: 500,
    marginTop: 10,
    padding: 10,
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'flex-end'
  },

  captureCardImageImageStylesFuckYouReactNative: {
    borderRadius: 40, 
  },

  voteButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  captureCard: {
    display: 'flex',
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 50,
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    marginTop: 30,
  },

  captureCardText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },

})

styles.lastCaptureCard = {
  ...styles.captureCard,
  marginBottom: 50
}

export default VotingCard
