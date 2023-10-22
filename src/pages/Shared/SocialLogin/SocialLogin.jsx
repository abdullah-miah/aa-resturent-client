import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function SocialLogin() {
    const {googleSingIn}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathName || "/";
    const handleGoogleSingnIn =()=>{
        googleSingIn()
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            fetch('http://localhost:5000/users',{
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res=>res.json())
            .then(()=>{
                navigate(from, {replace: true})
            })
            if(loggedInUser){
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }
          })
          
        
    }
  return (
    <div>
        <div className="divider"></div>
        <div className="w-full text-center my-4">
        <button onClick={handleGoogleSingnIn} className="btn btn-circle btn-outline">
      <FaGoogle/>
     </button>
        </div>
    </div>
  )
}

export default SocialLogin;