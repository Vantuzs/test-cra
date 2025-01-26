import * as yup from 'yup'

export const SIGN_UP_SCHEMA = yup.object({
    firstName: yup.string().required().min(2).max(52),
    lastName: yup.string().required().min(2).max(52),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})