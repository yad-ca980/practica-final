import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import homeImage from '../../assets/fondo.jpg';

export default function HomeScreen(props) {
  const { characters, loadMoreData, nextUrl } = props;

  const loadMore = () => {
    if (nextUrl) {
      loadMoreData(nextUrl);
    }
  }

  return (
    <ImageBackground source={homeImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        {characters && characters.length > 0 ? (
          <FlatList
            data={characters}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Card characters={item} />
            )}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={nextUrl ? (
              <ActivityIndicator style={styles.spinner} size="large" color="#79B543" />
            ) : null}
          />
        ) : (
          <Text>No hay personajes disponibles.</Text>
        )}
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  spinner: {
    marginTop: 10,
    marginBottom: 50
  },
});
