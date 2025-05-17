import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";
import toast from "react-hot-toast"
function AddUser() {
    const users = {
    name: "",
    email: "",
    address: ""
  };

  const [user, setUser] = useState(users);

const navigate=useNavigate()
  const inputhandel = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handelsubmit=async(e)=>{
  e.preventDefault()

     try {
         await axios.post("http://localhost:4000/api/user",user)
         .then((respons)=>{
          toast.success(respons.data.message,{position:"top-right"})
           navigate("/")

         })
     } catch (error) {
        console.log(error)
     }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl border border-slate-200 shadow-slate-400 shadow-md">
        <Link to="/">
          <ArrowBackIcon/>
        </Link>
        <h2 className="text-2xl font-bold text-center mb-6 text-s uppercase shadow shadow-sky-300 mt-3">
          Add new user
        </h2>
        <form className="space-y-4" onSubmit={handelsubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Name:
            </label>
            <input
             onChange={inputhandel}
              id="name"
              type="text"
              name="name"
              placeholder="your naem"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
                E-mail:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={inputhandel}
              placeholder="your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block mb-1 font-medium text-gray-700"
            >
              Address:
            </label>
            <input
            onChange={inputhandel}
              id="address"
              name="address"
              type="text"
              placeholder="your address"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
