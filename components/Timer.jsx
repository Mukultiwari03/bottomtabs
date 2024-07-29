// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// const Timer = () => {
//   const [time, setTime] = useState(600000); // Time in milliseconds (10 minutes)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(prevTime => prevTime - 10); // Decrease by 10 milliseconds
//     }, 10);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (time <= 0) {
//       clearInterval(interval);
//       setTime(0);
//     }
//   }, [time]);

//   const formatTime = (time) => {
//     const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
//     const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
//     const milliseconds = String(time % 1000).padStart(3, '0').slice(0, 2);
//     return `${minutes}:${seconds}:${milliseconds}`;
//   };

//   return (
//     <View className="items-center">
//         <Text className="text-lg font-medium">Remaining Time</Text>
//       <Text className="text-2xl font-medium  text-cyan-500">{formatTime(time)}</Text>
//     </View>
//   );
// };

// export default Timer;
