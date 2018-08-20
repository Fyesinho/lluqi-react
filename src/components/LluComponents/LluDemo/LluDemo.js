import React from 'react';
import {reduxForm, Field} from 'redux-form';

const showResult = values => console.log(values);

let DemoForm = ({handleSubmit, submitting}) =>
    <form onSubmit={handleSubmit(showResult)}>
        <div>
            <label>First name</label>
            <Field name='firstName' component='input'/>
        </div>
        <div>
            <label>Lastname name</label>
            <Field name='lastname' component='input'/>
        </div>
        <div>
            <label>Email</label>
            <Field name='email' component='input'/>
        </div>
        <button type='submit' disabled={submitting}>Submit</button>
    </form>;

DemoForm = reduxForm({
    form: 'demo',
    destroyOnUnmount: false
})(DemoForm);

export default DemoForm;

