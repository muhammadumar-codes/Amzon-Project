import {NavLink} from  "react-router-dom"

// ===*Css*===
import "./Registration.css"

// ===*Registration Page*===

export default function Registration(){
const  currentData=new Date().getFullYear();
    return (
       <>
          <form class="registrationContainer">
        <img src="https://www.amazon.com/favicon.ico" alt="Amazon Logo" class="amazonLogo"/>
        <h5 class="ctAccount">Create account</h5>

        <label for="name">Your name</label>
        <input type="text" id="names" placeholder="First and last name" required/>

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter Your Email" required/>

        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter Your Password" required/>

        
        <label for="password">Confirm Password</label>
        <input type="password" id="ConfirmPassword" placeholder="Enter Confirm  Password" required/>

        
        <button>Continue</button>
        
        <div class="conditions">
            By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy
                Notice</a>.
            </div>
            <h6 class="message"></h6>
            
            <div class="divider">Already have an account?</div>
            
            <NavLink to={"/LoginPage"}>
<span>Sign In </span>
            </NavLink>
        </form>

{/* <!-- Footer  --> */}
    <footer>
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Help</a>
        <br/><br/>
        © 1996-{currentData}, Amazon.com, Inc. or its affiliates
    <footer/>

        
        </footer>
       </>
       
    )
}