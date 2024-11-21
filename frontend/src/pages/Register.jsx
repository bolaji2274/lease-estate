import React from "react";
import { Link } from 'react-router-dom'
import { MdUpload} from 'react-icons/md'

const Register = () => {
  return (
    <div  className="absolute h-full w-full bg-black/40 z-50 flexCenter">
      <div>
        <form action="" className="flex flex-col gap-y-2.5 bg-white w-[366px] p-7 rounded-xl shadow-md text-[14px]">
    
            <h3 className="h3 my-4">Sign Up</h3>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="bg-primary border-none p-2 pl-4 rounded-md outline-none"
          />
          <input type="text" name="lastName" placeholder="Last Name" required
          className="bg-primary border-none p-2 pl-4 rounded-md outline-none" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="bg-primary border-none p-2 pl-4 rounded-md outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="bg-primary border-none p-2 pl-4 rounded-md outline-none"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="bg-primary border-none p-2 pl-4 rounded-md outline-none"
          />
          <input type="file" id="image" name="profileimage" accept="image/*" hidden required />
          <label htmlFor="image">
            <div className="flexCenter ring-1 ring-slate-900/10 p-1 h-16 w-16 rounded">
              <MdUpload className="text-tertiary text-2xl"/>
            </div>
          </label>
          <button type="submit" className="btn-secondary rounded mt-2">Register</button>
          <div className="text-gray-30">
            Already have an account? 
            <Link to={'/login'} className="text-secondary cursor-pointer ml-2">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
