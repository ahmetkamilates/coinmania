import * as yup from 'yup';

const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({

  email: yup
    .string()
    .email('Lütfen geçerli bir email formatı giriniz')
    .required('Email alanı zorunludur'),


  age: yup
    .number()
    .min(18, 'Yaş değeri 18 den büyük olmalı')
    .max(100, 'Yaş 100 den büyük olamaz')
    .integer('Lütfen bir tam sayı giriniz'),

  password: yup
    .string()
    .min(5, 'Şifre en az 5 karakter olmalı')
    .matches(regex, 'Şifreniz yeterince güçlü değil')
    .required('Şifre alanı zorunludur'),

  confirmPassword: yup
    .string() 
    .oneOf([yup.ref('password')], 'Onay şifreniz doğru değil')
    .required('Lütfen şifrenizi onaylayın '),
});