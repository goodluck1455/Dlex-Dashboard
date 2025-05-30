"use client";

// import { AuthError } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup  } from "firebase/auth";
import { auth, db, googleProvider } from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useNavbarContext } from "./NavbarContext";
import {setDoc, doc} from "firebase/firestore"
// import { div } from "framer-motion/client";






export default function SignInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {fullName, setfullName} = useNavbarContext()


  const getErrorMessage = (error: FirebaseError): string => {
    const errorMessages: Record<string, string> = {
      "auth/email-already-in-use": "This email is already registered. Try logging in.",
      "auth/too-many-requests": "Too many failed attempts. Please contact team support.",
      "auth/invalid-email": "Please enter a valid email address.",
      "auth/weak-password": "Your password must be at least 6 characters long.",
      "auth/network-request-failed": "Network error. Please check your connection.",
    };
  
    return errorMessages[error.code] || "An unexpected error occurred.";
  };




   const googleSigin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      // Optional: Save to Firestore if needed
      await setDoc(doc(db, "users", user.uid), {
        fullName: user.displayName,
        email: user.email,
        uid: user.uid,
        createdAt: new Date()
      });
  
      toast.success("Signed in with Google successfully!");
      navigate("/Dashboard"); // or your desired route
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred during Google sign-in.");
      }
    }
  };




  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Get user object

// Update Firebase Auth profile
await updateProfile(user, { displayName: fullName });

      // Store user details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      uid: user.uid,
      createdAt: new Date()
    });

      // await updateProfile(user, { displayName: fullName });

      toast.success("Login successful!");
      navigate("/Login"); 
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = getErrorMessage(error);
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="bg-[#3855B3] h-screen max-sm:h-full">
      <div className="max-sm:px-4">
      <h3 className="text-3xl max-sm:text-2xl text-white text-center  py-7 uppercase">Welcome to Dlex Dashboard!</h3>
      </div>
    <div className=" flex justify-center items-center max-sm:px-4 max-sm:py-3">
         
        <div className="bg-[#FFFFFF] rounded-[7.08333px] w-[370.1px] h-fit p-5 max-sm:h-fit mb-2.5 ">
            <h3 className="text-center text-[#181819e5] tracking-[-0.382916px] font-bold text-2xl">Sign up</h3>
                <h3 className="text-[1rem] tracking-[-0.442708px] text-center mt-10">Already Have an account 
                  <NavLink to="/Login"><span className="text-[#3855B3] cursor-pointer">   Login </span> </NavLink> </h3>
        
                <div 
                
                onClick={googleSigin}
                className="rounded-[3.54167px] cursor-pointer gap-1.5 mx-auto mt-8 p-2 flex items-center justify-center border-[0.885417px] border-[#56575828] w-full h-[ 42.5px]">
                        <div>
                            <img src="./images/google.png" alt="" loading="lazy"/>
                        </div>
                        <div>
                        <p>Sign up with Google</p>
                        </div>
                </div>

                <section className="w-full">
                    <div className="flex items-center justify-center mt-4 gap-4">
                        <div className="w-full  text-[#E6E7E9]">
                            <hr className="w-full" />
                        </div>
                        <div>
                           <p>OR</p>
                        </div>
                        <div className="w-full ">
                            <hr className="text-[#E6E7E9] w-full"/>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <form onSubmit={handleSignUp}>


                            <div className="mb-4">

                           <label htmlFor="">Full Name</label> 
                          <input type="text" 
                          value={fullName}
                          onChange={(e) => setfullName(e.target.value)}
                          required

                          className="w-full border-[0.885417px] outline-none border-[#E6E7E9] p-3 rounded-[3.54167px] "  placeholder=""/>
                          </div>

                             
                          

                        <div >

                        <label htmlFor="">Email</label> <br />
                        <input type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        
                        className="w-full border-[0.885417px] outline-none border-[#E6E7E9] p-3 rounded-[3.54167px]"  placeholder=""/>
                        </div>

                        <div>

                        <label htmlFor="">Password</label> 
                        <input type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        
                        className="w-full border-[0.885417px] outline-none border-[#E6E7E9] p-3 rounded-[3.54167px] "  placeholder=""/>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" name="" id="" required /> <label htmlFor="" className="text-[#181819e5] 
                           text-[12.3958px] tracking-[-0.442708px]">Keep me logged in</label>
                        </div>
                      
                                <button type="submit"
                                disabled={loading}
                                className="bg-[#3855B3] cursor-pointer rounded-[3.54167px] mt-6 text-white w-full h-[42.5px]">
                               {loading ? "Signing Up..." : "Sign Up"}
                                    </button>
                                    <ToastContainer
                        autoClose={6000}
                        />
                    </form>
                </section>

        </div>

       
      
    </div>
    </div>
  )
}










