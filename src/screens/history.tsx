import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { storage } from '../storage';

const History = () => {
  const learn = storage.getString('learn');
  const solve = storage.getString('solve');

  return (
    <SafeAreaView
      edges={['left', 'right', 'top']}
      style={{ flex: 1, padding: 14 }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          alignSelf: 'center',
          textAlign: 'auto',
          fontSize: 20,
        }}
      >
        History
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
        <Text>{learn}</Text>
        <Text>{solve}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({});
