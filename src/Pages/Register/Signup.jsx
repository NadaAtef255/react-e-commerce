import React, { useState } from 'react'
import { auth } from '../../firebase';
import {     createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import'./Signup.css'
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [error,setError]=useState('')
  const [success,setsuccess]=useState('')
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const history=useHistory()
  const handleSignUp = async (e) => {
    e.preventDefault()
    setError('')
    setsuccess('')
    if(fName.trim().length < 3 ){
        setError('Name mast be 4 caracter')
        return
    } try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password,fName,lName);
      const registeredUser = userCredential.user;
      setUser(registeredUser);
      // الحصول على Token
      const idToken = await registeredUser.getIdToken();
      setToken(idToken);
      setsuccess('register successfule')
      history.push('/login');
    } catch (error) {
        setError('fild register', +error)
    }
  };
  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
            <label htmlFor="fname">Frist Name</label>
            <input onChange={(e)=> setFname(e.target.value) } required id='fname' type="text" value={fName} />
            <label htmlFor="password">password</label>
            <input onChange={(e)=> setPassword(e.target.value) } required id='password' type="password" value={password} />
            <label htmlFor="lname">Last Name</label>
            <input onChange={(e)=> setLname(e.target.value) } required id='lname' type="text" value={lName} />
            <label htmlFor="email">email</label>
            <input onChange={(e)=> setEmail(e.target.value) } required id='email' type="email" value={email} />
            <button type='submit' >Sign Up</button>
        </form>
        {error&& <h2>{error}</h2>}
        {success&& <h2>{success}</h2>}
    </div>
  )
}
