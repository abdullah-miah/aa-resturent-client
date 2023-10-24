import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

function AddItem() {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          // console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New an Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log("after posting new menu item", data.data);
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading="What's new"
        heading="Add an Item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option selected disabled>
                Pick one
              </option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Drink</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe details"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs my-4">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image", { required: true })}
          />
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn btn-sm mt-4"
        ></input>
      </form>
    </div>
  );
}

export default AddItem;
