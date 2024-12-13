import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Modal, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Subjects from 'components/Subjects';
import Layout from 'components/Layout';

interface QuickActionProps {
  icon: React.ReactNode;
  text: string;
  onPress: () => void;
  bgColor?: string;
}

const CircularOverview: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { width } = Dimensions.get('window');
  const circleSize = width * 0.8;
  const radius = circleSize / 2;
  const navigation = useNavigation(); // Hook for navigation

  const sections = [
    { 
      label: 'Assignments', 
      icon: 'assignment', 
      value: '24', 
      color: '#3498db', // Blue
      position: 'top',
      screen: 'Assignments', // Target screen
    },
    { 
      label: 'Attendance', 
      icon: 'check-circle', 
      value: '95%', 
      color: '#2ecc71', // Green
      position: 'right',
      screen: 'Attendance'
    },
    { 
      label: 'Homework', 
      icon: 'book', 
      value: '18', 
      color: '#9b59b6', // Purple
      position: 'bottom',
      screen: 'Homework', // Target screen
    },
    { 
      label: 'Backlog', 
      icon: 'schedule', 
      value: '5', 
      color: '#e74c3c', // Red
      position: 'left',
      screen: 'Backlog'
    },
  ];

  const calculatePosition = (position: string) => {
    const bubbleSize = 100;
    const offset = radius - bubbleSize / 2;

    switch (position) {
      case 'top':
        return { top: 10, left: radius - bubbleSize / 2 };
      case 'bottom':
        return { bottom: 10, left: radius - bubbleSize / 2 };
      case 'left':
        return { left: 10, top: radius - bubbleSize / 2 };
      case 'right':
        return { right: 10, top: radius - bubbleSize / 2 };
      default:
        return {};
    }
  };

  return (
    <View
      className="bg-white rounded-full shadow-lg mb-6 items-center justify-center relative"
      style={{
        width: circleSize,
        height: circleSize,
        backgroundColor: 'rgba(20, 184, 166, 0.05)', // Soft teal background
      }}
    >
      {/* Circular Sections */}
      {sections.map((section) => (
        <TouchableOpacity
          key={section.label}
          onPress={() => {
            setActiveSection(section.label);
            if (section.screen) {
              navigation.navigate(section.screen); // Navigate to the target screen
            }
          }}
          className="absolute"
          style={{
            ...calculatePosition(section.position),
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: activeSection === section.label
              ? `${section.color}80` // Slightly transparent active color
              : `${section.color}30`, // Light transparent color for inactive
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: section.color,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <MaterialIcons name={section.icon as any} size={30} color={section.color} />
          <Text className="text-sm font-bold mt-1" style={{ color: section.color }}>
            {section.value}
          </Text>
          <Text className="text-xs" style={{ color: section.color }}>
            {section.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout>
      <View className="flex-1 bg-[#f4f5f7]">
        <ScrollView className="flex-1 p-4" contentContainerStyle={{ paddingBottom: 40 }}>
          {/* Profile Header */}
          <View className="bg-white rounded-2xl shadow-lg mb-6 p-5 flex-row items-center">
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
              className="w-16 h-16 rounded-full mr-4 border-2 border-[#14B8A6]"
            />
            <View className="flex-1">
              <Text className="text-xl font-bold text-[#2c3e50]">Dr. Emily Rodriguez</Text>
              <Text className="text-[#7f8c8d] text-sm">School Principal</Text>
            </View>
            <TouchableOpacity 
              onPress={() => setModalVisible(true)} 
              className="p-2 bg-[#3498db] rounded-full"
            >
              <MaterialIcons name="edit" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Subjects />

          {/* Circular Section with Detailed Overview */}
          <View className="items-center justify-center">
            <CircularOverview />
          </View>

          {/* Quick Actions Grid */}
          <View className="grid grid-cols-2 gap-4 mb-6">
            <QuickActionCard 
              icon={<MaterialIcons name="person-add" size={28} color="white" />}
              text="Student Admission" 
              onPress={() => navigation.navigate('StudentAdmission')}
              bgColor="bg-[#3498db]" // Blue
            />
            <QuickActionCard 
              icon={<MaterialIcons name="people" size={28} color="white" />}
              text="Staff Management" 
              onPress={() => navigation.navigate('StaffManagement')}
              bgColor="bg-[#e74c3c]" // Red
            />
          </View>

          {/* Performance Summary */}
          <View className="grid grid-cols-2 gap-4 mb-6">
            <PerformanceCard label="Total Students" value="1,250" bgColor="bg-[#3498db]" />
            <PerformanceCard label="Staff Members" value="85" bgColor="bg-[#e74c3c]" />
            <PerformanceCard label="Average Grade" value="A-" bgColor="bg-[#9b59b6]" />
            <PerformanceCard label="Pass %" value="92%" bgColor="bg-[#1abc9c]" />
          </View>

          {/* Academic Tools */}
          <View className="grid grid-cols-2 gap-4 mb-6">
            <QuickActionCard 
              icon={<MaterialIcons name="library-books" size={28} color="white" />}
              text="Exam Portal" 
              onPress={() => navigation.navigate('ExamPortal')}
              bgColor="bg-[#34495e]" // Dark gray
            />
            <QuickActionCard 
              icon={<MaterialIcons name="book" size={28} color="white" />}
              text="Online Library" 
              onPress={() => navigation.navigate('OnlineLibrary')}
              bgColor="bg-[#2ecc71]" // Green
            />
          </View>
        </ScrollView>
      </View>

      {/* Edit Profile Modal */}
      <EditProfileModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </Layout>
  );
};

const QuickActionCard: React.FC<QuickActionProps> = ({ icon, text, onPress, bgColor = 'bg-[#3498db]' }) => (
  <TouchableOpacity 
    onPress={onPress}
    className={`${bgColor} rounded-2xl p-4 items-center justify-center shadow-md`}
  >
    <View className="mb-2">{icon}</View>
    <Text className="text-white text-center font-semibold">{text}</Text>
  </TouchableOpacity>
);

const PerformanceCard: React.FC<{ label: string; value: string; bgColor: string }> = ({ label, value, bgColor }) => (
  <View className={`${bgColor} rounded-2xl p-4 items-center justify-center shadow-md`}>
    <Text className="text-white text-2xl font-bold mb-1">{value}</Text>
    <Text className="text-white/80 text-xs text-center">{label}</Text>
  </View>
);

const EditProfileModal: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => (
  <Modal transparent={true} animationType="slide" visible={visible} onRequestClose={onClose}>
    <View className="flex-1 justify-center items-center bg-black/50">
      <View className="bg-white rounded-2xl w-80 p-6 shadow-2xl">
        <Text className="text-xl font-bold text-[#2c3e50] mb-4 text-center">Edit Profile</Text>
        <TouchableOpacity onPress={onClose} className="bg-[#e74c3c] py-3 rounded-xl">
          <Text className="text-white text-center font-semibold">Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default HomeScreen;
