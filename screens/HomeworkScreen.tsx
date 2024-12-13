import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Layout from 'components/Layout';

const HomeworkScreen: React.FC = () => {
  const navigation = useNavigation();
  const [homework, setHomework] = useState([
    { id: '1', title: 'Algebra Problems', dueDate: 'Dec 16, 2024', status: 'Pending' },
    { id: '2', title: 'Physics Lab Report', dueDate: 'Dec 21, 2024', status: 'In Progress' },
    { id: '3', title: 'World History Notes', dueDate: 'Dec 19, 2024', status: 'Completed' },
    { id: '4', title: 'Creative Writing', dueDate: 'Dec 23, 2024', status: 'Pending' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return '#e74c3c'; // Red
      case 'In Progress':
        return '#f39c12'; // Orange
      case 'Completed':
        return '#2ecc71'; // Green
      default:
        return '#95a5a6'; // Gray
    }
  };

  const renderHomework = ({ item }: { item: { id: string; title: string; dueDate: string; status: string } }) => (
    <View
      key={item.id}
      className="bg-white rounded-lg p-4 mb-4 shadow-md"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
      }}
    >
      <Text className="text-lg font-semibold text-[#2c3e50]">{item.title}</Text>
      <Text className="text-sm text-[#7f8c8d]">Due: {item.dueDate}</Text>
      <View className="flex-row items-center justify-between mt-2">
        <Text
          className="text-sm font-bold"
          style={{ color: getStatusColor(item.status) }}
        >
          {item.status}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeworkDetails', { id: item.id })}
          className="p-2 rounded-full bg-[#3498db]"
        >
          <MaterialIcons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Layout>
      <View className="flex-1 bg-[#f4f5f7]">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {/* Header */}
          <View className="mb-6">
            <Text className="text-2xl text-center font-bold text-[#3B7CB8]">Homework</Text>
            <Text className="text-sm text-center text-[#7f8c8d]">Manage your homework and stay on top of deadlines</Text>
          </View>

          {/* Homework List */}
          <FlatList
            data={homework}
            keyExtractor={(item) => item.id}
            renderItem={renderHomework}
            ListEmptyComponent={() => (
              <View className="items-center justify-center mt-10">
                <MaterialIcons name="folder-open" size={48} color="#95a5a6" />
                <Text className="text-lg text-[#95a5a6] mt-2">No homework available</Text>
              </View>
            )}
          />

          {/* Add Homework Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('AddHomework')}
            className="mt-6 bg-[#1abc9c] rounded-lg py-4 items-center shadow-md"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text className="text-white font-bold">Add New Homework</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default HomeworkScreen;
