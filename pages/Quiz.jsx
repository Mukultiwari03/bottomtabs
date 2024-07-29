// pages/Quiz.js
import React, {useState, useMemo, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {useNavigation} from '@react-navigation/native';

const Quiz = ({route}) => {
  const {ques} = route.params;
  const [selectedIds, setSelectedIds] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigation = useNavigation();

  const [time, setTime] = useState(600000); // Time in milliseconds (10 minutes)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 100); // Decrease by 100 milliseconds
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      // Calculate results and navigate to Result page when time is up
      let correctAnswersCount = 0;
      let attemptedQuestionsCount = 0;
      let skippedQuestionsCount = 0;

      ques.forEach(question => {
        const correctAnswerKey = Object.keys(question.correct_answers).find(
          key => question.correct_answers[key] === 'true',
        );
        const correctAnswer = correctAnswerKey?.replace('_correct', '');

        if (selectedIds[question.id]) {
          attemptedQuestionsCount++;
          if (selectedIds[question.id] === correctAnswer) {
            correctAnswersCount++;
          }
        } else {
          skippedQuestionsCount++;
        }
      });

      const resultData = {
        correctAnswersCount,
        totalQuestions: ques.length,
        attemptedQuestionsCount,
        skippedQuestionsCount,
      };

      navigation.navigate('Result', resultData);
    }
  }, [time, ques, selectedIds, navigation]);

  const formatTime = time => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(time % 1000)
      .padStart(3, '0')
      .slice(0, 2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const handlePress = (questionId, selectedId) => {
    setSelectedIds(prevSelectedIds => ({
      ...prevSelectedIds,
      [questionId]: selectedId,
    }));
  };

  const handleSubmit = () => {
    let correctAnswersCount = 0;
    let attemptedQuestionsCount = 0;
    let skippedQuestionsCount = 0;

    ques.forEach(question => {
      const correctAnswerKey = Object.keys(question.correct_answers).find(
        key => question.correct_answers[key] === 'true',
      );
      const correctAnswer = correctAnswerKey?.replace('_correct', '');

      if (selectedIds[question.id]) {
        attemptedQuestionsCount++;
        if (selectedIds[question.id] === correctAnswer) {
          correctAnswersCount++;
        }
      } else {
        skippedQuestionsCount++;
      }
    });

    const resultData = {
      correctAnswersCount,
      totalQuestions: ques.length,
      attemptedQuestionsCount,
      skippedQuestionsCount,
    };

    navigation.navigate('Result', resultData);
  };

  const currentQuestion = ques[currentQuestionIndex];
  const radioButtons = useMemo(
    () =>
      Object.keys(currentQuestion.answers)
        .filter(key => currentQuestion.answers[key])
        .map(key => ({
          id: key,
          label: currentQuestion.answers[key],
          value: key,
        })),
    [currentQuestion.answers],
  );

  return (
    <View className="flex-1 justify-center p-4 bg-gray-100">
      <View className="items-center">
        <Text className="text-lg font-medium">Remaining Time</Text>
        <Text className="text-2xl font-medium text-cyan-500">
          {formatTime(time)}
        </Text>
      </View>
      <View className="w-full h-[70%] bg-white rounded-md shadow-md shadow-black p-5 mt-5">
        <Text className="text-lg font-semibold mb-4">
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={selectedId => handlePress(currentQuestion.id, selectedId)}
          selectedId={selectedIds[currentQuestion.id]}
          labelStyle={{
            width: '100%',
            backgroundColor: '#f9f9f9',
            paddingVertical:10,
            paddingHorizontal: 5,
            borderRadius: 5,
            shadowColor: 'black',
            shadowOpacity:0.8
          }}
        />
      </View>
      <View className="flex-row justify-between mt-4">
        {currentQuestionIndex > 0 && (
          <TouchableOpacity
            className="px-4 py-2 bg-blue-500 rounded-lg"
            onPress={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
            <Text className="text-white">Previous</Text>
          </TouchableOpacity>
        )}
        {currentQuestionIndex < ques.length - 1 ? (
          <TouchableOpacity
            className="px-4 py-2 bg-blue-500 rounded-lg"
            onPress={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
            <Text className="text-white">Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="px-4 py-2 bg-green-500 rounded-lg"
            onPress={handleSubmit}>
            <Text className="text-white">Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Quiz;
