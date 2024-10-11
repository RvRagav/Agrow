
// import './Login.css';
// //import axios from "axios";
// import SignUp from "./SignUp.jsx";
// import React, { useState } from 'react';
// import {useNavigate, Link } from 'react-router-dom';
// function Login() {
//     const [password,setPassword]=useState('');
//     const [username,setUsername]=useState('');
//     const [error,setError]=useState('');
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         if(!username || !password){
//             setError('Please fill in all the fields');
//             return;
//         }
//         setError('');
//         // try{
//         //   await axios.post("http://localhost:3000/login",{username,password});
//         // }
//         // catch(e){
//         //   console.log(e);
//         // }
//         console.log('Logging in with:', { username, password });
//     };
//   return (
//     <>
//     <header>
//       <h1>AGROW</h1>
//     </header>
//     <div id="body">
//       <div id="login">
//         <div id="heading"><h2>LOGIN</h2></div>
//          <div id="inLogin">
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//               <label>Username</label>
//               <input type="text" value={username} required placeholder='Abc' onChange={(e)=>{setUsername(e.target.value);}}/><br></br>
//              <label>Password</label>
//               <input type="password" value={password} required onChange={(e)=>{setPassword(e.target.value);}}/><br></br>
//               <input type="submit" value="LOGIN"/>
//             </form>
//             <div className="footer">
//                 <p><a>Forget password?</a></p>
//                 <p>Don't have an account? <b><Link to="/signup">SignUp</Link></b></p>
//             </div>
//           </div>
//       </div>
//     </div>
//     </>
//   );
// }
// export default Login;

import './Login.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all the fields');
      return;
    }
    setError('');
    console.log('Logging in with:', { username, password });
  };

  return (
    <>
      <header>
        <h1>AGROW</h1>
      </header>
      <div className="login-container">
        <div id="login">
          <div id="heading"><h2>LOGIN</h2></div>
          <div id="inLogin">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input type="text" value={username} required placeholder='Abc' onChange={(e) => setUsername(e.target.value)} /><br></br>
              <label>Password</label>
              <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} /><br></br>
              <input type="submit" value="LOGIN" />
            </form>
            <div className="footer">
              <p><a>Forget password?</a></p>
              <p>Don't have an account? <b><Link to="/signup">SignUp</Link></b></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
