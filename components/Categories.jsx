import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

const categories = [
  { name: 'All Products', icon: 'list-circle' },
  { name: 'Beauty', icon: 'brush' },
  { name: 'Electronics', icon: 'phone-portrait' },
  { name: 'Fashion', icon: 'shirt' },
  { name: 'Home Decor', icon: 'home' },
  { name: 'Appliances', icon: 'aperture' },
  { name: 'Furniture', icon: 'bed' },
  { name: 'Grocery', icon: 'cart' },
];

const Categories = () => {
  const handlePress = (categoryName) => {
    // Alert.alert(`${categoryName}, pressed`);
    // You can add navigation or other logic here
  };

  return (
    <ScrollView style={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <Pressable key={index} onPress={() => handlePress(category.name)} style={styles.categoryPressable}>
          <View style={styles.iconContainer}>
            <Ionicon style={styles.icon} name={category.icon} color='#445b4b' size={28} />
          </View>
          <Text style={styles.categoryText}>{category.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 8,
  },
  categoryPressable: {
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    borderRadius: 15,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderRadius: 50,
    paddingVertical: 8,
  },
  icon: {
    paddingHorizontal: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Categories;
