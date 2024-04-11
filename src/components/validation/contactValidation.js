import * as Yup from "yup"

export const ContactValidation  = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی است"),
    email: Yup.string().required("ایمیل الزامی است").email("ایمیل الزامی است"),
    subject: Yup.string().required("پیام الزامی است"),
    message: Yup.string().required("پیام الزامی است"),
})