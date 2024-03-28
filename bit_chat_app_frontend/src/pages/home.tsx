import axios from 'axios';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import * as env from '../consts/env.json';
import { currentAuthenticatedUser } from '../hooks/auth/useAuth';

const Home = () => {
  const [email, setEmail] = useState(null);
  const { token } = useRecoilValue(currentAuthenticatedUser);

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
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
