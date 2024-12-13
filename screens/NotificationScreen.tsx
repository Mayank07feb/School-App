import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Layout from '../components/Layout';

const NotificationScreen: React.FC = () => {
  // School management notification data
  const notifications = [
    { id: 1, title: 'Class Schedule Update', message: 'Your class schedule has been updated for the upcoming week.' },
    { id: 2, title: 'Examination Timetable', message: 'The timetable for upcoming exams has been released. Please check the details.' },
    { id: 3, title: 'Parent-Teacher Meeting', message: 'The Parent-Teacher meeting will be held on 10th December at 3 PM.' },
    { id: 4, title: 'School Holiday Announcement', message: 'School will be closed for the winter break from 20th December to 2nd January.' },
  ];

  return (
    <Layout>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }} className="flex-1 p-4 bg-[#F0F4F8] h-screen">
        <Text className="text-2xl font-bold text-[#1E293B] mb-6">Notifications</Text>

        {/* Notification List */}
        {notifications.map((notification) => (
          <View
            key={notification.id}
            className="bg-white p-5 rounded-lg shadow-lg mb-5"
          >
            <Text className="text-xl font-semibold text-[#1E293B]">{notification.title}</Text>
            <Text className="text-gray-600 text-sm mt-1">{notification.message}</Text>

            <TouchableOpacity className="flex-row items-center mt-4">
              <Text className="text-[#38A169] text-base">Read More</Text>
              <MaterialIcons name="arrow-forward" size={24} color="#38A169" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};

export default NotificationScreen;
