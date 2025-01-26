import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';
import { Formik,Form,Field,ErrorMessage } from 'formik'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

function SignUpForm(props){

    const handleSubmitToFormik = (values, actions) =>{
        actions.resetForm()
    }
    
        return (
           <Formik 
           initialValues={initialState}
           onSubmit={handleSubmitToFormik}
           validationSchema={SIGN_UP_SCHEMA}>
            {(formikProps)=>{
                return (
                    <Form style={{display:'flex',flexDirection: 'column'}}>
                        <Field placeholder='Type yuor name'       name='firstName'/>
                        <ErrorMessage name='firstName' component='p'/>
                        <Field placeholder='Type yuor last name'  name='lastName'/>
                        <ErrorMessage name='lastName'  component='p'/>
                        <Field placeholder='Type yuor email'      name='email'/>
                        <ErrorMessage name='email'     component='p'/>
                        <Field placeholder='Type yuor password'   name='password'/>
                        <ErrorMessage name='password'  component='p'/>

                        <button type='submit'>button</button>
                    </Form>
                )
            }}
           </Formik>
        );
}

export default SignUpForm;



/* 

Валидация програмного забеспечення

Когда мы проверяем, тчо разработаный продукт - то, что хотел наш клиент.



Верификация прогрмного забеспечення

Когда мы проверяем, а как именно реализованные просьбы клиента

*/
