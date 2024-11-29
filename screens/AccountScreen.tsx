import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Layout from 'components/Layout';

const AccountScreen: React.FC = () => {
  const [name, setName] = useState<string>('John Doe');
  const [email, setEmail] = useState<string>('johndoe@example.com');
  const [phone, setPhone] = useState<string>('123-456-7890');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string>(
    'https://via.placeholder.com/100' // Placeholder profile picture URL
  );

  const handleSave = () => {
    if (password && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Account details saved!');
  };

  const handleProfilePictureChange = () => {
    // Logic to update profile picture (e.g., open image picker)
    alert('Profile picture updated!');
  };

  return (
    <Layout>
      <ScrollView className="flex-1 bg-teal-50" contentContainerStyle={{ padding: 20 }}>
        {/* Profile Picture Section */}
        <View className="items-center mb-10">
          <Image
            source={{ uri: profilePicture }}
            className="w-28 h-28 rounded-full mb-4"
            style={{ borderWidth: 3, borderColor: '#ffffff' }} // White border around the profile picture
          />
          <TouchableOpacity
            onPress={handleProfilePictureChange}
            className="flex-row items-center space-x-2 bg-teal-600 px-4 py-2 rounded-full"
          >
            <MaterialIcons name="photo-camera" size={20} color="white" />
            <Text className="text-white font-semibold">Change Picture</Text>
          </TouchableOpacity>
        </View>

        {/* User Information Section */}
        <Text className="text-4xl font-bold text-center mb-6 text-teal-700">My Profile</Text>

        {/* Name Input */}
        <View className="mb-6">
          <Text className="text-lg text-teal-600">Full Name:</Text>
          <TextInput
            className="mt-2 p-4 border border-teal-300 rounded-lg bg-white"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email Input */}
        <View className="mb-6">
          <Text className="text-lg text-teal-600">Email:</Text>
          <TextInput
            className="mt-2 p-4 border border-teal-300 rounded-lg bg-white"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Phone Input */}
        <View className="mb-6">
          <Text className="text-lg text-teal-600">Phone:</Text>
          <TextInput
            className="mt-2 p-4 border border-teal-300 rounded-lg bg-white"
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Change Password Section */}
        <View className="mt-8">
          <Text className="text-xl font-semibold text-teal-600 mb-4">Change Password</Text>
          <View className="mb-4">
            <Text className="text-lg text-teal-600">New Password:</Text>
            <TextInput
              className="mt-2 p-4 border border-teal-300 rounded-lg bg-white"
              placeholder="Enter new password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View>
            <Text className="text-lg text-teal-600">Confirm Password:</Text>
            <TextInput
              className="mt-2 p-4 border border-teal-300 rounded-lg bg-white"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
        </View>

        {/* Attendance Summary Section */}
        <View className="mt-10">
          <Text className="text-xl font-semibold text-teal-600 mb-4">Attendance Summary</Text>
          <View className="bg-white p-4 rounded-lg shadow-lg">
            <Text className="text-lg text-gray-700 mb-2">Total Days Worked: <Text className="font-semibold text-teal-600">120</Text></Text>
            <Text className="text-lg text-gray-700 mb-2">Leaves Taken: <Text className="font-semibold text-teal-600">5</Text></Text>
            <Text className="text-lg text-gray-700">Late Arrivals: <Text className="font-semibold text-teal-600">2</Text></Text>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          className="bg-teal-600 p-4 rounded-lg mt-10"
          onPress={handleSave}
        >
          <Text className="text-white text-center text-lg font-bold">Save Changes</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity
          className="bg-red-600 p-4 rounded-lg mt-4"
          onPress={() => alert('Logged Out!')}
        >
          <Text className="text-white text-center text-lg font-bold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};

export default AccountScreen;
