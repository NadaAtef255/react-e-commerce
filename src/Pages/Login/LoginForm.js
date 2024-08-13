import React, { useState } from "react";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';
import './LoginForm.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function Login() {
    const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error,setError]=useState('');
  const [success,setsuccess]=useState('')

  const history=useHistory()
  // const handleLogin = async (e) => {
  //   e.prvantDefult()
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     const loggedInUser = userCredential.user;
  //     setUser(loggedInUser);
  //     // الحصول على Token
  //     const idToken = await loggedInUser.getIdToken();
  //     setToken(idToken);
  //     histry.push('/home')
  //   } catch (error) {
  //     console.error("Error logging in: ", error);
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setsuccess('')
    
     try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const registeredUser = userCredential.user;
      setUser(registeredUser);
      // الحصول على Token
      const idToken = await registeredUser.getIdToken();
      setToken(idToken);
      setsuccess('Login successfule')
      history.push('/home');
    } catch (error) {
        setError('fild register', +error)
    }
  };

  return(<>
 
 <form style={{marginTop:'80px'}} onSubmit={handleLogin}>
           
            <label htmlFor="password">password</label>
            <input onChange={(e)=> setPassword(e.target.value) } required id='password' type="password" value={password} />
           
            <label htmlFor="email">email</label>
            <input onChange={(e)=> setEmail(e.target.value) } required id='email' type="email" value={email} />
            <button type='submit' >SignIN</button>
        </form>


  {user?<> <h2>Welcome, {user.email}</h2>
         <p>User ID: {user.uid}</p>
         <p>User Token: {token}</p> </>:''}
  
</>

)}
