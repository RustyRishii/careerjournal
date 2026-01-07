import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  RefreshControl,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ToastAndroid,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { storage } from '../storage';
import * as Clipboard from 'expo-clipboard';

const COLORS = {
  primary: '#5B4CE6',
  secondary: '#FF6B6B',
  accent: '#4ECDC4',
  background: '#F8F9FA',
  text: '#2C3E50',
  lightText: '#7F8C8D',
  border: '#E0E0E0',
  white: '#FFFFFF',
};

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

  const [learn, setLearn] = useState<string>('');
  const [solve, setSolve] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  async function getQuote() {
    const url = 'https://stoic-quotes.com/api/quote';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      const quote = result['text'];
      setQuote(quote);

      const author = result['author'];
      setAuthor(author);
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getQuote();
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  };

  function setActivity() {
    storage.set(`learn`, learn);
    storage.set('solve', solve);
    ToastAndroid.show('Saved', ToastAndroid.SHORT);
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(`${quote}\n\n— ${author}`);
    ToastAndroid.showWithGravity(
      'Quote copied',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView
        edges={['left', 'right', 'top']}
        style={{ marginVertical: 14, marginHorizontal: 14, flex: 1 }}
      >
        <ScrollView
          scrollEnabled={true}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
          nestedScrollEnabled={true}
        >
          <Text
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}
          >
            {day}
            {getDaySuffix(day)} {shortMonthName} {year}
          </Text>

          <Pressable
            onPress={() => {
              console.log('Quote copied');
              copyToClipboard();
            }}
            style={{
              marginVertical: 16,
              borderRadius: 8,
              borderLeftWidth: 8,
              borderLeftColor: 'aqua',
              backgroundColor: 'aliceblue',
              padding: 8,
              gap: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontStyle: 'italic' }}>{quote}</Text>
            <Text
              style={{ fontSize: 16, textAlign: 'right', fontStyle: 'italic' }}
            >
              –{author}
            </Text>
          </Pressable>

          <Text style={{ marginBottom: 8, fontSize: 18 }}>
            What did I learn today?
          </Text>
          <TextInput
            value={learn}
            onChangeText={setLearn}
            scrollEnabled={true}
            multiline={true}
            placeholder="Reflect on your new skills, insights, or any knowledge you gained today"
            style={{
              borderWidth: 1.5,
              borderColor: 'green',
              borderRadius: 12,
              paddingBottom: 10,
              // minHeight: 100,
              // maxHeight: 150,
              fontSize: 16,
            }}
          />

          <Text style={{ marginTop: 20, marginBottom: 8, fontSize: 18 }}>
            What did I solve today?
          </Text>

          <TextInput
            value={solve}
            onChangeText={setSolve}
            scrollEnabled={true}
            placeholder="Describe a challenege you came across today and fixed how you fixed it."
            multiline={true}
            style={{
              marginBottom: 30,
              borderColor: 'green',
              borderRadius: 12,
              borderWidth: 1.5,
              paddingBottom: 10,
              fontSize: 16,
            }}
          />
        </ScrollView>

        {/* Button outside ScrollView */}
        <Pressable
          disabled={learn === '' || solve === ''}
          onPress={() => setActivity()}
          style={{
            backgroundColor: 'aqua',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12,
            marginTop: 14,
          }}
        >
          <Text>Submit</Text>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  quoteContainer: {
    backgroundColor: COLORS.white,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accent,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    // marginBottom: 28,
  },
  quoteText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: COLORS.text,
    fontWeight: '500',
  },
});
