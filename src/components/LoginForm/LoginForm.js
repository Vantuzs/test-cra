import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';
import { Formik,Form,Field } from 'formik'

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
           <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
            {(formikProps)=>{
                return (
                    <Form >
                        <Field placeholder='Type yuor name'       name='firstName'/>
                        <Field placeholder='Type yuor last name'  name='lastName'/>
                        <Field placeholder='Type yuor email'      name='email'/>
                        <Field placeholder='Type yuor password'   name='password'/>

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
