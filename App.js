import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

export default function App() {
  const {control, handleSubmit, errors, formState} = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView>
      <Text>
        {formState.isValid ? 'formState: "Valid"' : 'formState: "Invalid"'}
      </Text>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            accessibilityLabel="First Name Field"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            accessibilityLabel="Last Name Field"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{required: true}}
        defaultValue=""
      />

      <Button
        disabled={!formState.isValid}
        accessibilityLabel="Submit Button"
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
