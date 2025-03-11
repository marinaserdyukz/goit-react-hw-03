import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from '../ContactForm/ContactForm.module.css'

export default function ContactForm({ onAddContact }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: XXX-XX-XX")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values); 
    resetForm(); 
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
              <div className={css.form}> 
                  
        <label className={css.label}>
          Name
        <Field type="text" name="name" className={css.field} />
                      <ErrorMessage name="name" component="div" className={css.error} />
        </label>
                  
                  
        <label className={css.label}>
          Number
          <Field type="text" name="number" className={css.field}/>
          <ErrorMessage name="number" component="div" className={css.error}/>
                  </label>
                  

                  <button className={css.button} type="submit">Add Contact</button>
                  </div>
      </Form>
    </Formik>
  );
}
