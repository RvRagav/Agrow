// import './app1.css';
// import './Login.css';
// import Login from './Login.jsx';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// function SignUp() {
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');
//     const [username,setUsername]=useState('');
//     const [error,setError]=useState('');
    
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(!username || !email || !password){
//             setError('Please fill in all the fields');
//             return;
//         }
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//           setError('Please enter a valid email address.');
//           return;
//         }
//         setError('');
//         console.log('Logging in with:', { username, email, password });
//     };
//   return (
//     <>
//     <header>
//       <h1>AGROW</h1>
//     </header>
//     <div id="body">
//       <div id="login">
//         <div id="heading"><h2>SIGN UP</h2></div>
//          <div id="inLogin">
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//               <label>Username</label>
//               <input type="text" value={username} required placeholder='Abc' onChange={(e)=>{setUsername(e.target.value);}}/><br></br>
//               <label>Email</label>
//               <input type="email" value={email} required placeholder='abc@gmal.com'onChange={(e)=>{setEmail(e.target.value);}}/><br></br>
//               <label>Password</label>
//               <input type="password" value={password} required onChange={(e)=>{setPassword(e.target.value);}}/><br></br>
//               <input type="submit" value="SignUp"/>
//             </form>
//             <p>Already have an account? <b><Link to="/login">Login</Link></b></p>
//           </div>
//       </div>
//     </div>
//     </>
//   );
// }
// export default SignUp;

import './app1.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Please fill in all the fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    console.log('Signing up with:', { username, email, password });
  };

  return (
    <>
      <header>
        <h1>AGROW</h1>
      </header>
      <div className="signup-container">
        <div id="signup">
          <div id="heading"><h2>SIGN UP</h2></div>
          <div id="inSignup">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input type="text" value={username} required placeholder='Abc' onChange={(e) => setUsername(e.target.value)} /><br></br>
              <label>Email</label>
              <input type="email" value={email} required placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} /><br></br>
              <label>Password</label>
              <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} /><br></br>
              <input type="submit" value="SignUp" />
            </form>
            <p>Already have an account? <b><Link to="/login">Login</Link></b></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
