import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class PostNew extends React.Component {

    renderField(field){
        return (
        <div className = {`form-group ${field.meta.touched && field.meta.error ? 'has-danger': ''}`}>
            <label> {field.label} </label>
            <input 
            className = "form-control"
            type = "text"
            {...field.input}/>
            {field.meta.touched ? 
                <div className = "text-help">{field.meta.error}</div>: '' }
        </div>
        )
    }

    onChangeRadio(event){
        console.log("event", event)
    }

    renderRadioField(field){
        return (
            <div className = {`form-group ${field.meta.touched && field.meta.error ? 'has-danger': ''}`}>
            <input
            type = "radio"
            {...field.input} />
            <label>{field.placeholder}</label>
            { field.meta.touched ? 
             <div className = "text-help">{ field.meta.error}</div>:''}
            </div>
        )
    }

    onSubmit(values){
        console.log("values", values)
        
        this.props.createPost(values, () => {
            this.props.history.push("/")
        });
    }

    render(){

        const { handleSubmit } = this.props;
        return (
        <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
            
            <Field 
            label = 'Title:'
            name = "title" 
            component = {this.renderField}/>

            <Field 
            label = "Categories:"
            name = "categories" 
            component = {this.renderField}/>

            <Field 
            label = "Content:"
            name = "content" 
            component = {this.renderField}/>

            <div>
             <label>Sex</label>
               <div>
             <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
            />{' '}
              Male
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"
            />{' '}
             Female
          </label>
        </div>
      </div>

            <button type="submit" className = "btn btn-primary">Submit </button>
            <Link to = "/" className = "btn btn-danger">Cancel</Link>

            </form>
        )
    }
}

function validate(values){
    console.log("sds", values)
const errors = {};

if(!values.title || values.title.length<4){
    errors.title = "Enter a title with minimum 4 characters!"
}

if(!values.categories){
    errors.categories = "Enter a categories!"
}

if(!values.content){
    errors.content = "Enter a content!"
}

if(!values.sex){
    errors.sex = "Please accept terms & conditions!"
}

return errors;
}

export default reduxForm(
    {
        form: 'newPostForm',
        validate
    },
)(
    connect(null, { createPost})(PostNew)
);