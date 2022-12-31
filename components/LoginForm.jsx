import React, { useState } from "react";
import { useRouter } from 'next/router'
export default function LoginForm() {
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')  
  const [error, setError] = useState('')
   const router = useRouter()
  function formSub(e){
       e.preventDefault()
       if(email === 'razdankaran11@gmail.com' && password === 'Karan@123k'){
        localStorage.setItem("token", password)
        router.push('/dashboard')
       }else{
          setError(true)
       }

       
  }

 function  valiEmail(){
  
 }
  
  return (
    <>
      <div className="h-[400px] w-[260px] p-3 translate-x-[-60px]">
        <div>
          <img
            src="https://client.bitxtream.com/assets/images/logo.png"
            className="w-[180px]"
          />
        </div>
        <div className="my-2 leading-4">
          <h1 className="text-white	">Sign in</h1>
          <label className="text-[#9f9f9f] text-[12px]">
            Welcome back! Please sign in to continue.
          </label>
        </div>
        <div className="mt-[10px]">
          <form >
            <label className="text-[#9f9f9f] pt-2 pb-2">Email address</label>
            <br />

            <input
              className="w-[100%] mt-2 p-2 outline:none rounded-md bg-black text-white "
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              onKeyPress={valiEmail}
              placeholder="Enter your email address"
            />
             {error &&
             <p className="text-red-500 text-[12px] font-semibold">Please enter a valid email address</p> }
            
            <br />
            <label className="text-[#9f9f9f]" htmlfor="lname">
              Password
            </label>
            <br />
            <input
              placeholder="Enter your password"
              type="password"
              id="password"
              name="password"
              className="w-[100%] mt-2 p-2 outline:none  rounded-md bg-black text-white password"
              value={password}
              onKeyPress={valiEmail}
              onChange={(e)=>setPassword(e.target.value)}
            />

              {error &&           
            <p className="text-red-500 text-[12px] my-1 font-semibold">Please enter correct password</p>
              }
            
            <br />
            <p className="text-[12px] flex justify-end text-[#1de9b6] my-1 font-semibold">
              Forget password?
            </p>
            <div className="m-auto w-[80px] flex justify-center my-1">
              <button
                className=" mt-2 bg-[#1de9b6] w-[100%] p-2 rounded-md test-center"
                type="submit"
                onClick={formSub}
              >
                Sign In
              </button>
            </div>
            <p className="text-[#9f9f9f] mt-1 text-center text-[13px] font-semibold">
              Dont have Account?
              <span className="text-green-400 ml-1">Create a Account</span>
            </p>
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
