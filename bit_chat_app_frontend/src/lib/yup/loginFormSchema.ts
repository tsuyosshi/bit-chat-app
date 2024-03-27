import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email('正しいメールアドレスを入力してください')
    .required('メールアドレスを入力してください'),
  password: yup.string().required('パスワードを入力してください'),
});
