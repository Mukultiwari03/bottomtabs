import { View, Text, ImageBackground, Image,ScrollView } from 'react-native';
import React from 'react';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Profile = () => {

  const settings = [
    { name: "Address", icon: "location-pin", library: "SimpleLineIcons" },
    { name: "Account", icon: "user", library: "FontAwesome" },
    { name: "Notifications", icon: "bell", library: "FontAwesome" },
    { name: "Devices", icon: "devices", library: "MaterialIcons" },
    { name: "Passwords", icon: "lock", library: "FontAwesome" },
    { name: "Language", icon: "language", library: "MaterialIcons" },
    { name: "Terms & Policies", icon: "file-text", library: "FontAwesome" },
    { name: "FAQs", icon: "question-circle", library: "FontAwesome" },
    { name: "Help Center", icon: "help", library: "MaterialIcons" }
  ];

  const firstPart = settings.slice(0, 2);
  const secondPart = settings.slice(2,6);
  const thirdPart = settings.slice(6);
  const getIconComponent = (lib) => {
    if (lib === "FontAwesome") {
      return FontAwesome;
    } else if (lib === "SimpleLineIcons") {
      return SimpleLineIcons;
    } else if (lib === "MaterialIcons") {
      return MaterialIcons;
    }
  };

  return (
    <ScrollView>
      <View className="rounded-b-[18px] overflow-hidden">
      <ImageBackground
        source={{ uri: 'https://t4.ftcdn.net/jpg/06/10/26/15/360_F_610261529_vk9kf4ooTP5eSsQdOEyB4miRHn1YWCD1.jpg' }}
        style={{
          height: 300,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomEndRadius:20,
          borderCurve:20,
        }}
        >
         <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          source={{ uri: 'https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg' }} 
          style={{ width: 100, height: 100, borderRadius: 80 }} 
        />
        <Text className="text-white font-semibold text-2xl mt-3">John Doe</Text>
        <Text className="text-white  text-md px-20 text-center">"Work Hard in Silence,Let your success be the notice"</Text>
      </View>
      </ImageBackground>
      </View>

      <View className="bg-white w-[90%] mx-auto rounded-xl shadow-lg my-4 -mt-[35]" >
        {firstPart.map((item, index) => {
          const IconComponent = getIconComponent(item.library);
          return (
            <View className="flex flex-row items-center justify-between px-2 py-4 border-b border-gray-200" key={index}>
              <View className="flex flex-row items-center gap-3">
                <IconComponent name={item.icon} color="#979797" size={20} />
                <Text className="text-lg font-semibold">{item.name}</Text>
              </View>
              <MaterialIcons name="expand-more" color="#979797" size={25}  style={{ transform: [{ rotate: '-90deg' }] }}/>
            </View>
          );
        })}
      </View>

      <View className="bg-white w-[90%] mx-auto rounded-xl shadow-lg my-4">
        {secondPart.map((item, index) => {
          const IconComponent = getIconComponent(item.library);
          return (
            <View className="flex flex-row items-center justify-between px-2 py-4 border-b border-gray-200" key={index}>
              <View className="flex flex-row items-center gap-3">
                <IconComponent name={item.icon} color="#979797" size={20} />
                <Text className="text-lg font-semibold">{item.name}</Text>
              </View>
              <MaterialIcons name="expand-more" color="#979797" size={25}    style={{ transform: [{ rotate: '-90deg' }] }} />
            </View>
          );
        })}
      </View>
      <View className="bg-white w-[90%] mx-auto rounded-xl shadow-lg my-4">
        {thirdPart.map((item, index) => {
          const IconComponent = getIconComponent(item.library);
          return (
            <View className="flex flex-row items-center justify-between px-2 py-4 border-b border-gray-200" key={index}>
              <View className="flex flex-row items-center gap-3">
                <IconComponent name={item.icon} color="#979797" size={20} />
                <Text className="text-lg font-semibold">{item.name}</Text>
              </View>
              <MaterialIcons name="expand-more" color="#979797" size={25}    style={{ transform: [{ rotate: '-90deg' }] }} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Profile;
