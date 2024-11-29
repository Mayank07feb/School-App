import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

interface LoginScreenProps {
  navigation: any;
  setIsLoggedIn: (status: boolean) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, setIsLoggedIn }) => {
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('password');

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true); // Log in the user
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <View className="flex-1 justify-center bg-teal-50 p-6">
      {/* App Logo or Title */}
      <View className="items-center mb-8">
        <Text className="text-3xl font-bold text-teal-700">Attendance App</Text>
      </View>

      {/* Login Form */}
      <View>
        <Text className="text-xl font-semibold text-teal-700 mb-4">Login</Text>
        
        <TextInput
          className="w-full mb-4 p-4 bg-white rounded-lg shadow-sm text-teal-800"
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="w-full mb-6 p-4 bg-white rounded-lg shadow-sm text-teal-800"
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          className="w-full p-4 bg-teal-600 rounded-lg items-center"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg font-semibold">Login</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Redirect */}
      <View className="mt-6 items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text className="text-teal-600 text-base underline">
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
