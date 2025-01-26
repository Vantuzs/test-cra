import React, { Component } from 'react';
import * as yup from 'yup'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import { SIGN_DZ_SHEMA } from '../../schemas';

const objFrom = {
    email: '',
    password: ''
}


function SignFormDZ(props){

    const handleSubmitToFormik = (values, actions) =>{
        actions.resetForm()
    }


        return (
         <Formik 
         initialValues={objFrom}
         onSubmit={handleSubmitToFormik}
         validationSchema={SIGN_DZ_SHEMA}>
            {(formicProps)=>{
                return (
                    <Form style={{display: 'flex',flexDirection: 'column',border: '2px solid green',borderRadius:'5px'}}>
                        <Field placeholder='Type your email' name='email'/>
                        <ErrorMessage name='email' component='p'/>
                        <Field placeholder='Type your email' name='password'/>
                        <ErrorMessage name='password' component='p'/>
                        <button>Send</button>
                    </Form>
                )
            }}
         </Formik>  
        )
}

export default SignFormDZ;
