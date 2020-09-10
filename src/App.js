import React from "react";
import "./styles/App.scss";
import Navbar from "./components/layouts/Navbar.js";
import Students from "./components/students/Students.js";
import Student from "./components/students/Student.js";
import StudentForm from "./components/students/StudentForm.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store.js";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Login from "./components/pages/Login.js";
import PrivateRoute from "./components/routes/PrivateRoute.js";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <div className="App">
            <PrivateRoute component={Navbar} />
            <Switch>
              <PrivateRoute exact path="/" component={Students} />
              <PrivateRoute exact path="/student/:id" component={Student} />
              <PrivateRoute exact path="/studentform/:id?" component={StudentForm} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
