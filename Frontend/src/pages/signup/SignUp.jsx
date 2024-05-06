import { React, useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullNAme: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })
  const { loading, signup } = useSignup()
  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-center text-gray-700'>Sign up <span className='bg-clip-text text-transparent bg-gradient-to-l
          from-blue-600 to-purple-700 font-bold'>Baatchit
          <lord-icon
            src="https://cdn.lordicon.com/ayhtotha.json"
            trigger="hover"
            colors="primary:#7166ee">
          </lord-icon></span></h1>
        <form onSubmit={handelSubmit}>
          <div>
            <label className='label p-2'>
              <span className=' text-gray-600 font-semibold label-text'>Full name</span>
            </label>
            <input type='text' placeholder='full name' className='w-full input input-bordered h-10' value={inputs.fullNAme}
              onChange={(e) => setInputs({ ...inputs, fullNAme: e.target.value })} />

            <label className='label p-2'>
              <span className=' text-gray-600 font-semibold label-text'>Username</span>
            </label>
            <input type='text' placeholder='username' className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
            <label className='label p-2'>
              <span className=' text-gray-600 font-semibold label-text'>Password</span>
            </label>
            <input type='password' placeholder='password' className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <label className='label p-2'>
              <span className=' text-gray-600 font-semibold label-text'>Confirm password</span>
            </label>
            <input type='password' placeholder='confirm password' className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />

          </div>
          {/* Gender checkbox */}
          <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />
          <Link to={'/login'} className='text-sm text-gray-600 hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>Already have an account?</Link>
          <div>
            <button className='btn btn-block btn-sm mt-3 border-slate-700' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;