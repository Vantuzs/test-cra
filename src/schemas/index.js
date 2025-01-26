import * as yup from 'yup'

export const SIGN_UP_SCHEMA = yup.object({
    firstName: yup.string().required('Это обязательное ПОЛЕ!!!!!!!!!!!').min(2,'Meньше 2 букав НЕЛЬЗЯ СУКА )').max(52),
    lastName: yup.string().required('Это обязательное ПОЛЕ!!!!!!!!!!!').min(2).max(52),
    email: yup.string().required('Это обязательное ПОЛЕ!!!!!!!!!!!').email('Email is not valid '),
    password: yup.string().required('Это обязательное ПОЛЕ!!!!!!!!!!!').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'Password is not valid  ->  Passwod ')
})

export const SIGN_DZ_SHEMA = yup.object({
    email: yup.string().required('Это обязательное ПОЛЕ!!!!!!!!!!!').email('Email is not valid '),
    password: yup.string().required('Это обязательное ПОЛЕ!!!!!!!!!!!').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'Password is not valid  ->  Passwod ')
})