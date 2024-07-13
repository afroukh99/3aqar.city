import * as Yup from "yup";

export const loginSchema = Yup.object({
    username: Yup.string()
        .required("Please enter a username")
        .min(4, "Username must be at least 4 characters long")
        .max(30, "Username cannot be more than 30 characters long"),
    password: Yup.string()
        .required("Please enter a password")
        .min(8, "Password must be at least 8 characters long")
        .max(30, "Password cannot be more than 30 characters long"),
});

export const registerSchema = Yup.object({
    username: Yup.string()
        .required("Please enter a username")
        .min(4, "Username must be at least 4 characters long")
        .max(30, "Username cannot be more than 30 characters long"),
    email: Yup.string()
        .required("Please enter an email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"
          )
        .min(8, "Email must be at least 8 characters long")
        .max(30, "Email cannot be more than 30 characters long"),
    phone: Yup.string()
        .required("Please enter a phone number")
        .min(8, "Phone number must be at least 8 characters long")
        .max(30, "Phone number cannot be more than 30 characters long"),
    password: Yup.string()
        .required("Please enter a password")
        .min(8, "Password must be at least 8 characters long")
        .max(30, "Password cannot be more than 30 characters long"),
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords must match"),
});
