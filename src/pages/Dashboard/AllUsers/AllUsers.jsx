import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function AllUsers() {
  const [axiosSecure]= useAxiosSecure();
  // const token = localStorage.getItem('access-token')
  const {data: users=[], refetch}= useQuery(['users'], async()=>{
    const res = await axiosSecure.get('/users')
    return res.data;
  })

  const handleDelete = user=>{
      
  }
  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.modifiedCount){
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  return (

    <div className="w-9/12">
       <Helmet>
        <title>aA Boss | AllUsers</title>
      </Helmet>
       <h3 className="text-3xl font-semibold my-4">Total Users:  {users.length}</h3>
       <div className="overflow-x-auto ">
  <table className="table table-zebra text-lg">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
      users.map((user,index)=>  <tr
      key={user._id}
      >
        <th>{index +1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td> {
          user.role === 'admin' ? 'admin' : 
          <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost  bg-orange-400 text-white text-lg"><FaUsersCog/></button>
          }</td>
        <td>  <td>
              <button onClick={()=>handleDelete()} className="btn btn-ghost  bg-red-500 text-white"><FaTrashAlt/></button>
            </td></td>
      </tr>)
     }
     
    
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default AllUsers