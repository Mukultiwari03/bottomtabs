import React from 'react';
import { View, StyleSheet} from 'react-native';
import MapView,{ Marker} from 'react-native-maps';
const Map = () => {
    const initialRegion = {
        latitude: 30.733315,
        longitude: 76.779419,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        };
return (
<View style={styles.container}>
<MapView
style={styles.map}
initialRegion={initialRegion}>
<Marker
coordinate={{
latitude: initialRegion.latitude,
longitude: initialRegion.longitude,
}}
title="Your Location"
/>
</MapView>
</View>
);
};
const styles = StyleSheet.create({
container: {

justifyContent: 'flex-end',
alignItems: 'center',
width:"full",
height:400,

},
map: {
...StyleSheet.absoluteFillObject,

},
});
export default Map;