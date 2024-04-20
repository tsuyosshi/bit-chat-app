import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddFriend = () => {
  const [searchText, setSearchText] = useState('');
  const [targetUserText, setTargetUserText] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <TextInput
          style={styles.input}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          autoCapitalize="none"
        />
        <Pressable
          style={styles.user_search_button}
          onPress={() => setTargetUserText(searchText)}>
          <Icon name="search" size={15} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 0.7,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 4,
  },
  user_search_button: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
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

export default AddFriend;
