import { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className='flex flex-col items-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5'>
        <h1 className='text-3xl font-semibold text-center text-gray-700'>Login
          <span className='bg-clip-text text-transparent bg-gradient-to-l
          from-blue-600 to-purple-700 font-bold'> Baatchit <lord-icon
              src="https://cdn.lordicon.com/ayhtotha.json"
              trigger="hover"
              colors="primary:#7166ee">
            </lord-icon></span></h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-gray-600 font-semibold label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={username} onChange={(e) => setusername(e.target.value)}
            />
            <label className='label p-2'>
              <span className='text-gray-600 font-semibold label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to='/signup' className='text-sm text-gray-700 hover:underline hover:text-blue-600 mt-3 inline-block'>{"Don't"} have an account?</Link>
          <div>
            <button className='btn btn-block btn-sm mt-3' disabled={loading}>{loading ? <span className='loading loading-spinner'></span> : 'Login'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;