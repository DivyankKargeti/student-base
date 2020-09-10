import React, {useState} from "react";
import { useFirebase } from "react-redux-firebase";
import {useHistory} from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const firebase = useFirebase();
    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
      };

    const submitForm = async (e) =>{
        e.preventDefault();
        await firebase.login(user);
        history.replace("/");
    };

  return (
    <div className="container">
      <div className="py-5">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card shadow">
              <div className="card-body">
                <img
                  src={require("../../assets/logo2.png")}
                  height="40px"
                  alt="logo"
                  className= "card-img-top mb-5" height="70px"
                />
                <form onSubmit={submitForm}>
                  <div className="form-group">
                  <input
                      placeholder="Enter Student E-mail"
                      name="email"
                      className="form-control"
                      value={user.email}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      className="form-control"
                      value={user.password}
                      onChange={onInputChange}
                    />
                  </div>
                  <button className="btn btn-primary btn-block">
                    Login to dashboard
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
