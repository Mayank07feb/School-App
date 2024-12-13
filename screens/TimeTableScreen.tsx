import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Layout from 'components/Layout';

// Define types for schedule
type Subject = {
  id: number;
  name: string;
  time: string;
  teacher: string;
  room: string;
  color: string;
  type?: 'lecture' | 'lab' | 'workshop';
};

const TimeTableScreen: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedView, setSelectedView] = useState<'daily' | 'weekly'>('daily');

  // Days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Screen dimensions for responsive design
  const { width } = Dimensions.get('window');

  // Updated color palette
  const colors = {
    background: '#dee3ee',
    primaryBg: '#ffffff',
    secondaryBg: '#f4f6f9',
    accent: '#4a90e2',
    text: '#2c3e50',
    lightText: '#6c757d',
    subjectColors: {
      lecture: '#4a90e2',
      lab: '#e74c3c',
      workshop: '#27ae60'
    }
  };

  // Sample timetable data (expanded from previous version)
  const timeTableData: Record<string, Subject[]> = {
    Monday: [
      { 
        id: 1, 
        name: 'Mathematics', 
        time: '08:00 - 09:30', 
        teacher: 'Mr. Johnson', 
        room: 'Room 201', 
        color: colors.subjectColors.lecture,
        type: 'lecture'
      },
      { 
        id: 2, 
        name: 'Science', 
        time: '09:45 - 11:15', 
        teacher: 'Ms. Garcia', 
        room: 'Lab 102', 
        color: colors.subjectColors.lab,
        type: 'lab'
      },
      { 
        id: 3, 
        name: 'English Literature', 
        time: '11:30 - 13:00', 
        teacher: 'Ms. Williams', 
        room: 'Room 305', 
        color: colors.subjectColors.workshop,
        type: 'workshop'
      }
    ],
    // ... (previous days data remains the same)
  };

  // Additional academic information
  const academicInfo = {
    currentSemester: 'Fall 2024',
    totalCredits: 18,
    classTeacher: 'Ms. Rodriguez'
  };

  const renderSubjectIcon = (type?: Subject['type']) => {
    switch(type) {
      case 'lecture':
        return <MaterialIcons name="computer" size={16} color={colors.subjectColors.lecture} />;
      case 'lab':
        return <MaterialIcons name="science" size={16} color={colors.subjectColors.lab} />;
      case 'workshop':
        return <MaterialIcons name="build" size={16} color={colors.subjectColors.workshop} />;
      default:
        return <Ionicons name="book-outline" size={16} color={colors.accent} />;
    }
  };

  return (
    <Layout>
      <View className="flex-1" style={{ backgroundColor: colors.background }}>
        {/* Header */}
        <View className="p-4 flex-row items-center justify-between" style={{ backgroundColor: colors.primaryBg }}>
          <Text className="text-2xl font-bold" style={{ color: colors.text }}>Time Table</Text>
          <View className="flex-row items-center space-x-4">
            <TouchableOpacity>
              <Ionicons name="download-outline" size={24} color={colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color={colors.accent} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Academic Info Bar */}
        <View 
          className="flex-row justify-between px-4 py-2 mb-4" 
          style={{ backgroundColor: colors.secondaryBg }}
        >
          <View>
            <Text className="text-xs" style={{ color: colors.lightText }}>Semester</Text>
            <Text className="text-sm" style={{ color: colors.text }}>
              {academicInfo.currentSemester}
            </Text>
          </View>
          <View>
            <Text className="text-xs" style={{ color: colors.lightText }}>Total Credits</Text>
            <Text className="text-sm" style={{ color: colors.text }}>
              {academicInfo.totalCredits}
            </Text>
          </View>
          <View>
            <Text className="text-xs" style={{ color: colors.lightText }}>Class Teacher</Text>
            <Text className="text-sm" style={{ color: colors.text }}>
              {academicInfo.classTeacher}
            </Text>
          </View>
        </View>

        {/* View Toggle */}
        <View className="flex-row justify-center mb-4">
          <TouchableOpacity 
            className={`px-4 py-2 rounded-l-full ${
              selectedView === 'daily' ? 'bg-[#4a90e2]' : 'bg-[#f4f6f9]'
            }`}
            onPress={() => setSelectedView('daily')}
          >
            <Text className={`text-sm ${
              selectedView === 'daily' ? 'text-white' : 'text-[#6c757d]'
            }`}>
              Daily View
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className={`px-4 py-2 rounded-r-full ${
              selectedView === 'weekly' ? 'bg-[#4a90e2]' : 'bg-[#f4f6f9]'
            }`}
            onPress={() => setSelectedView('weekly')}
          >
            <Text className={`text-sm ${
              selectedView === 'weekly' ? 'text-white' : 'text-[#6c757d]'
            }`}>
              Weekly View
            </Text>
          </TouchableOpacity>
        </View>

        {/* Day Selector */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="px-4 mb-4"
        >
          {days.map((day) => (
            <TouchableOpacity
              key={day}
              onPress={() => setSelectedDay(day)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedDay === day 
                  ? 'bg-[#4a90e2]' 
                  : 'bg-[#f4f6f9]'
              }`}
            >
              <Text 
                className={`text-sm font-semibold ${
                  selectedDay === day 
                    ? 'text-white' 
                    : 'text-[#6c757d]'
                }`}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Schedule List */}
        <ScrollView 
          className="px-4"
          contentContainerStyle={{ 
            paddingBottom: 100,
            flexGrow: 1 
          }}
        >
          {timeTableData[selectedDay].map((subject) => (
            <View 
              key={subject.id} 
              className="rounded-lg p-4 mb-4 flex-row items-center"
              style={{ 
                backgroundColor: colors.primaryBg,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3
              }}
            >
              <View 
                className="w-2 h-full rounded-l-lg absolute left-0" 
                style={{ backgroundColor: subject.color }}
              />
              <View className="ml-4 flex-1">
                <View className="flex-row items-center justify-between">
                  <Text 
                    className="text-lg font-bold"
                    style={{ color: colors.text }}
                  >
                    {subject.name}
                  </Text>
                  {renderSubjectIcon(subject.type)}
                </View>
                <View className="flex-row items-center mt-1">
                  <Ionicons 
                    name="time-outline" 
                    size={16} 
                    color={colors.accent} 
                  />
                  <Text 
                    className="ml-2"
                    style={{ color: colors.lightText }}
                  >
                    {subject.time}
                  </Text>
                </View>
                <View className="flex-row items-center mt-1">
                  <Ionicons 
                    name="person-outline" 
                    size={16} 
                    color={colors.accent} 
                  />
                  <Text 
                    className="ml-2"
                    style={{ color: colors.lightText }}
                  >
                    {subject.teacher}
                  </Text>
                </View>
                <View className="flex-row items-center mt-1">
                  <Ionicons 
                    name="location-outline" 
                    size={16} 
                    color={colors.accent} 
                  />
                  <Text 
                    className="ml-2"
                    style={{ color: colors.lightText }}
                  >
                    {subject.room}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default TimeTableScreen;