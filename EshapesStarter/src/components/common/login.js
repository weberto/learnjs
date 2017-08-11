import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setEshapes } from '../../actions';
// import { processLogin } from '../../actions';

class Login extends Component {
  onSubmit(values) {
    console.log(`process login, using setEshapes: ${JSON.stringify(values)}`);
    // this.props.processLogin(values);
    this.props.setEshapes(values, () => {
    // this.props.processLogin(values, () => {
      this.props.history.push('/menu');
    })
  }
  renderSome(field) {
    const { meta: { touched, error } } = field;
    // const clsName = 'form-group has-error';
    const clsName = `form-group ${touched && error ? 'has-error' : ''}`;
    return (
      <div className={clsName}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="text-danger">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  render() {
    const {handleSubmit, pristine, reset, submitting, touched} = this.props;
    return (
      <div className="col-md-offset-4 col-md-4">
        <div className="jumbotron row">
          <h3 className="text-center">Eshapes Login</h3>
        </div>

        <div className="well row">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div>
              <Field
                name="username"
                label="User Name"
                component={this.renderSome}
                type="text"
                className="form-control"
                placeholder="User Name"
              />
              {touched ? error : ''}
            </div>

            <div>
              <Field
                name="password"
                label="PasswordName"
                component={this.renderSome}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {touched ? error : ''}
            </div>

            <div className="radio">
              <label>
                <Field name="authority_level" component="input" type="radio" value="employee" />
                  Employee
              </label>
            </div>
              {touched ? error : ''}
            <div className="radio">
              <label>
                <Field name="authority_level" component="input" type="radio" value="management"/>
                  Management
              </label>
            </div>
              {touched ? error : ''}
            <div className="radio disabled">
              <label>
                <Field name="authority_level" component="input" type="radio" value="admin"/>
                  Admin
              </label>
              {touched ? error : ''}
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    </div>
    );
  }
}

function validate(values) {
  let errors = {};
  if (! values.username)
    errors.username = 'username must not be blank';
  if (! values.authority_level)
    errors.authority_level = 'must pick a level';
  return errors;
}

function asyncValidate(values) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

  // asyncBlurFields: [],
// export default Setup = reduxForm({
export default reduxForm({
  // a unique name for the form
  validate,
  asyncBlurFields: [],
  form: 'SetupForm'
})(
  connect(null, { setEshapes })(Login)
);

// export default Login;
