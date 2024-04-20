import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import LoginForm from '../features/auth/LoginForm';
import { StackProps } from '../providers/Provider';

type LoginNavigationProp = NativeStackNavigationProp<StackProps, 'Login'>;

const Login = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <LoginForm />
      <View style={{ alignItems: 'center' }}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          <View>
            <Text style={styles.button_text}> サインアップ </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '60%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  button_text: {
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default Login;
