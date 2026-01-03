import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ margin: 16 }}>
      <Pressable
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' as never }],
          })
        }
        style={{
          backgroundColor: '#00ffff',
          borderRadius: 12,
          alignSelf: 'flex-start',
          padding: 10,
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
