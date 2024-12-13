import React from 'react';
import { View, Text } from 'react-native';
import Layout from 'components/Layout';

const GeographyScreen: React.FC = () => {
  return (
    <Layout>
      <View className="flex-1 items-center justify-center bg-[#f4f5f7]">
        <Text className="text-3xl font-bold text-[#2c3e50]">Geography</Text>
        <Text className="text-lg text-[#7f8c8d] mt-4">Content for Geography subject will be here.</Text>
      </View>
    </Layout>
  );
};

export default GeographyScreen;