import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '../../assets/Icons/leftArrow.svg';

type RenderStepFormProps = {
  detailState: number;
  name: string;
  setName: (name: string) => void;
  age: string;
  setAge: (age: string) => void;
  gradYear: string;
  setGradYear: (gradYear: string) => void;
  status: string;
  setStatus: (status: string) => void;
  city: string;
  setCity: (city: string) => void;
};

const RenderStepForm: React.FC<RenderStepFormProps> = ({
  detailState,
  name,
  setName,
  age,
  setAge,
  gradYear,
  setGradYear,
  status,
  setStatus,
  city,
  setCity,
}) => {
  switch (detailState) {
    case 1:
      return (
        <View>
          <Text style={{ fontSize: 16 }}>Name</Text>
          <View style={{ marginBottom: 8 }} />
          <TextInput
            value={name}
            onChangeText={setName}
            autoFocus={true}
            autoComplete="name"
            placeholder="John Doe"
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
            }}
          />
          <View style={{ marginBottom: 8 }} />
          <Text style={{ color: 'darkgray', fontSize: 12 }}>
            Please press continue to proceed
          </Text>
        </View>
      );

    case 2:
      return (
        <View>
          <Text style={{ fontSize: 16 }}>Age</Text>
          <View style={{ marginBottom: 8 }} />
          <TextInput
            placeholder="Age"
            maxLength={2}
            value={age}
            key="age-input"
            onChangeText={setAge}
            keyboardType="number-pad"
            autoFocus={true}
            style={{
              borderRadius: 8,
              borderWidth: 1,
              padding: 12,
              fontSize: 16,
            }}
          />
          {/* <TextInput
            value={age}
            onChangeText={setAge}
            keyboardType="number-pad"
            autoFocus={true}
            placeholder="Age"
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
            }}
          /> */}
        </View>
      );
    case 3:
      return (
        <View>
          <Text style={{ fontSize: 16 }}>Year of graduation</Text>
          <View style={{ marginBottom: 8 }} />
          <TextInput
            keyboardType="numeric"
            value={gradYear}
            onChangeText={setGradYear}
            autoFocus={true}
            placeholder="Graduation year"
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
            }}
          />

          <View style={{ marginVertical: 16 }} />

          <Text style={{ fontSize: 16 }}>Employment status</Text>
          <View style={{ marginBottom: 8 }} />
          <TextInput
            value={status}
            onChangeText={setStatus}
            autoFocus={true}
            placeholder=" Student / Employed / UnEmployed / Freelancer"
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
            }}
          />
        </View>
      );

    case 4:
      return (
        <View>
          <Text style={{ fontSize: 16 }}>Current city</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            autoFocus={true}
            placeholder="City"
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 12,
              fontSize: 16,
            }}
          />
        </View>
      );
    default:
      return null;
  }
};

const Details = () => {
  const [detailState, setDetailState] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gradYear, setGradYear] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [city, setCity] = useState<string>('');

  async function DetailNavAhead() {
    setDetailState(detailState + 1);
    if (detailState == 4) {
      navigation.navigate('BottomTabs');
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
        return gradYear !== '' && status !== '';
      case 4:
        return city !== '';
      default:
        return false;
    }
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, padding: 14, backgroundColor: 'white' }}>
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
        status={status}
        setStatus={setStatus}
        city={city}
        setCity={setCity}
      />
      <View style={{ marginTop: 8 }} />

      <View style={{ marginTop: 'auto' }}>
        <Pressable
          disabled={!isCurrentStepValid()}
          onPressIn={() => DetailNavAhead()}
          style={{
            backgroundColor: '#00ffff',
            padding: 10,
            // opacity: name == '' ? 0.5 : 1,
            opacity: isCurrentStepValid() ? 1 : 0.5,
            borderRadius: 12,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{}}>
            {detailState == 4 ? 'Complete ➡️' : 'Continue'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
