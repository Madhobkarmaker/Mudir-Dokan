import React, { useState } from "react";
import Input from "../Input/Input";
import classes from "./Customer_account.module.css";

function Create_account() {
  const [account, setAccount] = useState("");
  const test = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={classes.createAccount}>
      <div className={classes.createAccount_title}>
        <h1> Create Account</h1>
        <p>If you haven’t an account, sign up with your phone number.</p>
      </div>

      <div className={classes.createAccount_name}>
        <div className={classes.createAccount_input1}>
          <Input
            label="First Name"
            type="text"
            placeholder="First Name"
            value={account}
            changed={(e) => setAccount(e.target.value)}
          />
        </div>
        <div className={classes.createAccount_input2}>
          <Input
            label="Last Name"
            type="text"
            placeholder="Last Name"
            value={account}
            changed={(e) => setAccount(e.target.value)}
          />
        </div>
      </div>

      <div className={classes.createAccount_details}>
        <Input
          label="Phone Number"
          type="number"
          placeholder="Type Your Phone Number"
          value={account}
          changed={(e) => setAccount(e.target.value)}
        />
      </div>
      <div className={classes.createAccount_details}>
        <Input
          label="Address"
          type="text"
          placeholder="Type your Address"
          value={account}
          changed={(e) => setAccount(e.target.value)}
        />
      </div>
      <div className={classes.createAccount_details}>
        <Input
          label="Password"
          type="password"
          placeholder="Type Password"
          value={account}
          changed={(e) => setAccount(e.target.value)}
        />
      </div>
      <div className={classes.createAccount_details}>
        <Input
          label="Confirm Password"
          type="Password"
          placeholder="Confirm Password"
          value={account}
          changed={(e) => setAccount(e.target.value)}
        />
      </div>
      <div className={classes.createAccount_details}>
        <input type="checkbox" />
        <label className={classes.checkbox}>
          I agree the <a href="#">terms & conditions</a>
        </label>
      </div>
    </div>
  );
}

export default Create_account;
