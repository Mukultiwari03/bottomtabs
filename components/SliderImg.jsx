//SliderImg->
import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'

const SliderImg = () => {
    const imgArr = ['https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b530f7110494491.5feef8228f2b8.png'
    ,'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b530f7110494491.5feef8228f2b8.png'
    ,'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b530f7110494491.5feef8228f2b8.png'
    ]
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        imgArr.map((img, index)=>{
            return(
                <View key={index}>
                <Image source={{uri: img}} style={{width:375, height: 200, margin: 10, borderRadius: 10}}/>
                </View>
            )
        })
      }
    </ScrollView>
  )
}

export default SliderImg