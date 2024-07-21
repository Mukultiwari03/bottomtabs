import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  
  const image = props.product.thumbnail;
  const name = props.product.title;
  const price = props.product.price;

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.likeButton}>
        <Pressable onPress={handleLike}>
          <Icon name={isLiked ? 'heart' : 'heart-outline'} size={20} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: '#CBD5E0',
    backgroundColor: 'white',
    width: 180,
    margin: 4,
    position: 'relative',
  },
  image: {
    borderRadius: 10,
    height: 130,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  name: {
    fontWeight: '600',
    paddingVertical: 4,
    width: '50%',
    color: 'black',
  },
  price: {
    fontWeight: '600',
    paddingVertical: 4,
    fontSize: 17,
    color: 'black',
  },
  likeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    borderRadius: 50,
    backgroundColor: 'white',
    height: 28,
    width: 28,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
