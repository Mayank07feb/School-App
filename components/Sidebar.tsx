// Sidebar.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Sidebar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#008080', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Sidebar Menu
      </Text>

      {/* List of links or options */}
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
        onPress={() => navigation.navigate('Home')}
      >
        <MaterialIcons name="home" size={24} color="white" />
        <Text style={{ color: 'white', marginLeft: 10 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
        onPress={() => navigation.navigate('Profile')}
      >
        <MaterialIcons name="person" size={24} color="white" />
        <Text style={{ color: 'white', marginLeft: 10 }}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
        onPress={() => navigation.navigate('Settings')}
      >
        <MaterialIcons name="settings" size={24} color="white" />
        <Text style={{ color: 'white', marginLeft: 10 }}>Settings</Text>
      </TouchableOpacity>

      {/* Add more items as needed */}
    </View>
  );
};

export default Sidebar;
