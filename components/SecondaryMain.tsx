import React, { useState } from 'react';
import { View, Text, Pressable, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SecondaryMain = ({ navigation, route }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const RoleButton = ({ iconName, label, onPress, isSelected }) => (
    <Pressable
      onPress={onPress}
      className={`
        w-28 h-28 rounded-2xl flex items-center justify-center 
        ${isSelected ? 'bg-secondary shadow-2xl' : 'bg-primary shadow-lg'}
        transition-all duration-200
      `}
    >
      <Icon
        name={iconName}
        color="#FFFFFF"
        size={40}
        className={isSelected ? 'scale-110' : ''}
      />
      <Text className="text-text-primary font-medium mt-2">{label}</Text>
    </Pressable>
  );

  const handleContinue = () => {
    if (selectedRole) {
      navigation.navigate('Login', { role: selectedRole });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="px-6 mt-4 items-center">
        <Text className="text-2xl font-bold text-secondary">Welcome</Text>
      </View>

      {/* Choose Option */}
      <View className="mt-10 items-center">
        <Text className="text-xl font-semibold text-text-muted mb-8 text-center px-6">
          Select Your Role to Get Started
        </Text>

        {/* Option Buttons */}
        <View className="flex-row justify-center space-x-4 w-full px-6">
          <RoleButton
            iconName="school"
            label="Student"
            onPress={() => setSelectedRole('student')}
            isSelected={selectedRole === 'student'}
          />
          <RoleButton
            iconName="person"
            label="Teacher"
            onPress={() => setSelectedRole('teacher')}
            isSelected={selectedRole === 'teacher'}
          />
        </View>

        <View className="mt-4">
          <RoleButton
            iconName="group"
            label="Guest"
            onPress={() => setSelectedRole('guest')}
            isSelected={selectedRole === 'guest'}
          />
        </View>
      </View>

      {/* Login Button */}
      <View className="flex-1 justify-end pb-10 px-6">
        <Pressable
          onPress={handleContinue}
          disabled={!selectedRole}
          className={`
            flex-row items-center justify-center 
            px-8 py-4 rounded-full 
            ${selectedRole 
              ? 'bg-secondary shadow-lg' 
              : 'bg-gray-500 opacity-50'}
          `}
        >
          <Text className="text-text-primary font-bold text-lg mr-2">
            Continue
          </Text>
          <Icon name="arrow-forward" color="#FFFFFF" size={20} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SecondaryMain;