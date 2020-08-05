import React from 'react';
import {Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

export default function App() {
  const {control, errors, formState} = useForm({
    mode: 'onChange',
  });

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
