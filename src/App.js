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

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Students} />
              <Route exact path="/student/:id" component={Student} />
              <Route exact path="/studentform/:id?" component={StudentForm} />
            </Switch>
          </div>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
