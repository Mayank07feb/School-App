import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Layout from 'components/Layout';

const BacklogScreen: React.FC = () => {
  const [backlogs, setBacklogs] = useState([
    { id: '1', title: 'Chapter 4: Algebraic Equations', status: 'Incomplete' },
    { id: '2', title: 'Physics: Motion Problems', status: 'Pending Review' },
    { id: '3', title: 'History: Ancient Civilizations Notes', status: 'Incomplete' },
  ]);

  const renderBacklogItem = ({ item }: { item: { id: string; title: string; status: string } }) => (
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
      <Text className="text-lg text-center font-semibold text-[#3B7CB8]">{item.title}</Text>
      <Text className="text-sm text-center text-[#7f8c8d]">Status: {item.status}</Text>
    </View>
  );

  return (
    <Layout>
      <View className="flex-1 bg-[#f4f5f7]">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View className="mb-6">
            <Text className="text-2xl font-bold text-center text-[#3B7CB8]">Backlog</Text>
            <Text className="text-sm text-center text-[#7f8c8d]">Tasks and assignments you've yet to complete.</Text>
          </View>

          <FlatList
            data={backlogs}
            keyExtractor={(item) => item.id}
            renderItem={renderBacklogItem}
            ListEmptyComponent={() => (
              <View className="items-center justify-center mt-10">
                <MaterialIcons name="folder-open" size={48} color="#95a5a6" />
                <Text className="text-lg text-[#95a5a6] mt-2">No backlogs available</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </Layout>
  );
};

export default BacklogScreen;