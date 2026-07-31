import * as yup from 'yup'

export type SignupForm = {
  name: string
  email: string
  password: string
  confirmPassword?: string
}

export type LoginForm = {
  email: string
  password: string
}


export const signupSchema = yup.object().shape({
  name: yup.string().trim().required('Name is required').min(2, 'Name must be at least 2 characters long'),
  email: yup.string().trim().required('Email is required').email('Please enter a valid email'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Be at least 8 characters long')
    .matches(/[a-zA-Z]/, 'Contain at least one letter')
    .matches(/[0-9]/, 'Contain at least one number')
    .matches(/[^a-zA-Z0-9]/, 'Contain at least one special character'),
  confirmPassword: yup
    .string()
    .trim()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
})

export const loginSchema = yup.object().shape({
  email: yup.string().trim().required('Email is required').email('Please enter a valid email'),
  password: yup.string().trim().required('Password is required'),
})
