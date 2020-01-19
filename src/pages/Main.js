import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {
    async function loadInitialLocation() {
      const { granted } = await requestPermissionsAsync()

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        })

        const { latitude, longitude } = coords

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        })
      }
    }

    loadInitialLocation()
  }, [])

  if (!currentRegion) {
    return null
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -24.011086, longitude: -46.270919 }}>
        <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/19734511?s=460&v=4'}} />

        <Callout>
          <View style={styles.callout}>
            <Text style={styles.devName}>Carlos Wimmer</Text>
            <Text style={styles.devBio}>FrontEnd Developer focused on efficient interface design and pleasant user experience.</Text>
            <Text style={styles.devTechs}>ReactJS, Node.js, React Native</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    height: 54,
    width: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff'
  },

  callout: {
    width: 260
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  devBio: {
    color: '#666',
    marginTop: 5
  },

  devTechs: {
    marginTop: 5
  }
})

export default Main