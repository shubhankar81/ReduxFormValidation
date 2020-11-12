import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./app.css";
import store from './store/store';
import { Provider } from 'react-redux';
import Register from './Pages/Register';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import Login from './Pages/Login';
import MovieList from './Pages/MovieList';
import history from './history';

ReactDOM.render(
  <React.StrictMode>
        
    <Provider store={store}>
    <Router history={history}>
        <div className="maindiv"><Link className="link"  to="/register">Register</Link>
        <Link className="link" to="/login">Login</Link></div>
        <div className="maindiv">
        <Switch >
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/movie" component={MovieList}></Route>
        </Switch>
        </div>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
