import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();
  const today = new Date().toLocaleDateString();

  return (
    <SafeAreaView style={{ marginTop: 14, marginHorizontal: 14, flex: 1 }}>
      <Text style={{ textAlign: 'center' }}>Dec 29, 2025</Text>
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
      {/* <TextInput
        cursorColor={'green'}
        style={{
          flex: 8,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'black',
        }}
      /> */}

      <Text style={{ marginTop: 20, marginBottom: 8, fontSize: 18 }}>
        What did I solve today?
      </Text>

      {/* <TextInput
        placeholder="Describe a challenege you came across today and fixed how you fixed it. "
        cursorColor={'green'}
        style={{
          flex: 8,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'black',
        }}
      /> */}
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
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
