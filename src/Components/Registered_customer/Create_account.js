import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import classes from "./Customer_account.module.css";

function Create_account() {
  const [account, setAccount] = useState("");
  const [account1, setAccount1] = useState("");
  const [account2, setAccount2] = useState("");
  const [account3, setAccount3] = useState("");
  const [account4, setAccount4] = useState("");
  const [account5, setAccount5] = useState("");

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
            value={account1}
            changed={(e) => setAccount1(e.target.value)}
          />
        </div>
      </div>

      <div className={classes.createAccount_details}>
        <Input
          label="Phone Number"
          type="number"
          placeholder="Type Your Phone Number"
          value={account2}
          changed={(e) => setAccount2(e.target.value)}
        />
      </div>
      <div className={classes.createAccount_details}>
        <Input
          label="Address"
          type="text"
          placeholder="Type your Address"
          value={account3}
          changed={(e) => setAccount3(e.target.value)}
        />
      </div>
      <div className={classes.createAccount_details}>
        <Input
          label="Password"
          type="password"
          placeholder="Type Password"
          value={account4}
          changed={(e) => setAccount4(e.target.value)}
        />
      </div>
      <div className={classes.createAccount_details}>
        <Input
          label="Confirm Password"
          type="Password"
          placeholder="Confirm Password"
          value={account5}
          changed={(e) => setAccount5(e.target.value)}
        />
      </div>

      <div className={classes.createAccount_checkbox}>
        <label>
          <Checkbox />
          <p className={classes.createAccount_checkCondition}>
            {" "}
            I agree the
            <span className={classes.createAccount_terms}>
              Terms & Conditions
            </span>{" "}
          </p>
        </label>
      </div>

      <div className={classes.createAccount_details}>
        <Button title="Sing Up" />
      </div>
      <div className={classes.createAccount_details}>
        <p>
          Already have an account? <Link to="/login"> Login </Link>
        </p>
      </div>
    </div>
  );
}

export default Create_account;
