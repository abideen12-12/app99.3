import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Sabrina = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Sabrina's Page!</Text>
      <Image source={require('../assets/sabrina4k.jpg')} style={styles.artistImage} />
      <Text style={styles.artistBio}>
      Sabrina Annlynn Carpenter (born May 11, 1999) is an American singer, songwriter, and actress. She gained prominence starring on the Disney Channel series Girl Meets World (2014–2017), and signed with the Disney-owned Hollywood Records. She released her debut single, "Can't Blame a Girl for Trying" in 2014, followed by the studio albums Eyes Wide Open (2015), Evolution (2016), Singular: Act I (2018), and Singular: Act II (2019).
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  artistImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  artistBio: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default Sabrina;  // Ensure it's exported as default
