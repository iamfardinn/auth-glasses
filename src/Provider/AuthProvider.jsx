// AuthProvider.js
import React , { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import auth from "../Config/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const[user,setUser] =useState({})
  const [loading,setLoading] =useState(true)



  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }


//sign up
const createUser =(email,password)=> {
  setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)
}


//signin 
const signin =(email,password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password);
}


const logOut=() => {
  return signOut(auth)
}


//observer
useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false)
    
  });

  
},[])



  const authentications = {
    googleLogin,
    createUser,
    signin,
    logOut,
    user,
    loading
  }

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;