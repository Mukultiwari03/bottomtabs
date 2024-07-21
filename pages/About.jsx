import { View, Text, ImageBackground, Image,ScrollView } from 'react-native';
import React from 'react';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Map from '../components/Map';
const About = () => {

  const contactInfo = [
    {
      name: "Phone",
      value: "+1234567890",
      icon: "phone",
      library: "FontAwesome"
    },
    {
      name: "Email",
      value: "example@example.com",
      icon: "envelope",
      library: "FontAwesome"
    },
    {
      name: "Address",
      value: "123 Example Street, Suite 456, Example City, EX 12345",
      icon: "map-pin",
      library: "FontAwesome"
    }
  ];
  
  

  return (
    <ScrollView>
    <View className="rounded-b-[20px] overflow-hidden">
    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/911607890/photo/business-office-building-in-london.jpg?s=612x612&w=0&k=20&c=jRA3pIG4mTaJxBV0NFj1mhbK9JL5XyXH1HTrxZjSVyY=' }}
      style={{
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius:20,
        borderCurve:20,
        
      }}
      >
       <View className="mb-10 ">
    
      <Text className="text-white font-semibold text-3xl px-10 mb-3 mt-3">CromaZone</Text>
      <Text className="text-white  text-md px-10 text-justify">Innovate Solutions Inc. provides top-quality products to elevate your shopping experience and meet all your needs.</Text>
    </View>
    </ImageBackground>
  </View>
  <View className="mt-10">
    <Text className=" font-semibold text-2xl px-10 mb-3 ">Contact Info</Text>
    
    {contactInfo.map((info, index) => (
      <View key={index} className="flex flex-row items-center px-10 py-2 border-b border-gray-200">
        <View className="mr-5">
          {info.library === "FontAwesome" && <FontAwesome name={info.icon} size={20} color="black" />}
        </View>
        <View>
          <Text className="font-semibold">{info.name}</Text>
          <Text>{info.value}</Text>
        </View>
      </View>
    ))}
    </View>
    <View className="mt-10">
    <Text className=" font-semibold text-2xl px-10 mb-5 mt-3">Location</Text>
    <Map/>
    </View>
  
    </ScrollView>
  )
}

export default About