// pages/Result.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const Result = ({ route }) => {
  const { correctAnswersCount, totalQuestions, attemptedQuestionsCount, skippedQuestionsCount } = route.params;
  const navigation = useNavigation();

  return (
    <View className='flex-1 justify-center p-4 bg-gray-100'>
      <View className="w-full h-[70%] bg-white rounded-md shadow-md shadow-black p-5 mt-5">
        <View className="items-center">
          <Feather name="check-square" size={100} color="green" className="text-center" />
          <Text className="text-md text-center px-5 pt-4">Completed</Text>
          <Text className='text-xl text-center font-bold mb-4'>Your test has been completed</Text>
          <View className="bg-gray-200 w-[90%] mx-auto h-[1.5px]"></View>
          <Text className="text-md text-center px-5 pt-4">No. of Questions</Text>
          <Text className="text-xl font-bold text-center px-5 pt-1">{totalQuestions}</Text>
          <Text className="text-md text-center px-5 pt-4">Correct Questions</Text>
          <Text className="text-xl font-bold text-center px-5 pt-1">{correctAnswersCount}</Text>
          <Text className="text-md text-center px-5 pt-4">Skip Questions</Text>
          <Text className="text-xl font-bold text-center px-5 pt-1">{skippedQuestionsCount}</Text>
        </View>
        <TouchableOpacity 
          className="bg-cyan-500 mx-auto items-center px-10 py-3 rounded-xl mt-5" 
          onPress={() => navigation.navigate('Firstpage')}
        >
          <Text className="text-md text-white font-semibold">Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;
