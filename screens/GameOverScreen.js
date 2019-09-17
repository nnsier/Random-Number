import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors  from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
        style={styles.image}
        source={require('../assets/success.png')}
        resize="cover" 
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.numRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
      </View>

      <MainButton onPress={props.onRestart}>Play again?</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 40,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 30,
  },
  resultContainer: {
    marginVertical: 30,
    marginHorizontal: 15,
  },
  highlight: {
    color: Colors.primary,
  }
});

export default GameOverScreen;