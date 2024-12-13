import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Layout from 'components/Layout';

const AssignmentsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [assignments, setAssignments] = useState([
    { id: '1', title: 'Math Homework', dueDate: 'Dec 15, 2024', status: 'Pending' },
    { id: '2', title: 'Science Project', dueDate: 'Dec 20, 2024', status: 'In Progress' },
    { id: '3', title: 'History Essay', dueDate: 'Dec 18, 2024', status: 'Completed' },
    { id: '4', title: 'Art Assignment', dueDate: 'Dec 22, 2024', status: 'Pending' },
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

  const renderAssignment = ({ item }: { item: { id: string; title: string; dueDate: string; status: string } }) => (
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
          onPress={() => navigation.navigate('AssignmentDetails', { id: item.id })}
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
            <Text className="text-2xl font-bold text-center text-[#3B7CB8]">Assignments</Text>
            <Text className="text-sm text-center text-[#7f8c8d]">Keep track of your assignments and their progress</Text>
          </View>

          {/* Assignment List */}
          <FlatList
            data={assignments}
            keyExtractor={(item) => item.id}
            renderItem={renderAssignment}
            ListEmptyComponent={() => (
              <View className="items-center justify-center mt-10">
                <MaterialIcons name="folder-open" size={48} color="#95a5a6" />
                <Text className="text-lg text-[#95a5a6] mt-2">No assignments available</Text>
              </View>
            )}
          />

          {/* Add Assignment Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('AddAssignment')}
            className="mt-6 bg-[#1abc9c] rounded-lg py-4 items-center shadow-md"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text className="text-white font-bold">Add New Assignment</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default AssignmentsScreen;
