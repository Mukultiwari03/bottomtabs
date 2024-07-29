import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Firstpage from './pages/Firstpage'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

const Stack = createNativeStackNavigator()

const App = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://quizapi.io/api/v1/questions?apiKey=HjDD2kPMxTbRjPYt2Y0OwJYp5ZJ0rwKKnHvqItk2&category=Linux&limit=10")
        const data = await response.json()
        setQuestions(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Firstpage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Firstpage">
          {props => <Firstpage {...props} ques={questions} />}
        </Stack.Screen>
        <Stack.Screen name="Quiz" component={Quiz}/>
        <Stack.Screen name="Result" component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
