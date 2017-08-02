import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

let Settings = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <div className="well">
      <h3 className="text-center">Settings</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component="input"
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
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
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
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
          <Link style={{"marginBottom": "30px"}} to="/home" className="btn"><span className="btn btn-primary">Submit</span></Link>

          {/*
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
          */}
        </div>
      </form>
    </div>
  )
}

Settings = reduxForm({
  // a unique name for the form
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

export default Settings;
