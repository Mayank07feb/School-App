import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

interface LoginScreenProps {
  navigation: any;
  setIsLoggedIn: (status: boolean) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, setIsLoggedIn }) => {
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('password');

  const handleLogin = () => {
    // Basic login validation
    if (!email || !password) {
      Alert.alert('Error', 'Please enter valid credentials.');
      return;
    }
    
    if (email === 'admin' && password === 'password') {
      setIsLoggedIn(true); // Log in the user
      // Navigate to the main app
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View className="flex-1 justify-center p-6 bg-white">
      {/* App Logo or Title */}
      <View className="items-center mb-10">
        <Text className="text-3xl font-bold text-[#3B7CB8] tracking-tight">
          School Management
        </Text>
        <Text className="text-sm text-[#3B7CB8] mt-1">Secure Access Portal</Text>
      </View>

      {/* Login Form */}
      <View>
        <Text className="text-xl font-semibold text-[#3B7CB8] mb-6">Login to Continue</Text>

        {/* Email Input */}
        <TextInput
          className="w-full mb-4 p-4 bg-[#F1F5F9] rounded-lg shadow-sm text-[#3B7CB8]"
          placeholder="Email Address"
          placeholderTextColor="#6B7280"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          className="w-full mb-6 p-4 bg-[#F1F5F9] rounded-lg shadow-sm text-[#3B7CB8]"
          placeholder="Password"
          placeholderTextColor="#6B7280"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />

        {/* Login Button */}
        <TouchableOpacity
          className="w-full p-4 bg-[#3B7CB8] rounded-lg items-center shadow-md"
          onPress={handleLogin}
        >
          <Text className="text-white text-base font-semibold uppercase tracking-wider">
            Access Account
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Redirect */}
      <View className="mt-8 items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text className="text-[#3B7CB8] text-sm">
            Don't have an account? <Text className="font-bold text-[#3B7CB8]">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
