import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
   
    const [disabled,setDisable]= useState(true);
    const {signIn}=useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = event =>{
        event.preventDefault();
        const form =event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            Swal.fire({
              title: 'Login Successfully',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
        })
    }

    const handleValidateCaptcha = (e) =>{
      const user_Captcha_Value = e.target.value;
      console.log(user_Captcha_Value);
      if(validateCaptcha(user_Captcha_Value)){
          setDisable(false)
      }else{
          setDisable(true);
      }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email Adress"
                className="input input-bordered"
                name="email"
               
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
               
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* react simple captcha */}
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handleValidateCaptcha}
                type="text"
                placeholder="type the captcha"
                name="captcha"
                className="input input-bordered"
                
                
              />
             
            </div>
            <div className="form-control mt-6">
             
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login"></input>
            </div>
          </form>
          <p className='flex justify-center items-center mb-2'><small>New Here? <Link className='text-blue-500 text-sm hover:underline' to= "/signup">Crate an account</Link></small></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
