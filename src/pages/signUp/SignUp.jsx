import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();
  const {createUser}=useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data)
    
    createUser(data.email, data.password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {name: data.name, email: data.email}
      fetch('http://localhost:5000/users',{
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(saveUser)
      })
      .then(res=>res.json())
      .then(data =>{
        if(data.insertedId){
          Swal.fire({
            title: 'SignUp Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
           navigate('/')
        }
      })
    })
    
  }
  return (
    <>
    <Helmet>
      <title> aa resturent | SignUp</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Now Sign Up</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
          type="text" 
          name="name"
          {...register("name",{ required: true })}
           placeholder="Full Name"
            className="input input-bordered" 
             />
            {errors.name && <span className="text-red-400">Name is field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
           name="email"
           {...register("email", {required:true})}
            placeholder="Email"
             className="input input-bordered" 
             />
               {errors.email && <span className="text-red-400">Email is field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          name="password"
          {...register("password",{ required: true,
             minLength:6,
             maxLength: 20,
             pattern: /^[A-Za-z]+$/i
            })}
          placeholder="Password" 
          className="input input-bordered"
           />
            {errors.password?.type === "required" && (
        <p className="text-red-600">Password is required</p>
      )}
            {errors.password?.type === "minLength" && (
        <p className="text-red-600">Password must be 6 charcters</p>
      )}
            {errors.password?.type === "maxLength" && (
        <p className="text-red-600">Password less then 20 charcters</p>
      )}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="SignUp"></input>
        </div>
      </form>
      <label className="label mx-auto mb-4">
            <p>Already have an account? <Link className="text-blue-500 hover:underline" to='/login'> Login</Link></p>
          </label>
          <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    </>
  )
}

export default SignUp;