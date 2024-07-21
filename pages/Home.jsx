import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import HomeHeader from '../components/HomeHeader';
import SliderImg from '../components/SliderImg';
import Categories from '../components/Categories';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(10); // Use state for num to trigger useEffect

  const loadMore = () => {
    setLoading(true);
    setNum(prevNum => prevNum + 6);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${num}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [num]);

  return (
    <ScrollView>
      <HomeHeader />
      <SliderImg />
      <Categories />
      <Text className="mx-1 my-3 px-2 font-semibold text-xl border-b-2 border-slate-300 text-red-600">Our Featured Products</Text>
      <View className="flex flex-row flex-wrap justify-around">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </View>
      <View>
        <Pressable
          onPress={loadMore}
          className="py-2 rounded-full bg-yellow-200 w-44 mx-auto my-2"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <Text className="text-center font-medium text-black text-[17px]">Load More Products</Text>
          )}
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;