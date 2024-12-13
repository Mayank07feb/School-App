import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Layout from 'components/Layout';

const AttendanceScreen: React.FC = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: '1', date: 'Dec 10, 2024', status: 'Present' },
    { id: '2', date: 'Dec 11, 2024', status: 'Absent' },
    { id: '3', date: 'Dec 12, 2024', status: 'Present' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present':
        return '#2ecc71'; // Green
      case 'Absent':
        return '#e74c3c'; // Red
      default:
        return '#95a5a6'; // Gray
    }
  };

  const renderAttendanceItem = ({ item }: { item: { id: string; date: string; status: string } }) => (
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
      <Text className="text-lg font-semibold text-[#2c3e50]">{item.date}</Text>
      <Text
        className="text-sm font-bold"
        style={{ color: getStatusColor(item.status) }}
      >
        {item.status}
      </Text>
    </View>
  );

  return (
    <Layout>
      <View className="flex-1 bg-[#f4f5f7]">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View className="mb-6">
            <Text className="text-2xl font-bold text-center text-[#3B7CB8]">Attendance</Text>
            <Text className="text-sm text-center text-[#7f8c8d]">Track your attendance records.</Text>
          </View>

          <FlatList
            data={attendanceData}
            keyExtractor={(item) => item.id}
            renderItem={renderAttendanceItem}
            ListEmptyComponent={() => (
              <View className="items-center justify-center mt-10">
                <MaterialIcons name="folder-open" size={48} color="#95a5a6" />
                <Text className="text-lg text-[#95a5a6] mt-2">No attendance records available</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </Layout>
  );
};

export default AttendanceScreen;
