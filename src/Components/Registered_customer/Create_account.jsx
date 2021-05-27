import React from 'react'
import classes from "./Customer_account.module.css"

const registerData1 = [
   { id: 0, title: 'First Name', type: 'text', placeholder: 'First Name', },
]
const registerData2 = [
   { id: 0, title: 'Last Name', type: 'text', placeholder: 'Last Name' },
]

const customerData = [
   { id: 0, title: 'Phone Number', type: 'text', placeholder: 'Type your Phone Number' },
   { id: 1, title: 'Address', type: 'text', placeholder: 'Type your Address' },
   { id: 2, title: 'Password', type: 'password', placeholder: 'Type your Password' },
   { id: 3, title: 'Confirm Password', type: 'password', placeholder: 'Confirm Password' },
]

function Create_account() {
   return (

      <div className={classes.customer_info}>
         <div className={classes.customer_account}>
            <h1>Create Account</h1>
            <p>If you haven’t an account, sign up with your phone number.</p>
         </div>

         <div className={classes.customer_view}>
            <div className={classes.registerData}>
               {registerData1.map(data => (
                  <div className={classes.first_input_field} key={data.id[0]}>
                     <p className={classes.dash_input_title}>{data.title}</p>
                     <input type={data.type} placeholder={data.placeholder}>
                     </input>
                  </div>
               ))
               }
               {registerData2.map(data => (
                  <div className={classes.first_input_field} key={data.id[1]}>
                     <p className={classes.dash_input_title}>{data.title}</p>
                     <input type={data.type} placeholder={data.placeholder}>
                     </input>
                  </div>
               ))
               }
            </div>

            <div className={classes.customerData}>
               {customerData.map(data => (
                  <div className={classes.second_input_field} key={data.id}>
                     <p className={classes.dash_input_title}>{data.title}</p>
                     <input type={data.type} placeholder={data.placeholder}>
                     </input>
                     <span></span>
                  </div>
               ))
               }

            </div>

            <div className={classes.checkbox}>
               <input type="checkbox" />
               <label htmlFor="">
                  I agree the <a href="#">Terms & Conditions</a>
               </label>
            </div>

            <div className={classes.singUp}>
               <button>Sing up</button>
            </div>
         </div>

         <div className={classes.bottom}>
            <p> Already have an account? <a href="#">Login</a></p>
         </div>


      </div >



   )
}

export default Create_account
