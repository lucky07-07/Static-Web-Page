import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './PortfolioContact.module.css';


const PortfolioContact = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        message: Yup.string()
            .required('Required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form submitted:', values);
        resetForm();
    };

    return (
        <div className={styles.contactContainer}>
            <h2>Feel free to contact us</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className={styles.contact}>

                        <div>
                            <label htmlFor="name">Name:</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" className={styles.error} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className={styles.error} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <Field as="textarea" id="message" name="message" />
                            <ErrorMessage name="message" component="div" className={styles.error} />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );

};

export default PortfolioContact;
