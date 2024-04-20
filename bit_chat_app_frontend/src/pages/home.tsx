import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useRecoilValue } from 'recoil';

import * as env from '../consts/env.json';
import { currentAuthenticatedUser } from '../hooks/auth/useAuth';
import { StackProps } from '../providers/Provider';

type LoginNavigationProp = NativeStackNavigationProp<StackProps, 'Home'>;

const Home = () => {
  const [email, setEmail] = useState(null);
  const { token } = useRecoilValue(currentAuthenticatedUser);

  const navigation = useNavigation<LoginNavigationProp>();

  const getEmail = async () => {
    const res = await axios.get(`${env.APIGatewayURL}/user`, {
      headers: {
        Authorization: token,
      },
    });
    if (res) {
      setEmail(res.data);
    }
  };
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
        <TextInput style={styles.input} />
        <Pressable
          style={styles.user_add_button}
          onPress={() => navigation.navigate('AddFriend')}>
          <Icon name="adduser" size={20} />
        </Pressable>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Pressable
          onPress={() => {
            getEmail();
          }}>
          <View>
            <Text> Email {email} </Text>
          </View>
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
  user_add_button: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  user_add_button_text: {
    fontSize: 20,
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

export default Home;
