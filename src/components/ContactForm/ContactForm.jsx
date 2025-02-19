import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const initialValues = {
  name: "",
  number: "",
};

const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(onlyLetters, "Only letters")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),

  number: Yup.string()
    .matches(/^\+?[0-9\s\-()]*$/, "Invalid phone number")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Phone number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactId = useId();
  const phoneId = useId();
  const handelSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(4),
        ...values,
      })
    );
    actions.resetForm();
  };

  return (
    <div className={s.contactForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.div}>
            <label className={s.label} htmlFor={contactId}>
              Name
            </label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={contactId}
            ></Field>
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.div}>
            <label htmlFor={phoneId} className={s.label}>
              Number
            </label>
            <Field
              className={s.input}
              type="tel"
              name="number"
              id={phoneId}
            ></Field>
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
