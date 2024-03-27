import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';

import TextInputComponent from '../../components/TextInputComponent';
import { auth } from '../../firebase';
import { signupFormSchema } from '../../lib/yup/signupFormSchema';

import { styles } from './styles';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(signupFormSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      console.log('registration successed', userCredential.user.uid);
    } catch (error) {
      console.error('registration failed', error);
    }
  };

  const onError: SubmitErrorHandler<FormValues> = (errors: any, e: any) =>
    console.log(errors, e);

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
      <TextInputComponent
        control={control}
        errors={errors}
        name="confirmPassword"
        placeholder="確認用のパスワード"
        title="確認用のパスワード"
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          handleSubmit(onSubmit, onError)();
        }}>
        <View>
          <Text style={styles.button_text}> 新規登録 </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SignupForm;
