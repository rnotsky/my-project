"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";

import RButton from "@/components/common/RButton";
import { apiRequest } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";


interface LoginFormProps {
  onSwitchToSignup: () => void;
  onSwitchToAdmin: () => void;
  onLoginSuccess: () => void;
}


export default function LoginForm({
  onSwitchToSignup,
  onSwitchToAdmin,
  onLoginSuccess,
}: LoginFormProps) {


  const [showPassword, setShowPassword] = useState(false);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [loading,setLoading] = useState(false);

const [error,setError] = useState("");


const { login } = useAuth();
const router = useRouter();


function githubLogin(){

  const githubClientId =
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;


  if (!githubClientId) {
    console.error("GitHub Client ID missing");
    toast.error("GitHub login is not configured");
    return;
  }


  const redirectUri =
    encodeURIComponent(
      "http://localhost:3000/auth/github/callback"
    );


  const githubUrl =
    `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${redirectUri}&scope=user:email`;


  window.location.href = githubUrl;

}
const googleLogin = useGoogleLogin({

  onSuccess: async (tokenResponse) => {

    try {

      setLoading(true);

      const data = await apiRequest(
        "/auth/google",
        {
          method:"POST",

          body:JSON.stringify({
            token: tokenResponse.access_token,
          }),
        }
      );


      await login(
        data.access_token,
        data.refresh_token
      );


      toast.success(
        "Google login successful"
      );


      onLoginSuccess();


    }
    catch(err:any){

      setError(
        err.message || "Google login failed"
      );

    }
    finally{

      setLoading(false);

    }

  },


  onError:()=>{

    toast.error(
      "Google login failed"
    );

  }

});

async function handleLogin(){

  try {

    setLoading(true);
    setError("");


    const data = await apiRequest(
      "/auth/login",
      {
        method:"POST",

        body:JSON.stringify({
          email,
          password,
        }),
      }
    );


 await login(
  data.access_token,
  data.refresh_token
);


toast.success("Login successful ..");


onLoginSuccess();

  }
  catch(err:any){

    setError(
      err.message || "Login failed"
    );

  }
  finally{

    setLoading(false);

  }

}


  return (

    <div className="space-y-6">


      {/* Logo */}

      <div className="flex flex-col items-center text-center">

       <Image
  src="/brand/logo.png"
  alt="Rnotsky"
  width={170}
  height={45}
  priority
  className="
    w-[170px]
    h-auto
    drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]
  "
/>


        <h1 className="mt-6 text-3xl font-bold">
          Welcome Back
        </h1>


        <p className="mt-2 text-sm text-gray-400">
          Sign in to continue your AI journey.
        </p>


      </div>



      {/* Error */}

      {
        error && (

          <p className="
            text-center
            text-sm
            text-red-400
          ">
            {error}
          </p>

        )
      }



      {/* Email */}

      <div className="space-y-2">

        <Label>
          Email
        </Label>


        <div className="relative">

          <Mail
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            h-5
            w-5
            text-gray-500
            "
          />


          <Input

            value={email}

            onChange={(e)=>
              setEmail(e.target.value)
            }

            type="email"

            placeholder="you@example.com"

            className="
            h-12
            rounded-xl
            border-white/10
            bg-white/5
            pl-12
            text-white
            placeholder:text-gray-500
            focus:border-purple-500
            focus:ring-purple-500/20
            "

          />

        </div>

      </div>





      {/* Password */}

      <div className="space-y-2">

        <Label>
          Password
        </Label>


        <div className="relative">


          <Lock
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            h-5
            w-5
            text-gray-500
            "
          />


          <Input

            value={password}

            onChange={(e)=>
              setPassword(e.target.value)
            }


            type={
              showPassword
              ? "text"
              : "password"
            }


            placeholder="Enter password"


            className="
            h-12
            rounded-xl
            border-white/10
            bg-white/5
            pl-12
            pr-12
            text-white
            placeholder:text-gray-500
            focus:border-purple-500
            focus:ring-purple-500/20
            "

          />



          <button

            type="button"

            onClick={()=>
              setShowPassword(!showPassword)
            }


            className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-white
            "

          >

            {
              showPassword
              ?
              <EyeOff size={18}/>
              :
              <Eye size={18}/>
            }


          </button>


        </div>


      </div>





      {/* Remember */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Checkbox id="remember"/>

          <Label
            htmlFor="remember"
            className="text-sm text-gray-400"
          >
            Remember me
          </Label>

        </div>



        <button
          className="
          text-sm
          text-purple-300
          hover:text-purple-200
          "
        >
          Forgot?
        </button>


      </div>






      {/* Login Button */}


      <RButton

        fullWidth

        size="lg"

        onClick={handleLogin}

      >

        {
          loading
          ?
          "Signing in..."
          :
          "Sign In"
        }


      </RButton>





      {/* Divider */}

      <div className="flex items-center gap-4">

        <div className="flex-1 h-px bg-white/10"/>

        <span className="
        text-xs
        uppercase
        tracking-[0.25em]
        text-gray-500
        ">
          OR
        </span>

        <div className="flex-1 h-px bg-white/10"/>

      </div>





{/* Social */}

<div className="grid grid-cols-2 gap-3">





<RButton
  variant="secondary"
  onClick={() => googleLogin()}
>

  <FcGoogle size={18} />

  Google

</RButton>



<RButton 
 variant="secondary"
 onClick={githubLogin}
>

  <FaGithub size={18}/>

  GitHub

</RButton>


</div>





      {/* Footer */}

      <div className="space-y-4">


        <p className="
        text-center
        text-sm
        text-gray-400
        ">

          Don't have an account?


          <button

            onClick={onSwitchToSignup}

            className="
            ml-2
            text-purple-300
            hover:text-purple-200
            "

          >

            Create one

          </button>


        </p>





        <RButton

          variant="secondary"

          fullWidth

          onClick={onSwitchToAdmin}

        >

          Admin Login

        </RButton>



      </div>


    </div>

  );

}