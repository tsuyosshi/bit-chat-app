import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';

const MesseageInputComponent = () => {
  const [messeage, setMessage] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={text => setMessage(text)}
        value={messeage}
      />
    </View>
  );
};

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
});

export default MesseageInputComponent;
