import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Refined Color Palette with Gradient and Depth
const colorSchemes = {
  professionalBlue: {
    background: '#3B7CB8',  // Deep, professional blue
    backgroundGradient: ['#3B7CB8', '#2C5E8F'],
    activeBackground: 'rgba(255, 255, 255, 0.25)',
    iconColor: '#FFFFFF',
    textColor: '#F0F4F8',
    shadowColor: '#2C5E8F'
  },
  elegantNavy: {
    background: '#1A365D',  // Rich navy with depth
    backgroundGradient: ['#1A365D', '#123046'],
    activeBackground: 'rgba(255, 255, 255, 0.2)',
    iconColor: '#E6E6E6',
    textColor: '#E6E6E6',
    shadowColor: '#0A1B2A'
  },
  modernSlate: {
    background: '#4A5568',  // Contemporary slate
    backgroundGradient: ['#4A5568', '#374151'],
    activeBackground: 'rgba(255, 255, 255, 0.25)',
    iconColor: '#F7FAFC',
    textColor: '#F7FAFC',
    shadowColor: '#374151'
  }
};

const BottomBar: React.FC<{ 
  colorScheme?: keyof typeof colorSchemes,
  customColor?: string 
}> = ({ 
  colorScheme = 'professionalBlue',
  customColor 
}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState<string>('Home');
  
  // Color selection logic
  const colors = customColor 
    ? {
        background: customColor,
        backgroundGradient: [customColor, customColor],
        activeBackground: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#FFFFFF',
        textColor: '#FFFFFF',
        shadowColor: customColor
      }
    : colorSchemes[colorScheme];

  useEffect(() => {
    setActiveTab(route.name);
  }, [route]);

  const handleNavigation = (tab: string) => {
    navigation.navigate(tab);
  };

  const renderTabButton = (name: string, icon: string, label: string) => (
    <TouchableOpacity
      className="flex items-center"
      onPress={() => handleNavigation(name)}
    >
      <View
        className="bg-opacity-20 p-1 rounded-full"
        style={{
          backgroundColor: activeTab === name ? colors.activeBackground : 'transparent',
        }}
      >
        <Icon 
          name={icon} 
          size={22} 
          color={colors.iconColor} 
        />
      </View>
      <Text
        className="text-xs mt-1"
        style={{
          color: colors.textColor,
          fontWeight: activeTab === name ? 'bold' : 'normal',
          opacity: activeTab === name ? 1 : 0.8
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      className="absolute bottom-0 w-full flex-row justify-around items-center py-2 rounded-t-3xl shadow-2xl"
      style={{
        backgroundColor: colors.background,
        backgroundImage: `linear-gradient(to bottom, ${colors.backgroundGradient[0]}, ${colors.backgroundGradient[1]})`,
        width: width,
        paddingBottom: 5,
        shadowColor: colors.shadowColor,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6,
      }}
    >
      {renderTabButton('Home', 'home-outline', 'Home')}
      {renderTabButton('TimeTable', 'calendar-outline', 'Timetable')}
      {renderTabButton('Account', 'person-outline', 'Account')}
    </View>
  );
};

export default BottomBar;