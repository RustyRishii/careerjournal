import { View, TextInput, StyleSheet, Text } from 'react-native';
import CustomPicker from './customPicker';

type RenderStepFormProps = {
  detailState: number;
  name: string;
  setName: (name: string) => void;
  age: string;
  setAge: (age: string) => void;
  gradYear: string;
  setGradYear: (gradYear: string) => void;
  selectedValue: string | null;
  setSelectedValue: (status: string | null) => void;
  profession: string;
  setProfession: (profession: string) => void;
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
  profession: profession,
  setProfession: setProfession,
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
          <CustomPicker
            items={[
              { label: 'Student', value: 'student' },
              { label: 'Employed', value: 'employed' },
              { label: 'Unemployed', value: 'unemployed' },
              { label: 'Freelancer', value: 'freelancer' },
            ]}
            value={selectedValue}
            onValueChange={setSelectedValue}
            placeholder="Select status..."
          />
        </View>
      );

    case 4:
      return (
        <View>
          <Text style={{ fontSize: 16 }}>Current profession</Text>
          <TextInput
            value={profession}
            onChangeText={setProfession}
            autoFocus={true}
            placeholder="Software engineer"
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

export default RenderStepForm;
