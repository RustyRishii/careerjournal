// import { Pressable, StyleSheet, Text, View } from 'react-native';
// import React, { FC, useState } from 'react';
// import BackArrow from '../../assets/Icons/leftArrow.svg';
// import { TextInput } from 'react-native-gesture-handler';

// interface MultiStepFormProps {
//   totalSteps: number;
//   indicatorColor: string;
//   headText: string;
//   continueButtonColor: string;
// }

// const MultiStepForm: FC<MultiStepFormProps> = ({
//   totalSteps,
//   indicatorColor,
//   headText,
//   continueButtonColor,
// }) => {
//   const [detailState, setDetailState] = useState<number>(1);

//   async function DetailNavPrev() {
//     if (detailState <= totalSteps) {
//       setDetailState(detailState - 1);
//     }
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           alignContent: 'flex-end',
//         }}
//       >
//         <Pressable
//           disabled={detailState == 1 ? true : false}
//           onPress={() => {
//             //Prev screen
//             DetailNavPrev();
//             //   console.log('');
//           }}
//         >
//           <Text style={{ fontSize: 18 }}>
//             <BackArrow
//               style={{ opacity: detailState <= 1 ? 0.5 : 1 }}
//               width={25}
//               height={25}
//             />
//           </Text>
//         </Pressable>

//         <Text style={{ textAlign: 'center', fontSize: 24 }}>{headText}</Text>

//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'right',
//             alignItems: 'flex-end',
//             justifyContent: 'center',
//             alignContent: 'flex-end',
//           }}
//         >
//           {detailState}/{totalSteps}
//         </Text>
//       </View>

//       {/* Progress indicator */}
//       <View
//         style={{
//           backgroundColor: 'darkgray',
//           height: 10,
//           marginVertical: 20,
//           borderRadius: 12,
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: indicatorColor,
//             height: 10,
//             width: `${(detailState / totalSteps) * 100}%`,
//             borderRadius: 12,
//           }}
//         />
//       </View>

//       <View style={{ marginTop: 'auto' }}>
//         <Pressable
//           //   disabled={!isCurrentStepValid()}
//           //   onPressIn={() => DetailNavAhead()}
//           style={{
//             backgroundColor: continueButtonColor,
//             padding: 10,
//             // opacity: isCurrentStepValid() ? 1 : 0.5,
//             borderRadius: 12,
//             justifyContent: 'center',
//             alignContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ fontWeight: 'bold' }}>
//             {detailState == 4 ? 'Complete ➡️' : 'Continue'}
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default MultiStepForm;

// const styles = StyleSheet.create({});

import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useState, ReactNode } from 'react';
import BackArrow from '../../assets/Icons/leftArrow.svg';

interface MultiStepFormProps {
  totalSteps: number;
  indicatorColor: string;
  headText: string;
  continueButtonColor: string;
  children: (currentStep: number) => ReactNode; // Function that receives current step
  isStepValid?: (step: number) => boolean;
  onComplete?: () => void;
}

const MultiStepForm: FC<MultiStepFormProps> = ({
  totalSteps,
  indicatorColor,
  headText,
  continueButtonColor,
  children,
  isStepValid = () => true,
  onComplete,
}) => {
  const [detailState, setDetailState] = useState<number>(1);

  async function DetailNavAhead() {
    if (detailState < totalSteps) {
      setDetailState(detailState + 1);
    } else if (detailState === totalSteps) {
      onComplete?.();
    }
  }

  async function DetailNavPrev() {
    if (detailState > 1) {
      setDetailState(detailState - 1);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'flex-end',
        }}
      >
        <Pressable disabled={detailState === 1} onPress={() => DetailNavPrev()}>
          <Text style={{ fontSize: 18 }}>
            <BackArrow
              style={{ opacity: detailState <= 1 ? 0.5 : 1 }}
              width={25}
              height={25}
            />
          </Text>
        </Pressable>

        <Text style={{ textAlign: 'center', fontSize: 24 }}>{headText}</Text>

        <Text
          style={{
            fontSize: 18,
            textAlign: 'right',
            alignItems: 'flex-end',
            justifyContent: 'center',
            alignContent: 'flex-end',
          }}
        >
          {detailState}/{totalSteps}
        </Text>
      </View>

      {/* Progress indicator */}
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
            backgroundColor: indicatorColor,
            height: 10,
            width: `${(detailState / totalSteps) * 100}%`,
            borderRadius: 12,
          }}
        />
      </View>

      <View style={{ marginTop: 8 }} />

      {/* Call the children function with current step */}
      {children(detailState)}

      <View style={{ marginTop: 'auto' }}>
        <Pressable
          disabled={!isStepValid(detailState)}
          onPress={() => DetailNavAhead()}
          style={{
            backgroundColor: continueButtonColor,
            padding: 10,
            opacity: isStepValid(detailState) ? 1 : 0.5,
            borderRadius: 12,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>
            {detailState === totalSteps ? 'Complete ➡️' : 'Continue'}
          </Text>
        </Pressable>
      </View>
      </View>
  );
};

export default MultiStepForm;
