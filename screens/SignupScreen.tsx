import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignupScreen: React.FC = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 justify-center p-6 bg-white">
      {/* App Logo or Title */}
      <View className="items-center mb-10">
        <Text className="text-3xl font-bold text-[#3B7CB8] tracking-tight">
          School Management
        </Text>
        <Text className="text-sm text-[#3B7CB8] mt-1">Create Your Account</Text>
      </View>

      {/* Signup Form */}
      <View>
        <Text className="text-xl font-semibold text-[#3B7CB8] mb-6">Sign Up</Text>

        {/* Email Input */}
        <View className="mb-4">
          <TextInput
            className="w-full p-4 bg-[#F1F5F9] rounded-lg shadow-sm text-[#3B7CB8]"
            placeholder="Email Address"
            placeholderTextColor="#6B7280"
            value={email}
            onChangeText={setEmail}
            keyboardAppearance="dark"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View className="mb-4 relative">
          <TextInput
            className="w-full p-4 bg-[#F1F5F9] rounded-lg shadow-sm text-[#3B7CB8] pr-12"
            placeholder="Password"
            placeholderTextColor="#6B7280"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            keyboardAppearance="dark"
          />
          <TouchableOpacity
            className="absolute right-4 top-4"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color="rgba(0, 0, 0, 0.6)"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View className="mb-6 relative">
          <TextInput
            className="w-full p-4 bg-[#F1F5F9] rounded-lg shadow-sm text-[#3B7CB8] pr-12"
            placeholder="Confirm Password"
            placeholderTextColor="#6B7280"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            keyboardAppearance="dark"
          />
          <TouchableOpacity
            className="absolute right-4 top-4"
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye-off' : 'eye'}
              size={20}
              color="rgba(0, 0, 0, 0.6)"
            />
          </TouchableOpacity>
        </View>

        {/* Signup Button */}
        <TouchableOpacity
          className="w-full p-4 bg-[#3B7CB8] rounded-lg items-center shadow-md"
          onPress={handleSignup}
        >
          <Text className="text-white text-base font-semibold uppercase tracking-wider">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Redirect */}
      <View className="mt-8 items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-[#3B7CB8] text-sm">
            Already have an account? <Text className="font-bold text-[#3B7CB8]">Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
