import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ImageBackground, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomePage = ({ navigation }) => {
  const imageButtons = [
    { id: '1', name: 'Taylor Swift', image: require('./assets/Taylor4K.jpg'), artist: 'TaylorSwift' },
    { id: '2', name: 'Harry Styles', image: require('./assets/harry_4k.jpg'), artist: 'HarryStyles' },
    { id: '3', name: 'Anirudh', image: require('./assets/ani4k.jpg'), artist: 'Anirudh' },
    { id: '4', name: 'HipHopTamizha', image: require('./assets/adhi4k.jpg'), artist: 'HipHopTamizha' },
    { id: '5', name: 'Sabrina', image: require('./assets/sabrina4k.jpg'), artist: 'Sabrina' },
  ];

  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.backgroundImage}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.topBarText}>99.3 Music</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainTabs')} style={styles.iconButton}>
            <Ionicons name="home" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}> Explore Artists </Text>

        {/* 📌 Updated Artist Selection */}
        <FlatList
          data={imageButtons}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.imageButton} onPress={() => navigation.navigate(item.artist)}>
              <Image source={item.image} style={styles.artistImage} />
              <Text style={styles.label}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.spotifyContainer}>
          <WebView
            source={{ uri: 'https://open.spotify.com/embed/playlist/0XYnAcgZqmVOMcW8SMhkdb?utm_source=generator' }}
            style={styles.spotifyPlayer}
            javaScriptEnabled
            domStorageEnabled
            startInLoadingState
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

// 🎨 Updated Styles
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    backgroundColor: '#000',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#000',
  },
  iconButton: {
    padding: 5,
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
    textAlign: 'center',
  },
  flatListContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  imageButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  artistImage: {
    width: 315, // Image fully covers button
    height: 150, // Keep it square
    borderRadius: 12, // Rounded edges
  },
  label: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginTop: 8, // Space between image and label
  },
  spotifyContainer: {
    width: '90%',
    height: 360,
    borderRadius: 12,
    overflow: 'hidden',
  },
  spotifyPlayer: {
    flex: 1,
  },
});

export default HomePage;
