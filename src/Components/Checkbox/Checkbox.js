import React from "react";
import classes from "./Checkbox.module.css";

function Checkbox() {
  return (
    <div className={classes.checking}>
      <label className={classes.container}>
        <input type="checkbox" />
        <span className={classes.checkmark}></span>
      </label>
    </div>
  );
}

export default Checkbox;
