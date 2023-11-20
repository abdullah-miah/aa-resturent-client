import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)
function AuthProvider({children}) {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    };
    const googleSingIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
       const unsubcribe=  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            //get and set token
           if(currentUser){
            axios.post('https://aa-resturent-server.vercel.app/jwt', {email: currentUser.email})
            .then(data=>{
                // console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false)
            })
           }else{
            localStorage.removeItem('access-token');
           }
           
        });
        return ()=>{
            return unsubcribe();
        }
    },[])

    const authInfo ={
       user,
       loading,
       createUser,
       signIn,
       logOut,
       googleSingIn,

    }
  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;