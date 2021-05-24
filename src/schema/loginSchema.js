import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string()
        .min(3, 'username must be at least three characters')
        .required('username is required'),
    password: yup.string()
        .required('password is required'),
    confirmPassword: yup.string()
        .required('password confirmation is required'),
    role: yup.string()
        .oneOf(["client", "instructor"])
})

export {
    schema
}