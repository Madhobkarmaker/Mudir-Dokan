import React from "react";
import classes from "./Profile.module.css";
import Profile_icon from "../Asset/profile.png";
import Menu from "../Asset/menu.png";
import Setting from "../Asset/setting.png";
import SingOut from "../Asset/singout.png";

function Profile() {
  return (
    <div className={classes.profile_container}>
      <div className={classes.profile_details}>
        <h1>Nick Robinson</h1>
        <p>mail.zahidhossain@gmail.com</p>
      </div>

      <div className={classes.profile}>
        <img src={Profile_icon} alt="profile" />
        <h1>Profile</h1>
      </div>

      <div className={classes.profile}>
        <img src={Menu} alt="menu" />
        <h1>Order History</h1>
      </div>

      <div className={classes.profile}>
        <img src={Setting} alt="setting" />
        <h1>Setting</h1>
      </div>

      <button className={classes.logOut_btn}>
        <img src={SingOut} alt="singout" />
        <p>Log out</p>
      </button>
    </div>
  );
}

export default Profile;
