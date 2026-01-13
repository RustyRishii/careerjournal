import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Pressable,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '../../assets/Icons/leftArrow.svg';
import { storage } from '../storage';
import RenderStepForm from '../components/RenderStepForm';

const Details = () => {
  const [detailState, setDetailState] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gradYear, setGradYear] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string | null>(null); // CHANGED: Updated to string | null
  const [profession, setProfession] = useState<string>('');

  async function DetailNavAhead() {
    storage.set('user.name', name);
    storage.set('age', age);
    storage.set('gradYear', gradYear);
    storage.set('status', selectedValue ?? '');
    storage.set('profession', profession);

    setDetailState(detailState + 1);
    if (detailState == 4) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'BottomTabs' as never }],
      });
    }
  }

  async function DetailNavPrev() {
    if (detailState <= 4) {
      setDetailState(detailState - 1);
    }
  }

  function isCurrentStepValid() {
    switch (detailState) {
      case 1:
        return name !== '';
      case 2:
        return age !== '';
      case 3:
        return (
          gradYear !== '' && selectedValue !== null && selectedValue !== ''
        ); // CHANGED: Check selectedValue instead of status
      case 4:
        return profession !== '';
      default:
        return false;
    }
  }

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={0}
    >
      <SafeAreaView
        edges={['left', 'right', 'top']}
        style={{ flex: 1, padding: 14, backgroundColor: 'white' }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'flex-end',
          }}
        >
          <Pressable
            disabled={detailState == 1 ? true : false}
            onPress={() => {
              DetailNavPrev();
              console.log('Hahah');
            }}
          >
            <Text style={{ fontSize: 18 }}>
              <BackArrow
                style={{ opacity: detailState <= 1 ? 0.5 : 1 }}
                width={25}
                height={25}
              />
            </Text>
          </Pressable>

          <Text style={{ textAlign: 'center', fontSize: 24 }}>
            Career details
          </Text>

          <Text
            style={{
              fontSize: 18,
              textAlign: 'right',
              alignItems: 'flex-end',
              justifyContent: 'center',
              alignContent: 'flex-end',
            }}
          >
            {detailState}/4
          </Text>
        </View>

        {/* Form progress indicator */}
        <View
          style={{
            backgroundColor: 'darkgray',
            height: 10,
            marginVertical: 20,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              backgroundColor: 'aqua',
              height: 10,
              width: `${(detailState / 4) * 100}%`,
              borderRadius: 12,
            }}
          />
        </View>

        <View style={{ marginTop: 8 }} />

        <RenderStepForm
          detailState={detailState}
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          gradYear={gradYear}
          setGradYear={setGradYear}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          profession={profession}
          setProfession={setProfession}
        />

        <View style={{ marginTop: 8 }} />

        <View style={{ marginTop: 'auto' }}>
          <Pressable
            disabled={!isCurrentStepValid()}
            onPressIn={() => DetailNavAhead()}
            style={{
              backgroundColor: '#00ffff',
              padding: 10,
              opacity: isCurrentStepValid() ? 1 : 0.5,
              borderRadius: 12,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>
              {detailState == 4 ? 'Complete ➡️' : 'Continue'}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Details;

const styles = StyleSheet.create({});
