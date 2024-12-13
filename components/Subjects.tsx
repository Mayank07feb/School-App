import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Subjects: React.FC = () => {
  const navigation = useNavigation(); // Use the navigation hook to navigate
  const subjects = [
    { name: 'Mathematics', image: 'https://via.placeholder.com/150', color: '#3498db', screen: 'MathScreen' },
    { name: 'Physics', image: 'https://via.placeholder.com/150', color: '#2ecc71', screen: 'PhysicsScreen' },
    { name: 'Chemistry', image: 'https://via.placeholder.com/150', color: '#9b59b6', screen: 'ChemistryScreen' },
    { name: 'Biology', image: 'https://via.placeholder.com/150', color: '#e74c3c', screen: 'BiologyScreen' },
    { name: 'History', image: 'https://via.placeholder.com/150', color: '#f1c40f', screen: 'HistoryScreen' },
    { name: 'Geography', image: 'https://via.placeholder.com/150', color: '#34495e', screen: 'GeographyScreen' },
  ];

  const { width } = Dimensions.get('window');
  const circleSize = 100;

  return (
    <View className="flex-1 bg-[#f4f5f7] p-4">
      <Text className="text-2xl font-bold text-[#2c3e50] mb-6">Subjects</Text>

      {/* Horizontal ScrollView for Subjects */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row items-center space-x-4">
          {subjects.map((subject, index) => (
            <TouchableOpacity
              key={index}
              className="items-center"
              style={{ width: circleSize }}
              onPress={() => navigation.navigate(subject.screen)} // Navigate to subject's screen
            >
              <View
                className="rounded-full items-center justify-center"
                style={{
                  width: circleSize,
                  height: circleSize,
                  backgroundColor: `${subject.color}30`,
                }}
              >
                <Image
                  source={{ uri: subject.image }}
                  className="rounded-full"
                  style={{ width: circleSize - 20, height: circleSize - 20 }}
                />
              </View>
              <Text className="text-sm font-semibold text-[#2c3e50] mt-2 text-center">
                {subject.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Subjects;
