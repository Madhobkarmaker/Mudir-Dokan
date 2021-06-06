import React from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Customer_account.module.css";

function Registered_customer() {
  const history = useHistory();
  const changeRoute = () => {
    history.replace("/register");
  };
  return (
    <div className={classes.register}>
      <div className={classes.registered_customer}>
        <div className={classes.registered_customer_page}>
          <h1>Registered Customers</h1>
          <p>If you have an account, sign in with your phone number.</p>
        </div>
        <div className={classes.login_form}>
          <label htmlFor="">Phone Number</label>
          <br />
          <input type="text" placeholder="Type your phone number" />
        </div>
        <div className={classes.login_form}>
          <label htmlFor="">Password</label>
          <br />
          <input type="password" placeholder="Type password" />
        </div>

        <a href="#" className={classes.forget_password}>
          Forget password?
        </a>
        <br />

        <div className={classes.btn}>
          <button>
            <span> Log in</span>
          </button>
        </div>

        <div className={classes.bottom}>
          <p>
            Don't have an account?
            <button onClick={changeRoute}>
              Register
              {/* <Link to="/register"> Register </Link> */}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registered_customer;
