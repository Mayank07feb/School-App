import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  // Color Palette
  const colors = {
    primary: '#3B7CB8',       // Professional deep blue
    secondary: '#2C5E8F',     // Slightly darker blue for depth
    background: '#FFFFFF',    // Clean white background for modal
    text: {
      primary: '#FFFFFF',     // White for header text
      secondary: '#1E3A8A',   // Deep blue for user name
      muted: '#4A5568',       // Slate gray for menu items
      logout: '#E53E3E'       // Red for logout
    },
    profile: {
      background: '#1A365D',  // Dark navy for profile circle
      text: '#FFFFFF'         // White text in profile circle
    }
  };

  // Function to open the sidebar (drawer)
  const openSidebar = () => {
    navigation.openDrawer();
  };

  // Render Menu Option
  const renderMenuOption = (
    iconName: string, 
    text: string, 
    textColor: string, 
    onPressNavigate?: string
  ) => (
    <TouchableOpacity 
      className="flex-row items-center space-x-3 mb-3"
      onPress={() => onPressNavigate && navigation.navigate(onPressNavigate)}
    >
      <MaterialIcons name={iconName} size={22} color={textColor} />
      <Text className={`text-base`} style={{ color: textColor }}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View 
      className="w-full flex-row items-center justify-between p-4 border-b shadow-md"
      style={{ 
        backgroundColor: colors.primary,
        borderBottomColor: colors.secondary,
      }}
    >
      {/* Left Section with Hamburger Icon and Title */}
      <View className="flex-row items-center">
        {/* Hamburger Icon for Sidebar */}
        <TouchableOpacity onPress={openSidebar} className="mr-4">
          <MaterialIcons name="menu" size={28} color={colors.text.primary} />
        </TouchableOpacity>
        {/* Logo and Title */}
        <Text 
          className="text-lg font-semibold"
          style={{ color: colors.text.primary }}
        >
          School Management
        </Text>
      </View>
      
      {/* Right Profile Section */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex-row items-center space-x-2"
      >
        {/* Profile Circle */}
        <View 
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: colors.profile.background 
          }}
        >
          <Text 
            className="font-bold"
            style={{ 
              color: colors.profile.text 
            }}
          >
            MS
          </Text>
        </View>
        {/* Dropdown Icon */}
        <MaterialIcons 
          name="keyboard-arrow-down" 
          size={24} 
          color={colors.text.primary} 
        />
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
          <View 
            className="absolute top-20 right-4 rounded-lg shadow-lg p-4 w-60"
            style={{
              backgroundColor: colors.background,
            }}
          >
            {/* User Info */}
            <Text 
              className="text-lg font-semibold mb-2"
              style={{ color: colors.text.secondary }}
            >
              Mayank Sharma
            </Text>
            <View 
              className="border-b mb-2"
              style={{ borderBottomColor: colors.secondary }}
            ></View>
            
            {/* Options */}
            {renderMenuOption('person', 'Profile', colors.text.muted, 'Account')}
            {renderMenuOption('settings', 'Settings', colors.text.muted, 'Settings')}
            {renderMenuOption('logout', 'Logout', colors.text.logout)}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Header;