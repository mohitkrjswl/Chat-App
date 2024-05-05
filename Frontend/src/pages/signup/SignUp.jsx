import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-600'>Sign up <span className='bg-clip-text text-transparent bg-gradient-to-l
          from-blue-600 to-purple-700 font-bold'>Baatchit
          <lord-icon
            src="https://cdn.lordicon.com/ayhtotha.json"
            trigger="hover"
            colors="primary:#7166ee">
          </lord-icon></span></h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className=' text-gray-600 font-semibold label-text'>Full name</span>
            </label>
            <input type='text' placeholder='full name' className='w-full input input-bordered h-10' />
            <label className='label p-2'>
              <span className=' text-gray-600 font-semibold label-text'>Username</span>
            </label>
            <input type='text' placeholder='username' className='w-full input input-bordered h-10' />
            <label className='label p-2'>
              <span className=' text-gray-600 font-semibold label-text'>Password</span>
            </label>
            <input type='text' placeholder='password' className='w-full input input-bordered h-10' />
            <label className='label p-2'>
              <span className=' text-gray-600 font-semibold label-text'>Confirm password</span>
            </label>
            <input type='text' placeholder='confirm password' className='w-full input input-bordered h-10' />

          </div>
          {/* Gender checkbox */}
          <GenderCheckBox />
          <a className='text-sm text-gray-600 hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>Already have an account?</a>
          <div>
            <button className='btn btn-block btn-sm mt-3 border-slate-700'>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp