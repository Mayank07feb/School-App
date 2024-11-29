import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';

const MainPage = ({ onContinue }) => {
  return (
    <View className="flex-1 items-center justify-center bg-teal-600">
      {/* Animated Header */}
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 800 }}
        className="mb-6"
      >
        <Text className="text-white text-2xl font-bold">
          Welcome to Attendance App
        </Text>
      </MotiView>

      {/* Description */}
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1000, delay: 500 }}
        className="mb-10"
      >
        <Text className="text-white text-xl text-center px-6">
          Manage your attendance efficiently and effortlessly!
        </Text>
      </MotiView>

      {/* Continue Button */}
      <MotiView
        from={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 10,
          delay: 800,
        }}
      >
        <TouchableOpacity
          onPress={onContinue}
          className="bg-white px-8 py-4 rounded-full shadow-lg mt-8"
        >
          <Text className="text-teal-600 text-lg font-semibold">
            Continue
          </Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  );
};

export default MainPage;
