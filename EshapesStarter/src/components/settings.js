import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

            // {touched && (error && <span>{error}</span>)}
// let Settings = props => {

function validate(values) {
  const errors = {};
  console.log(`Validate: ${JSON.stringify(values)}`);

  if (! values.firstName) {
    errors.firstName = "Not blank";
  }

  if (! values.email || values.email.match(/@/)) {
    errors.email = "Not blank and contains a valid email address";
  }
  console.log(`Errors: ${JSON.stringify(errors)}`);

  return errors;
}



class Settings extends Component {
  onSubmit(values) {
    console.log(`SUBMIT: ${JSON.stringify(values)}`);
    return (
      <Link style={{"marginBottom": "30px"}} to="/home" className="btn"><span className="btn btn-primary">Submit</span></Link>
    );
  }
  renderSome(field) {
    const { meta: { touched, error } } = field;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="has-error text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  render() {
            // {field.meta.touched && (errors && <span>Error</span>)}
  const {handleSubmit, pristine, reset, submitting, touched} = this.props;
  return (
    <div className="well">
      <h3 className="text-center">Settings</h3>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-group">
          <div>
            <Field
              name="firstName"
              label="First Name"
              component={this.renderSome}
              type="text"
              className="form-control"
              placeholder="First Name"
            />
            {touched ? error : ''}
          </div>
        </div>

        <div className="form-group">
          <div>
            <Field
              name="lastName"
              label="Last Name"
              component={this.renderSome}
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-group">
          <div>
            <Field
              label="Email"
              name="email"
              component={this.renderSome}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Shift Preference</label>
          <div>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="Early">Early</option>
              <option value="Middle">Middle</option>
              <option value="Late">Late</option>
            </Field>
          </div>
        </div>

        <div className="form-group">
          <div>
            <Field
              name="employed"
              label="Employed"
              id="employed"
              component={this.renderSome}
              className="form-control"
              type="checkbox"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>
        <div>
          {// <Link style={{"marginBottom": "30px"}} to="/home" className="btn"><span className="btn btn-primary">Submit</span></Link> }
          }

          <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Submit</button>
          <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  )
} // end of render
}


function asyncValidate(values) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

  // asyncBlurFields: [],
Settings = reduxForm({
  // a unique name for the form
  validate,
  asyncBlurFields: [],
  form: 'settings'
})(Settings)

class Settings2 extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <div>
        <h3>Settings</h3>
      </div>
    )
  }
}


export default reduxForm({
  form: "SettingsForm"
})(Settings);
// export default Settings;
