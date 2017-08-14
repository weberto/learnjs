import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { saveSetup } from '../../actions';

// {touched && (error && <span>{error}</span>)}
// let Settings = props => {

function validate(values) {
  const errors = {};
  console.log(`Validate: ${JSON.stringify(values)}`);

  if (! values.firstName) {
    errors.firstName = "First name should not blank";
  }

  /**
  if ((! values.email) || ! values.email.match(/@/) || ! values.email.match(/[a-zA-Z]\.(.){2,4}$/)) {
    errors.email = "must contain a valid email address";
  }
  */
  console.log(`Errors: ${JSON.stringify(errors)}`);

  return errors;
}



class Setup extends Component {
  onSubmit(values) {
    /**
    console.log(`SUBMIT: ${JSON.stringify(values)}`);
    return (
      <Link style={{"marginBottom": "30px"}} to="/home" className="btn"><span className="btn btn-primary">Submit</span></Link>
    );
    */
    console.log(`save setup: ${JSON.stringify(values)}`);
    // the following line automatically routes to url
    // this.props.history.push('/home');
    // this.props.saveSetup(values);
    // go to another route after return from ajax call
    this.props.saveSetup(values, () => {
      this.props.history.push('/home');
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
          type="text"
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className="text-danger">
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  render() {
            // {field.meta.touched && (errors && <span>Error</span>)}
  const {handleSubmit, pristine, reset, submitting, touched} = this.props;
  return (
    <ReactCSSTransitionGroup transitionName="fadein" transitionEnterTimeout={1700} transitionLeaveTimeout={1700} transitionAppear={true} transitionAppearTimeout={5700} >
    <div className="well">
      <h3 className="text-center">Setup</h3>
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
            <Field name="shift-preference" component="select">
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
  </ReactCSSTransitionGroup>

  )
} // end of render
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
  connect(null, { saveSetup })(Setup)
);



/**
export default reduxForm({
  form: "SetupForm"
})(Setup);
*/
