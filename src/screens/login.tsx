import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import React, { useImperativeHandle, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/onboardingImages/logo.svg';
import GoogleLogo from '../../assets/Icons/google.svg';

const Login = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      animation: 'slide_from_right',
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 14,
      }}
    >
      <Logo
        style={{
          alignSelf: 'center',
        }}
        width={'20%'}
        height={'20%'}
      />

      <Text style={{ textAlign: 'center', fontSize: 20 }}>Welcome back</Text>

      <View style={{ marginVertical: 8 }} />

      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
        }}
        numberOfLines={2}
      >
        {`Sign in to continue documenting \n your professional journey`}
      </Text>

      <View style={{ marginVertical: 64 }} />

      {/* <Text style={{ marginBottom: 8 }}>Email Address</Text>
      <TextInput
        style={{ borderRadius: 8, borderWidth: 1 }}
        placeholder="name@gmail.com"
      /> */}

      <Pressable
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Details' as never }],
          })
        }
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          gap: 16,
          backgroundColor: 'aqua',
          padding: 16,
          borderWidth: 1,
          borderRadius: 16,
        }}
      >
        <GoogleLogo
          //   style={{ backgroundColor: 'aqua' }}
          width={'10%'}
          height={'100%'}
        />
        <Text style={{ fontSize: 16 }}>Sign in with google</Text>
      </Pressable>

      {/* <Pressable
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Details' as never }],
          })
        }
        style={{
          backgroundColor: '#00ffff',
          padding: 10,
          alignSelf: 'center',
          borderRadius: 12,
          marginTop: 'auto',
        }}
      >
        <Text style={{}}> Login</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
