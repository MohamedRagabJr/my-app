//Condational Rendering

import { useState } from "react";
import Welcome from "./welcome";
import Guest from "./guest";

export default function Login() {
  const [isLoggedIn , setLoggedIn] = useState(false);
  // let element = isLoggedIn ? <h1>Im Logged In</h1> :  <h1>Im Not Logged In</h1>;
  // if (isLoggedIn){
  //   element = <h1>Im Logged In</h1>
  // }else {
  // element = <h1>Im Not Logged In</h1>
  // }
  return(
    <div className="login">
      <button onClick={() => setLoggedIn(true)}>
        {/* { isLoggedIn ? <h1>Im Logged In</h1> :  <h1>Im Not Logged In</h1>} */}
        { isLoggedIn ? <Welcome name="ahmed" /> :  <Guest />}
      </button>
      
    </div>
  )
}