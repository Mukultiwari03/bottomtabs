import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.locationText}>Location</Text>
          <View style={styles.locationRow}>
            <Ionicon name="location" color='yellow' size={18}/>
            <Text style={styles.locationName}>Chandigarh, India</Text>
          </View>
        </View>
        <View>
          <View style={styles.iconRow}>
            <View style={styles.iconWrapper}>
              <Ionicon name="cart-sharp" color='yellow' size={19}/>
            </View>
            <View style={styles.iconWrapper}>
              <FontIcon name="bell" color='yellow' size={18}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#445b4b',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  locationText: {
    color: '#CBD5E0',
  },
  locationRow: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'baseline',
    gap: 4,
  },
  locationName: {
    color: 'white',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 8,
  },
  iconWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 4,
    borderRadius: 5,
  },
});

export default HomeHeader;
