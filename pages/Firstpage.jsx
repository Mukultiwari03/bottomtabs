// pages/Firstpage.js
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Firstpage = ({ ques, navigation }) => {
  return (
    <View className="flex-1 items-center justify-center p-4 bg-gray-100">
      <View className="w-full h-[70%] bg-white rounded-md shadow-md shadow-black p-5">
        <Text className="text-xl mx-auto text-cyan-500">Quiz</Text>
        <Text className="text-2xl text-center px-5 pt-4">Linux Mock Test to test your skills.</Text>
        <View className="bg-gray-200 w-[90%] mx-auto h-[1.5px] mt-4"></View>

        <View className="my-10">
          <View>
            <Text className="text-md text-center px-5 pt-4">No. of Questions</Text>
            {ques.length?(<Text className="text-xl font-bold text-center px-5 pt-1">{ques.length}</Text>):<ActivityIndicator className="pt-3"/>}
          </View>

          <View>
            <Text className="text-md text-center px-5 pt-4">Mock Test Duration</Text>
            <Text className="text-xl font-bold text-center px-5 pt-1">10 Minutes</Text>
          </View>
        </View>

        <View className="bg-gray-200 w-[90%] mx-auto h-[1.5px] mt-4"></View>

        <TouchableOpacity 
          className="mt-12 bg-cyan-500 mx-auto items-center px-10 py-3 rounded-xl" 
          onPress={() => navigation.navigate('Quiz', { ques })}
        >
          <Text className="text-md text-white font-semibold">Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Firstpage
