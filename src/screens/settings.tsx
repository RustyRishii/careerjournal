import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { storage } from '../storage';

const ProfileDetails = () => {
  const username = storage.getString('user.name');
  const age = storage.getString('age');
  const gradYear = storage.getString('gradYear');
  const status = storage.getString('status');
  const city = storage.getString('city');

  return (
    <View
      style={{
        gap: 4,
        backgroundColor: 'aliceblue',
        borderRadius: 12,
      }}
    >
      <View style={styles.table}>
        <Text style={{ fontSize: 16 }}>Name</Text>
        <Text style={{ fontSize: 16 }}>{username}</Text>
      </View>

      <View style={[styles.table]}>
        <Text style={{ fontSize: 16 }}>Age</Text>
        <Text style={{ fontSize: 16 }}>{age}</Text>
      </View>

      <View style={[styles.table]}>
        <Text style={{ fontSize: 16 }}>Graduation year</Text>
        <Text style={{ fontSize: 16 }}>{gradYear}</Text>
      </View>

      <View style={[styles.table]}>
        <Text style={{ fontSize: 16 }}>Status</Text>
        <Text style={{ fontSize: 16 }}>{status}</Text>
      </View>

      <View style={[styles.table, { borderBottomWidth: 0 }]}>
        <Text style={{ fontSize: 16 }}>City</Text>
        <Text style={{ fontSize: 16 }}>{city}</Text>
      </View>
    </View>
  );
};

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{
        flex: 1,
        padding: 14,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          alignContent: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        source={{
          uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
      />
      <View style={{ marginVertical: 10 }}>
        <ProfileDetails />
      </View>

      <Pressable
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' as never }],
          })
        }
        style={{
          marginTop: 'auto',
          backgroundColor: '#00ffff',
          borderRadius: 12,
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  table: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
});
