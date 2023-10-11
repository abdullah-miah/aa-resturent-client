import { Link } from "react-router-dom";


function SignUp() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Now Sign Up</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
          type="text" 
          name="name"
           placeholder="Full Name"
            className="input input-bordered" 
            required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
           name="email"
            placeholder="Email"
             className="input input-bordered" 
             required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="SignUp"></input>
        </div>
      </form>
      <label className="label mx-auto mb-4">
            <p>Login Here? <Link className="text-blue-500 hover:underline" to='/login'> Login</Link></p>
          </label>
    </div>
  </div>
</div>
  )
}

export default SignUp;