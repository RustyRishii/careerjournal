import { useNavigation } from '@react-navigation/native';
import React, { memo, useState } from 'react';
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
  Dimensions,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { storage } from '../storage';
import * as Clipboard from 'expo-clipboard';
// import * as data from '../quotes.json';
import quotesData from '../quotes.json';

const screenHeight = Dimensions.get('window').height;

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

const QuoteDisplay = memo(
  ({
    quote,
    author,
    onCopy,
  }: {
    quote: string;
    author: string;
    onCopy: () => void;
  }) => {
    console.log('QuoteDisplay rendered'); // You'll see this only when quote/author changes
    return (
      <Pressable
        onPress={onCopy}
        style={{
          marginVertical: 16,
          borderRadius: 8,
          borderLeftWidth: 8,
          borderLeftColor: 'aqua',
          backgroundColor: 'aliceblue',
          alignContent: 'center',
          justifyContent: 'center',
          height: screenHeight * 0.3,
          padding: 8,
          gap: 8,
        }}
      >
        <Text style={{ fontSize: 18, fontStyle: 'italic' }}>{quote}</Text>
        <Text style={{ fontSize: 18, textAlign: 'right', fontStyle: 'italic' }}>
          –{author}
        </Text>
      </Pressable>
    );
  },
);

const Home = () => {
  const navigation = useNavigation();

  // const { quotes } = data;

  // console.log(quotes);

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

  // async function getQuote() {
  //   const url = 'https://stoic-quotes.com/api/quote';
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }

  //     const result = await response.json();

  //     const quote = result['text'];
  //     setQuote(quote);

  //     const author = result['author'];
  //     setAuthor(author);
  //   } catch (error: unknown) {
  //     if (error instanceof Error) console.error(error.message);
  //   }
  // }

  useEffect(() => {
    onRefresh();
  }, []);

  const fetchQuote = () => {
    // Get the quotes array from your JSON
    const quotesArray = quotesData.quotes;

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * quotesArray.length);

    // Get the random quote object
    const randomQuote = quotesArray[randomIndex];

    // Update your state
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);

    console.log(randomQuote.text);
    console.log(randomQuote.author);
  };

  const onRefresh = () => {
    fetchQuote();
    console.log('yooooooooo');
    // console.log('Refreshed');
    setRefreshing(true);
    // getQuote();
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
        <View>
          <Text
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}
          >
            {day}
            {getDaySuffix(day)} {shortMonthName} {year}
          </Text>
        </View>
        <ScrollView
          scrollEnabled={true}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            paddingBottom: 20,
          }}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
          nestedScrollEnabled={true}
        >
          {/* <Pressable
            onPress={() => {
              copyToClipboard();
            }}
            className=" border-l-[#00ffff] border-l-8 mt-4 my-2 p-2 bg-[#f0f8ff] rounded-2xl "
          >
            <Text style={{ fontSize: 18, fontStyle: 'italic' }}>{quote}</Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 12,
                textAlign: 'right',
                fontStyle: 'italic',
              }}
            >
              -{author}
            </Text>
          </Pressable> */}

          <Pressable
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              const { width } = event.nativeEvent.layout;
              console.log('📏 Quote section height & width:', height, width);
            }}
            onPress={() => {
              copyToClipboard();
            }}
            className="border-l-[#00ffff] h-[180px] align-middle justify-center border-l-8 mt-4 my-2 p-2 bg-[#f0f8ff] rounded-2xl"
          >
            <Text style={{ fontSize: 18, fontStyle: 'italic' }}>{quote}</Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 12,
                textAlign: 'right',
                fontStyle: 'italic',
              }}
            >
              -{author}
            </Text>
          </Pressable>

          <View className="flex-row m-5 j justify-between content-center">
            <Pressable hitSlop={10} onPress={() => onRefresh()}>
              <Text className="text-[18px]">🔄</Text>
            </Pressable>

            <Pressable
              hitSlop={10}
              onPress={() => console.log('Saved to server')}
            >
              <Text className="text-[18px]">💾</Text>
            </Pressable>

            <Pressable hitSlop={10} onPress={() => copyToClipboard()}>
              <Text className="text-[18px]">©️</Text>
            </Pressable>
          </View>

          {/* <Text>{Math.floor(Math.random() * 100) + 1}</Text> */}
          <Text className="text-center font-bold text-2xl my-3 ">
            Daily reflection
          </Text>

          <View>
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
                height: screenHeight * 0.12,
                fontSize: 16,
              }}
            />
          </View>

          <View>
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
                height: screenHeight * 0.12,
                borderWidth: 1.5,
                paddingBottom: 10,
                fontSize: 16,
              }}
            />
          </View>
        </ScrollView>

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
