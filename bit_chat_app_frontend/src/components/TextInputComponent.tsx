import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  control: Control<any, any>;
  errors: FieldErrors<any>;
  name: string;
  placeholder: string;
  autoComplete?: 'email' | 'password';
  title?: string;
  handleSubmit?: UseFormHandleSubmit<any, undefined>;
};

const TextInputComponent = ({
  control,
  errors,
  name,
  placeholder,
  autoComplete,
  title,
  handleSubmit,
}: Props) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value, onBlur, name } }) => (
        <View style={styles.input_container}>
          {title && <Text style={styles.default_text}> {title} </Text>}
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoComplete={autoComplete}
            autoCapitalize="none"
          />
          {errors[name] && (
            <Text style={styles.error_text}>
              {errors[name]?.message as string}
            </Text>
          )}
        </View>
      )}
      name={name}
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input_container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    width: '60%',
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 4,
  },
  default_text: {
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  error_text: {
    margin: 10,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
