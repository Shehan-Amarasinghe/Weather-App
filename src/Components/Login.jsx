import React, { useState } from 'react'
import WeatherApp from './WeatherApp';

function Login() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [isLoggedin, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( user === 'Admin' && pass === '123'){
            setIsLoggedIn(true);
            setError('');
        }else {
            setError('Invalid details please check your details.');
        }
    }


    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handlePassword = (e) => {
        setPass(e.target.value);
    }



  return (
    <div>
          {isLoggedin ? (
        <div>
            <WeatherApp/>
        </div>
        ) : (
        <div className='form-container'>
        <form onSubmit={handleSubmit} className='form'>
                {error && <p className='p-tag' style={{ color: 'red' }}>{error}</p>}
            <input type="text" placeholder='Enter Username' onChange={handleUser} value={user}/>  <br /> <br />
            <input type="password" placeholder='Enter Password' onChange={handlePassword} value={pass} />  <br /> <br />
            <button type='submit' className='form-btn'> Login</button>
        </form>
        </div>
        )}
    </div>
  )
}

export default Login