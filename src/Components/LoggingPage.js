import { useState } from 'react';
import{Link,NavLink} from "react-router-dom";


function Login() {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [errorState, setErrorState] = useState("");

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameState,
        password: passwordState,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
        window.location.href = "/profile";
      })
      .catch((error) => {
        setErrorState(error.message);
      });
  };

  return (
    <div className='heading'>
      <h2>Login</h2>
      {errorState && <p>{errorState}</p>}
      <form>
        
          <input
            type="text" placeholder='UserName...'
            value={usernameState}
            onChange={(e) => setUsernameState(e.target.value)}
          />
      
        <br />
         
          <input
            type="password" placeholder='Password...'
            value={passwordState}
            onChange={(e) => setPasswordState(e.target.value)}
          />
       
        <br />
        <NavLink to="/profile" onClick={handleLogin}>Login</NavLink>
    
      </form>
    </div>
  );
}
export default Login