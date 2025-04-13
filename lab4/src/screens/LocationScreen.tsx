// src/screens/LocationScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import * as Location from 'expo-location';

const LocationScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          setErrorMsg('Permission denied');
          return;
        }
      }

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Loading location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your current location:</Text>
      <Text style={styles.coordinates}>
        📍 Latitude: {location.coords.latitude.toFixed(6)}
      </Text>
      <Text style={styles.coordinates}>
        📍 Longitude: {location.coords.longitude.toFixed(6)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  coordinates: {
    fontSize: 16,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default LocationScreen;

// ЯКБИ НЕ API то було б це:
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
// import MapView, { Marker, Callout } from 'react-native-maps';
// import * as Location from 'expo-location';

// const LocationScreen = () => {
//   const [location, setLocation] = useState<Location.LocationObject | null>(null);
//   const [errorMsg, setErrorMsg] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS === 'android') {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//         );
//         if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//           setErrorMsg('Permission denied');
//           return;
//         }
//       }

//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   if (errorMsg) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>{errorMsg}</Text>
//       </View>
//     );
//   }

//   if (!location) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading location...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.coordinates}>
//         Latitude: {location.coords.latitude.toFixed(4)}, Longitude: {location.coords.longitude.toFixed(4)}
//       </Text>
      
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true}
//         followsUserLocation={true}
//       >
//         <Marker
//           coordinate={{
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//           }}
//           title="Your Location"
//         >
//           <Callout>
//             <Text>You are here!</Text>
//           </Callout>
//         </Marker>
        
//         {/* Додатковий маркер */}
//         <Marker
//           coordinate={{
//             latitude: location.coords.latitude + 0.01,
//             longitude: location.coords.longitude + 0.01,
//           }}
//           title="Nearby Point"
//         >
//           <Callout>
//             <Text>Interesting place nearby</Text>
//           </Callout>
//         </Marker>
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   coordinates: {
//     marginBottom: 16,
//     fontSize: 16,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//   },
//   map: {
//     width: '100%',
//     height: '80%',
//   },
// });
// export default LocationScreen;