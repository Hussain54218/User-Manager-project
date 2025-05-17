import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function User() {
  const [users, setuser] = useState([]);
  const deleteuser=(userId)=>{
    axios.delete(`http://localhost:4000/api/delet/user/${userId}`)
    .then((respons)=>{
       setuser((peruser)=>peruser.filter((user)=>user._id!==userId))
       toast.success(respons.data.message,{position:'top-right'})
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const respons = await axios.get("http://localhost:4000/api/users");
      setuser(respons.data);
      console.log();
    } catch (error) {
      console.log("can not found user", error);
    }
  };
  return (
    <div className="bg-slate-100 m-36 shadow-slate-400 rounded-lg shadow-lg  items-center justify-center mt-36 p-24">
      <Link to="/add">
        <button className="bg-indigo-600 rounded-sm p-4 px-4 py-2 text-white mb-4 ">
          Adduser
          <PersonAddAltIcon />
        </button>
      </Link> 
      {users.length===0?(
        <div className="flex-col  flex justify-center items-center">
          <h1 className="text-4xl font-bold text-slate-700">Nod data to display</h1>
          <h3 className="font-bold">Please add user NEW USER</h3>
        </div>
      ):(
         <table className="w-full border border-slate-300 text-sm text-left">
        <thead className="bg-indigo-400">
          <tr>
            <th className="border border-slate-300 px-4 py-2">S.No</th>
            <th className="border border-slate-300 px-4 py-2">Name</th>
            <th className="border border-slate-300 px-4 py-2">Email</th>
            <th className="border border-slate-300 px-4 py-2">Address</th>
            <th className="border border-slate-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="bg-white hover:bg-slate-100">
              <td className="border border-slate-300 px-4 py-2">{index + 1}</td>
              <td className="border border-slate-300 px-4 py-2">{user.name}</td>
              <td className="border border-slate-300 px-4 py-2">
                {user.email}
              </td>
              <td className="border border-slate-300 px-4 py-2">
                {user.address}
              </td>

              <td className="border border-slate-300 px-4 py-2">
                <Link to={`/updatuser/`+user._id}>
                  <button className="bg-indigo-600 text-white px-2 py-1 rounded hover:bg-blue-600">
                    <EditSquareIcon />
                  </button>
                </Link>
                 
                <button onClick={()=>deleteuser(user._id)} className="bg-red-500 text-white px-2 py-1 ml-2 rounded hover:bg-red-600">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

     
    </div>
  );
}

export default User;
