import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


function MyCart() {
    const [cart, refetch]=useCart();
    const total=cart.reduce((sum,item)=>item.price +sum, 0 )
    const handleDelete = item=>{
        Swal.fire({
            title: 'Are you sure?',
            text: `${item.name} | Price:$${item.price}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://aa-resturent-server.vercel.app/carts/${item._id}`,{
                method: 'DELETE'
              })
              .then(res=>res.json())
              .then(data =>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
  return (
    <div className="w-10/12">
        <Helmet>
        <title>aA Boss | My cart</title>
      </Helmet>
      <div className="uppercase font-semibold flex justify-evenly h-[60px] items-center">
      <h2>Total Items: {cart.length}</h2>
      <h2>Total price: $ {total}</h2>
     <Link to='/dashboard/payment'> 
     <button className="btn btn-warning btn-sm">Pay</button>
     </Link>
      </div>
      <div className="overflow-x-auto ">
  <table className="table text-xl">
    {/* head */}
    <thead className="uppercase text-lg">
      <tr>
        <th> # </th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item, index)=><tr
        key={item._id}
        >
            <td>
             {index + 1}
            </td>
            <td>
              <div className=" items-center ">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {item.name}
            </td>
            <td className="text-end">${item.price}</td>
            <td>
              <button onClick={()=>handleDelete(item)} className="btn btn-ghost  bg-red-500 text-white"><FaTrashAlt/></button>
            </td>
          </tr> )
      }
      
      
    </tbody>
   
    
    
  </table>
</div>
      
    </div>
    
  )
}

export default MyCart;