import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();

  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' }); // September
  const shortMonthName = date.toLocaleString('default', { month: 'short' }); // Sep

  const day = new Date().getDate();

  const year = new Date().getFullYear();

  const getDaySuffix = (day: number): string => {
    if (day === 1 || day === 21 || day === 31) return 'st';
    if (day === 2 || day === 22) return 'nd';
    if (day === 3 || day === 23) return 'rd';
    return 'th';
  };

  return (
    <SafeAreaView
      edges={['left', 'right', 'top']}
      style={{ marginVertical: 14, marginHorizontal: 14, flex: 1 }}
    >
      <ScrollView scrollEnabled={true} style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>
          {day}
          {getDaySuffix(day)} {shortMonthName} {year}
        </Text>

        <Text style={{ marginTop: 14, marginBottom: 8, fontSize: 18 }}>
          What did I learn today?
        </Text>
        <TextInput
          multiline={true}
          placeholder="Reflect on your new skills, insights, or any knowledge you gained today"
          style={{
            borderWidth: 1,
            borderRadius: 12,
            paddingBottom: 100,
            fontSize: 16,
          }}
        />

        <Text style={{ marginTop: 20, marginBottom: 8, fontSize: 18 }}>
          What did I solve today?
        </Text>

        <TextInput
          placeholder="Describe a challenege you came across today and fixed how you fixed it."
          multiline={true}
          style={{
            borderRadius: 12,
            borderWidth: 1,
            paddingBottom: 100,
            fontSize: 16,
          }}
        />
        <Pressable
          style={{
            marginTop: 'auto',
            backgroundColor: 'aqua',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12,
          }}
        >
          <Text>Submit</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
