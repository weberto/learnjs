import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import FetchContacts from './components/fetch_contacts';
import Navbar from './components/navbar';

import Setup from './components/common/setup';
import Home from './components/common/home';
import Login from './components/common/login';
import Logout from './components/common/logout';

import MenuManagement from './components/mailroom_management/menu_management';
import Scheduler from './components/mailroom_management/scheduler';
import ActivityLog from './components/mailroom_management/activitylog';
import AnnouncementEdit from './components/mailroom_management/announcementedit';

import MenuEmployee from './components/employee/menu_employee';

import MenuAdmin from './components/admin/menu_admin';
import TransactionLog from './components/admin/transactionlog';
import Tools from './components/admin/tools';

import Messages from './components/employee/messages';
import Settings from './components/settings';
import Schedule from './components/schedule';
import promise from 'redux-promise';
// import { Link } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Availability extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron"><h3 className="text-center">Availability</h3></div>
        <div className="container">
          <p>The menu rows are controlled by the values of eShapeEnabled, eShapeManager, and eShapeAdmin in Contact JSON. In the above example shown, the view is what an Employee User would see (only eShapeEnabled is set to “true”.)</p>
          <p>A tap on a Menu Page row item will close the Menu Page and redirect to the tapped item. A tap elsewhere will close the Menu Page and expose the previous Page.</p>
        </div>
      </div>
    );
  }
}
/**
class Home extends React.Component {
  render() {return (
      <div className="jumbotron">
        <h3 className="text-center">Home of E-Shapes</h3>
      </div>
    )
  }
}
*/
/**
class Settings extends React.Component {
  render() {return <div>Settings</div>}
}
*/

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/availability" component={Availability} />
          <Route path="/contacts" component={FetchContacts} />
          <Route path="/settings" component={Settings} />
          <Route path="/setup" component={Setup} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/menu_management" component={MenuManagement} />
          <Route path="/menu_employee" component={MenuEmployee} />
          <Route path="/menu_admin" component={MenuAdmin} />
          <Route path="/messages" component={Messages} />
          <Route path="/transactionlog" component={TransactionLog} />
          <Route path="/tools" component={Tools} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
