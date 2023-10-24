import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

function ManageItems() {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire(
            "Deleted!", 
            "Items has been deleted.", 
            "success"
            );
          }
          
        });
      }
    });
  };

  return (
    <div className="w-full">
      <SectionTitle
        className=""
        heading="Manage All Items"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div className="overflow-x-auto ml-4">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white ">
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Category</th>
              <th className="text-right">Price</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td className="uppercase">{item.category}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost  bg-red-500 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageItems;
