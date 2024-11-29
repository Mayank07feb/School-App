import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Sidebar from './Sidebar';  // Import Sidebar component

const Header: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  // Function to open the sidebar (drawer)
  const openSidebar = () => {
    navigation.openDrawer();  // This will open the drawer/sidebar
  };

  return (
    <View className="w-full flex-row items-center justify-between bg-teal-600 p-4 border-b border-teal-500 shadow-md">
      {/* Left Section with Hamburger Icon and Title */}
      <View className="flex-row items-center">
        {/* Hamburger Icon for Sidebar */}
        <TouchableOpacity onPress={openSidebar} className="mr-4">
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>

        {/* Logo and Title */}
        <Text className="text-lg font-semibold text-white">
          Real Vector Group
        </Text>
      </View>

      {/* Right Profile Section */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex-row items-center space-x-2"
      >
        {/* Profile Circle */}
        <View className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
          <Text className="text-white font-bold">MS</Text>
        </View>
        {/* Dropdown Icon */}
        <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          className="flex-1"
          onPress={() => setModalVisible(false)}
        >
          <View className="absolute top-20 right-4 bg-white rounded-lg shadow-lg p-4 w-60">
            {/* User Info */}
            <Text className="text-lg font-semibold text-teal-600 mb-2">
              Mayank Sharma
            </Text>
            <View className="border-b border-teal-300 mb-2"></View>
            {/* Options */}
            <TouchableOpacity className="flex-row items-center space-x-3 mb-3"
              onPress={() => navigation.navigate('Account')}
            >
              <MaterialIcons name="person" size={22} color="#4A5568" />
              <Text className="text-gray-700 text-base">Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center space-x-3 mb-3"
              onPress={() => navigation.navigate('Settings')}
            >
              <MaterialIcons name="settings" size={22} color="#4A5568" />
              <Text className="text-gray-700 text-base">Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center space-x-3">
              <MaterialIcons name="logout" size={22} color="#E53E3E" />
              <Text className="text-red-500 text-base">Logout</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Header;
