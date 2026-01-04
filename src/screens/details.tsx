// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import {
//   Pressable,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   KeyboardAvoidingView,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import BackArrow from '../../assets/Icons/leftArrow.svg';
// import { storage } from '../storage';
// import RNPickerSelect from 'react-native-picker-select';

// type RenderStepFormProps = {
//   detailState: number;
//   name: string;
//   setName: (name: string) => void;
//   age: string;
//   setAge: (age: string) => void;
//   gradYear: string;
//   setGradYear: (gradYear: string) => void;
//   selectedValue: string;
//   setStatus: (status: string) => void;
//   city: string;
//   setCity: (city: string) => void;
// };

// const RenderStepForm: React.FC<RenderStepFormProps> = ({
//   detailState,
//   name,
//   setName,
//   age,
//   setAge,
//   gradYear,
//   setGradYear,
//   selectedValue,
//   setStatus,
//   city,
//   setCity,
// }) => {
//   switch (detailState) {
//     case 1:
//       return (
//         <View>
//           <Text style={{ fontSize: 16 }}>Name</Text>
//           <View style={{ marginBottom: 8 }} />
//           <TextInput
//             value={name}
//             onChangeText={setName}
//             autoFocus={true}
//             autoComplete="name"
//             placeholder="John Doe"
//             style={{
//               borderWidth: 1,
//               borderRadius: 8,
//               padding: 12,
//               fontSize: 16,
//             }}
//           />
//           <View style={{ marginBottom: 8 }} />
//           <Text style={{ color: 'darkgray', fontSize: 12 }}>
//             Please press continue to proceed
//           </Text>
//         </View>
//       );

//     case 2:
//       return (
//         <View>
//           <Text style={{ fontSize: 16 }}>Age</Text>
//           <View style={{ marginBottom: 8 }} />
//           <TextInput
//             placeholder="Age"
//             maxLength={2}
//             value={age}
//             key="age-input"
//             onChangeText={setAge}
//             keyboardType="number-pad"
//             autoFocus={true}
//             style={{
//               borderRadius: 8,
//               borderWidth: 1,
//               padding: 12,
//               fontSize: 16,
//             }}
//           />
//           {/* <TextInput
//             value={age}
//             onChangeText={setAge}
//             keyboardType="number-pad"
//             autoFocus={true}
//             placeholder="Age"
//             style={{
//               borderWidth: 1,
//               borderRadius: 8,
//               padding: 12,
//               fontSize: 16,
//             }}
//           /> */}
//         </View>
//       );
//     case 3:
//       return (
//         <View>
//           <Text style={{ fontSize: 16 }}>Year of graduation</Text>
//           <View style={{ marginBottom: 8 }} />
//           <TextInput
//             keyboardType="numeric"
//             value={gradYear}
//             onChangeText={setGradYear}
//             maxLength={4}
//             autoFocus={true}
//             placeholder="Graduation year"
//             style={{
//               borderWidth: 1,
//               borderRadius: 8,
//               padding: 12,
//               fontSize: 16,
//             }}
//           />

//           <View style={{ marginVertical: 16 }} />

//           <Text style={{ fontSize: 16 }}>Employment status</Text>
//           <View style={{ marginBottom: 8 }} />
//           <RNPickerSelect
//             onValueChange={(value) => setSelectedValue(value)}
//             items={[
//               { label: 'Student', value: 'student' },
//               { label: 'Employed', value: 'employed' },
//               { label: 'Unemployed', value: 'unemployed' },
//               { label: 'Freelancer', value: 'freelancer' },
//             ]}
//             value={selectedValue}
//             placeholder={{ label: 'Select status...', value: null }}
//           />
//         </View>
//       );

//     case 4:
//       return (
//         <View>
//           <Text style={{ fontSize: 16 }}>Current city</Text>
//           <TextInput
//             value={city}
//             onChangeText={setCity}
//             autoFocus={true}
//             placeholder="City"
//             style={{
//               borderWidth: 1,
//               borderRadius: 8,
//               padding: 12,
//               fontSize: 16,
//             }}
//           />
//         </View>
//       );
//     default:
//       return null;
//   }
// };

// const Details = () => {
//   const [detailState, setDetailState] = useState<number>(1);
//   const [name, setName] = useState<string>('');
//   const [age, setAge] = useState<string>('');
//   const [gradYear, setGradYear] = useState<string>('');
//   const [status, setStatus] = useState<string>('');
//   const [selectedValue, setSelectedValue] = useState<string>('');
//   const [city, setCity] = useState<string>('');

//   async function DetailNavAhead() {
//     storage.set('user.name', name);
//     storage.set('age', age);
//     storage.set('gradYear', gradYear);
//     storage.set('status', status);
//     storage.set('city', city);

//     setDetailState(detailState + 1);
//     if (detailState == 4) {
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'BottomTabs' as never }],
//       });
//     }
//   }

//   async function DetailNavPrev() {
//     if (detailState <= 4) {
//       setDetailState(detailState - 1);
//     }
//   }

//   function isCurrentStepValid() {
//     switch (detailState) {
//       case 1:
//         return name !== '';
//       case 2:
//         return age !== '';
//       case 3:
//         return gradYear !== '' && status !== '';
//       case 4:
//         return city !== '';
//       default:
//         return false;
//     }
//   }

//   const navigation = useNavigation();

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//       keyboardVerticalOffset={0}
//     >
//       <SafeAreaView
//         edges={['left', 'right', 'top']}
//         style={{ flex: 1, padding: 14, backgroundColor: 'white' }}
//       >
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             alignContent: 'flex-end',
//           }}
//         >
//           <Pressable
//             disabled={detailState == 1 ? true : false}
//             onPress={() => {
//               DetailNavPrev();
//               console.log('Hahah');
//             }}
//           >
//             <Text style={{ fontSize: 18 }}>
//               <BackArrow
//                 style={{ opacity: detailState <= 1 ? 0.5 : 1 }}
//                 width={25}
//                 height={25}
//               />
//             </Text>
//           </Pressable>

//           <Text style={{ textAlign: 'center', fontSize: 24 }}>
//             Career details
//           </Text>

//           <Text
//             style={{
//               fontSize: 18,
//               textAlign: 'right',
//               alignItems: 'flex-end',
//               justifyContent: 'center',
//               alignContent: 'flex-end',
//             }}
//           >
//             {detailState}/4
//           </Text>
//         </View>

//         {/* Form progress indicator */}
//         <View
//           style={{
//             backgroundColor: 'darkgray',
//             height: 10,
//             marginVertical: 20,
//             borderRadius: 12,
//           }}
//         >
//           <View
//             style={{
//               backgroundColor: 'aqua',
//               height: 10,
//               width: `${(detailState / 4) * 100}%`,
//               borderRadius: 12,
//             }}
//           />
//         </View>

//         <View style={{ marginTop: 8 }} />
//         <RenderStepForm
//           detailState={detailState}
//           name={name}
//           setName={setName}
//           age={age}
//           setAge={setAge}
//           gradYear={gradYear}
//           setGradYear={setGradYear}
//           status={status}
//           setStatus={setStatus}
//           city={city}
//           setCity={setCity}
//         />
//         <View style={{ marginTop: 8 }} />

//         <View style={{ marginTop: 'auto' }}>
//           <Pressable
//             disabled={!isCurrentStepValid()}
//             onPressIn={() => DetailNavAhead()}
//             style={{
//               backgroundColor: '#00ffff',
//               padding: 10,
//               // opacity: name == '' ? 0.5 : 1,
//               opacity: isCurrentStepValid() ? 1 : 0.5,
//               borderRadius: 12,
//               justifyContent: 'center',
//               alignContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <Text style={{}}>
//               {detailState == 4 ? 'Complete ➡️' : 'Continue'}
//             </Text>
//           </Pressable>
//         </View>
//       </SafeAreaView>
//     </KeyboardAvoidingView>
//   );
// };

// export default Details;

// const styles = StyleSheet.create({});

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
import RNPickerSelect from 'react-native-picker-select';

type RenderStepFormProps = {
  detailState: number;
  name: string;
  setName: (name: string) => void;
  age: string;
  setAge: (age: string) => void;
  gradYear: string;
  setGradYear: (gradYear: string) => void;
  selectedValue: string | null; // CHANGED: Updated type
  setSelectedValue: (status: string | null) => void; // CHANGED: Updated to match
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
  selectedValue,
  setSelectedValue, // CHANGED: Updated prop name
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
            maxLength={4}
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
          <RNPickerSelect
            activeItemStyle={{
              // backgroundColor: 'red',
              borderRadius: 12,
              borderWidth: 1,
            }}
            useNativeAndroidPickerStyle
            onValueChange={(value) => setSelectedValue(value)}
            items={[
              { label: 'Student', value: 'student' },
              { label: 'Employed', value: 'employed' },
              { label: 'Unemployed', value: 'unemployed' },
              { label: 'Freelancer', value: 'freelancer' },
            ]}
            value={selectedValue}
            placeholder={{ label: 'Select status...', value: null }}
            style={{
              inputIOS: {
                borderWidth: 1,
                borderRadius: 8,
                padding: 12,
                fontSize: 16,
              },
              inputAndroid: {
                borderWidth: 1,
                borderRadius: 8,
                padding: 12,
                fontSize: 16,
              },
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
  const [selectedValue, setSelectedValue] = useState<string | null>(null); // CHANGED: Updated to string | null
  const [city, setCity] = useState<string>('');

  async function DetailNavAhead() {
    storage.set('user.name', name);
    storage.set('age', age);
    storage.set('gradYear', gradYear);
    storage.set('status', selectedValue ?? '');
    storage.set('city', city);

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
        return city !== '';
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
          selectedValue={selectedValue} // CHANGED: Pass selectedValue
          setSelectedValue={setSelectedValue} // CHANGED: Pass setSelectedValue
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
    </KeyboardAvoidingView>
  );
};

export default Details;

const styles = StyleSheet.create({});
