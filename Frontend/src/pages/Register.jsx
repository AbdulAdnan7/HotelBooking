import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'


const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://localhost:5000/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            })

            const data = await res.json();

           //if it response store it into localStorage
            if(res.ok) {
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/');
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (err) {
            alert('Error during Registration');
            console.log(err)
        }

  } 

     //handle google register success
    const handleGoogleSuccess = (credentialResponse) => {
        if(credentialResponse.credential) {
        const userData = jwtDecode(credentialResponse.credential)
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/')
        }
    }


    return (
        <>
            <div className='flex justify-center items-center min-h-screen bg-gray-100'>
                <div className='bg-white p-8 rounded shadow-md w-full max-w-sm space-y-6'>
                    <h2 className='text-2xl font-bold text-center'>Register</h2>

                    <form className='space-y-4' onSubmit={handleRegister}>
                        <div>
                            <label className='block text-sm font-medium'>Name</label>

                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className='w-full px-4 border rounded py-2' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium'>Email</label>
                            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className='border w-full rounded px-4 py-2' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium'>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className='border w-full rounded px-4 py-2' />
                        </div>
                        <button type='submit' className='w-full bg-purple-600 px-4 py-2 text-white rounded hover:bg-purple-700'>Register</button>
                    </form>
                    <p className='text-sm text-center text-gray-500'>Already have an account?{' '}
                        <button className='text-blue-500 hover:underline' onClick={() => navigate('/login')}>Login</button></p>

                    <div className='flex items-center gap-2'>
                        <hr className='flex-grow border-gray-300' />
                        <span className='text-gray-500 text-sm'>or</span>
                        <hr className='flex-grow border-gray-300' />
                    </div>
                    <div className='flex justify-center'>
                        <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => alert('Google Sign-in Failed')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register