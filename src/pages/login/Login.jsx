import React from 'react'
import './login.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [error, setError] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
       setError(true);
      });
  }


  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" id="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" id="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        {error ? <span>Wrong Email or Password!</span> : null}
      </form>
    </div>
  )
}

export default Login