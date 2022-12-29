import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import xmark from '../../assets/x-mark.png';
import checkmark from '../../assets/check-mark.png';

export default VoteButton = ({isVerify, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.voteButton}
      onPress={onPress}>
      <Image style={styles.voteButtonImage} source={isVerify ? checkmark : xmark}></Image>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  voteButton: {
    width: 50,
    height: 50
  },

  voteButtonImage: {
    width: 50,
    height: 50
  },
})
