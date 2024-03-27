import * as yup from 'yup';

export const signupFormSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email('正しいメールアドレスを入力してください')
    .required('メールアドレスを入力してください'),
  password: yup
    .string()
    .matches(/(?=.*[a-z])/, '小文字を含めてください')
    .matches(/(?=.*[A-Z])/, '大文字を含めてください')
    .matches(/(?=.*[0-9])/, '数字を含めてください')
    .min(8, '8文字以上入力してください')
    .required('パスワードを入力してください'),
  confirmPassword: yup
    .string()
    .matches(/(?=.*[a-z])/, '小文字を含めてください')
    .matches(/(?=.*[A-Z])/, '大文字を含めてください')
    .matches(/(?=.*[0-9])/, '数字を含めてください')
    .min(8, '8文字以上入力してください')
    .required('パスワードを入力してください')
    .oneOf([yup.ref('password')], '入力したパスワードが一致しません'),
});
