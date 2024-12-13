import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Layout from 'components/Layout';

const AccountScreen: React.FC = () => {
  const [name, setName] = useState<string>('John Doe');
  const [email, setEmail] = useState<string>('johndoe@example.com');
  const [phone, setPhone] = useState<string>('123-456-7890');
  const [profilePicture, setProfilePicture] = useState<string>(
    'https://via.placeholder.com/100'
  );
  const [studentClass, setStudentClass] = useState<string>('10th Grade');
  const [section, setSection] = useState<string>('A');
  const [rollNumber, setRollNumber] = useState<string>('2024-0042');

  const handleProfilePictureChange = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'You need to allow access to your gallery to upload a picture.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      setProfilePicture(selectedImage);
    }
  };

  const handleSave = () => {
    Alert.alert('Profile Updated', 'Your profile changes have been saved successfully.');
  };

  return (
    <Layout>
      <ScrollView 
        className="flex-1 bg-white" 
        contentContainerStyle={{ 
          padding: 20, 
          paddingBottom: 80 
        }}
      >
        {/* Profile Picture Section */}
        <View className="items-center mb-10">
          <Image
            source={{ uri: profilePicture }}
            className="w-28 h-28 rounded-full mb-4"
            style={{ 
              borderWidth: 3, 
              borderColor: '#3B7CB8' 
            }}
          />
          <TouchableOpacity
            onPress={handleProfilePictureChange}
            className="flex-row items-center space-x-2 bg-primary px-4 py-2 rounded-full"
          >
            <MaterialIcons name="photo-camera" size={20} color="white" />
            <Text className="text-white font-semibold">Change Picture</Text>
          </TouchableOpacity>
        </View>

        {/* User Information Section */}
        <Text className="text-4xl font-bold text-center mb-6 text-[#3B7CB8]">My Profile</Text>

        {/* Academic Details Section */}
        <View className="mb-6 bg-[#F0F5FF] p-4 rounded-lg">
          <Text className="text-xl font-semibold text-[#3B7CB8] mb-4">Academic Details</Text>
          <View className="flex-row mb-3">
            <Ionicons name="school" size={24} color="#3B7CB8" />
            <Text className="ml-3 text-[#1F2937] text-lg">Class: {studentClass}</Text>
          </View>
          <View className="flex-row mb-3">
            <FontAwesome5 name="chalkboard-teacher" size={20} color="#3B7CB8" />
            <Text className="ml-3 text-[#1F2937] text-lg">Section: {section}</Text>
          </View>
          <View className="flex-row">
            <MaterialIcons name="confirmation-number" size={24} color="#3B7CB8" />
            <Text className="ml-3 text-[#1F2937] text-lg">Roll Number: {rollNumber}</Text>
          </View>
        </View>

        {/* Existing Profile Fields */}
        <View className="mb-6">
          <Text className="text-lg text-[#3B7CB8]">Full Name:</Text>
          <TextInput
            className="mt-2 p-4 border border-[#3B7CB8] rounded-lg bg-[#F0F5FF]"
            placeholder="Enter your name"
            placeholderTextColor="#6B7280"
            value={name}
            onChangeText={setName}
            style={{ color: '#1F2937' }}
          />
        </View>

        <View className="mb-6">
          <Text className="text-lg text-[#3B7CB8]">Email:</Text>
          <TextInput
            className="mt-2 p-4 border border-[#3B7CB8] rounded-lg bg-[#F0F5FF]"
            placeholder="Enter your email"
            placeholderTextColor="#6B7280"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={{ color: '#1F2937' }}
          />
        </View>

        <View className="mb-6">
          <Text className="text-lg text-[#3B7CB8]">Phone:</Text>
          <TextInput
            className="mt-2 p-4 border border-[#3B7CB8] rounded-lg bg-[#F0F5FF]"
            placeholder="Enter your phone number"
            placeholderTextColor="#6B7280"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={{ color: '#1F2937' }}
          />
        </View>

        {/* Academic Performance Section */}
        <View className="mt-6">
          <Text className="text-xl font-semibold text-[#3B7CB8] mb-4">Academic Performance</Text>
          <View className="bg-[#F0F5FF] p-4 rounded-lg shadow-lg">
            <View className="flex-row justify-between mb-3">
              <Text className="text-lg text-[#6B7280]">Overall GPA:</Text>
              <Text className="text-lg font-semibold text-[#3B7CB8]">3.75</Text>
            </View>
            <View className="flex-row justify-between mb-3">
              <Text className="text-lg text-[#6B7280]">Total Credits:</Text>
              <Text className="text-lg font-semibold text-[#3B7CB8]">42</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-lg text-[#6B7280]">Ranking:</Text>
              <Text className="text-lg font-semibold text-[#3B7CB8]">12/250</Text>
            </View>
          </View>
        </View>

        {/* Attendance Summary Section */}
        <View className="mt-6">
          <Text className="text-xl font-semibold text-[#3B7CB8] mb-4">Attendance Summary</Text>
          <View className="bg-[#F0F5FF] p-4 rounded-lg shadow-lg">
            <Text className="text-lg text-[#6B7280] mb-2">
              Total Days Present: <Text className="font-semibold text-[#3B7CB8]">120</Text>
            </Text>
            <Text className="text-lg text-[#6B7280] mb-2">
              Leaves Taken: <Text className="font-semibold text-[#3B7CB8]">5</Text>
            </Text>
            <Text className="text-lg text-[#6B7280]">
              Late Arrivals: <Text className="font-semibold text-[#3B7CB8]">2</Text>
            </Text>
          </View>
        </View>

        {/* Save and Logout Buttons */}
        <TouchableOpacity
          className="bg-primary p-4 rounded-lg mt-10"
          onPress={handleSave}
        >
          <Text className="text-white text-center text-lg font-bold">Save Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-600 p-4 rounded-lg mt-4"
          onPress={() => Alert.alert('Logged Out', 'You have been logged out successfully.')}
        >
          <Text className="text-white text-center text-lg font-bold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};

export default AccountScreen;