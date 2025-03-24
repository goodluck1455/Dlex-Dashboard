"use client";
// import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";
// import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavbarContext } from "./NavbarContext";






export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


//   const [user, setUser] = useState(null);

  const { setfullName} = useNavbarContext()


  const getErrorMessage = (error: FirebaseError): string => {
    const errorMessages: Record<string, string> = {
      "auth/email-already-in-use": "This email is already registered. Try logging in.",
     "auth/user-disabled": "This account has been disabled. Contact support.",
     "auth/too-many-requests": "Too many failed attempts. Please try again later.",
      "auth/user-not-found": "No account found with this email. Please sign up.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/network-request-failed": "Network error. Please check your connection.",
      "auth/invalid-credential": "Invalid email or password. Please try again.",
    };
  
    return errorMessages[error.code] || "An unexpected error occurred.";
  };


  const googleSigin = ()=>{
    toast.info("Login with Google coming soon, Please Login with your email and password");
   }

   const rememberPasw = ()=>{
    toast.info("Coming soon, pls contact support team @, goodluckstephen237@gmail.com");
   }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser?:any) => {
      if (currentUser) {
        // setUser(currentUser);
  
        // Fetch user's full name from Firestore
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setfullName(userDocSnap.data().fullName);
        }
      } else {
        // setUser(null);
        setfullName("");
      }
    });
  
    return () => unsubscribe(); // Cleanup on unmount
  }, []);




  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/dashboard"); 
    } catch (error: any) {
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
      <div className=" h-sc max-sm:h-full "> 
       <div className="max-sm:px-4">
      <h3 className="text-3xl max-sm:text-2xl text-white text-center  py-7 uppercase">Welcome Back to Dlex!</h3>
      </div>

    <div className=" flex justify-center items-center max-sm:px-4">
        <div className="bg-[#FFFFFF] rounded-[7.08333px] w-[370.1px] h-[510.89px] p-5 max-sm:h-fit mb-2.5 ">
            <h3 className="text-center text-[#181819e5] tracking-[-0.382916px] font-bold text-2xl">Login</h3>
                <h3 className="text-[1rem] tracking-[-0.442708px] text-center mt-10">Don't have an account yet? <br className="hidden max-sm:block" />
                   <NavLink to="/"> <span className="text-[#3855B3]"> Create an account</span> </NavLink> </h3>
        
                <div 
                
                onClick={googleSigin}
                className="rounded-[3.54167px] cursor-pointer gap-1.5 mx-auto mt-8 p-2 flex items-center justify-center border-[0.885417px] border-[#56575828] w-full h-[ 42.5px]">
                        <div>
                            <img src="./images/google.png" alt="" loading="lazy"/>
                        </div>
                        <div>
                        <p>Login with Google</p>
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
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">

                        <label htmlFor="">Email</label> <br />
                        <input type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        
                        className="w-full border-[0.885417px] outline-none border-[#E6E7E9] p-3 rounded-[3.54167px]"  placeholder=""/>
                        </div>

                        <div>

                        <span className="flex justify-between"> <label htmlFor="">Password</label> <label   onClick={rememberPasw} htmlFor="" className="text-[#3855B3] cursor-pointer tracking-[-0.442708px] text-[12.3958px]">Remember me</label></span>
                        <input type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        
                        className="w-full border-[0.885417px] outline-none border-[#E6E7E9] p-3 rounded-[3.54167px] "  placeholder=""/>
                        </div>
                        <div 
                      
                        className="flex items-center gap-1">
                            <input type="checkbox" name="" id="" /> <label htmlFor="" className="text-[#181819e5] 
                           text-[12.3958px] tracking-[-0.442708px]">Keep me logged in</label>
                        </div>
                      
                                <button type="submit"
                                disabled={loading}
                                className="bg-[#3855B3] cursor-pointer rounded-[3.54167px] mt-6 text-white w-full h-[42.5px]">
                                {loading ? "Logging in..." : "Login"}
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










