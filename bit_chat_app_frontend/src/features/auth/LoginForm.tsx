import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import TextInputComponent from '../../components/TextInputComponent';
import { auth } from '../../firebase';
import { loginFormSchema } from '../../lib/yup/loginFormSchema';

import { styles } from './styles';

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: any, e: any) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    console.log('login successed', userCredential.user.uid);
  };
  const onError: SubmitErrorHandler<FormValues> = (errors: any, e: any) => {
    console.log(errors, e);
  };

  return (
    <View style={styles.form_container}>
      <TextInputComponent
        control={control}
        errors={errors}
        name="email"
        placeholder="メールアドレス"
        autoComplete="email"
        title="メールアドレス"
      />
      <TextInputComponent
        control={control}
        errors={errors}
        name="password"
        placeholder="パスワード"
        autoComplete="password"
        title="パスワード"
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          handleSubmit(onSubmit, onError)();
        }}>
        <View>
          <Text style={styles.button_text}> ログイン </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default LoginForm;
