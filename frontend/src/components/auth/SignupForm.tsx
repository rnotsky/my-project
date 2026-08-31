"use client";

import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import RButton from "@/components/common/RButton";
import { apiRequest } from "@/lib/api";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface SignupFormProps {
  onSwitchToLogin: () => void;
  onSignupSuccess: () => void;
}
export default function SignupForm({
  onSwitchToLogin,
  onSignupSuccess,
}: SignupFormProps) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const { login } = useAuth();
const router = useRouter();
function githubSignup(){

  const githubClientId =
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;


  if (!githubClientId) {

    toast.error(
      "GitHub login not configured"
    );

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

const googleSignup = useGoogleLogin({

  onSuccess: async (tokenResponse) => {

    try {

      setLoading(true);
      setError("");


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
  "Google signup successful"
);
onSignupSuccess();

    }
    catch(err:any){

      setError(
        err.message || "Google signup failed"
      );

    }
    finally{

      setLoading(false);

    }

  },


  onError:()=>{

    toast.error(
      "Google signup failed"
    );

  }

});



async function handleSignup() {


  console.log("Signup button clicked");

  try {

    setError("");

      if (!fullName || !email || !password || !confirmPassword) {
  setError("Please fill all fields.");
  return;
}


if (fullName.length < 3) {
  setError("Name must contain at least 3 characters.");
  return;
}


if (fullName.length > 20) {
  setError("Name cannot exceed 20 characters.");
  return;
}

if (password !== confirmPassword) {
  setError("Passwords do not match.");
  return;
}

      setLoading(true);

console.log({
  full_name: fullName,
  email,
  password,
});

await apiRequest(
        "/auth/register",
        {
          method: "POST",

          body: JSON.stringify({
            full_name: fullName,
            email,
            password,
          }),
        }
      );

      toast.success(
  "Verification code sent to your email"
);


router.push(
  `/verify-email?email=${encodeURIComponent(email)}`
);

    }
    catch (err: any) {

      setError(
        err.message || "Registration failed"
      );

    }
    finally {

      setLoading(false);

    }

  }
   return (

    <div className="
  w-full
  space-y-4
  sm:space-y-6
"> {/* Header */}

      {/* Header */}

      <div className="flex flex-col items-center text-center">

<Image
  src="/brand/logo.png"
  alt="Rnotsky"
  width={150}
  height={40}
  priority
  className="
    mb-2
    w-[140px]
    sm:w-[170px]
    drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]
  "
/>

        <h1 className="
  mt-4
  sm:mt-6
  text-2xl
  sm:text-3xl
  font-bold
">
          Create Account
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Join Rnotsky and start building with AI.
        </p>
        </div>
                {/* Full Name */}

      <div className="space-y-2">

        <Label htmlFor="name">
          Full Name
        </Label>

        <div className="relative">

          <User
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
  id="name"
  type="text"
  maxLength={20}
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  placeholder="John Doe"
  className="
    h-11
    sm:h-12
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
        <p className="text-xs text-white/40 text-right">
  {fullName.length}/20
</p>

      </div>

      {/* Email */}

      <div className="space-y-2">

        <Label htmlFor="email">
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
             id="email"
             type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="
              h-11
              sm:h-12
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

        <Label htmlFor="password">
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
             id="password"
             value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            className="
              h-11
sm:h-12
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
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              hover:text-white
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

      </div>

      {/* Confirm Password */}

      <div className="space-y-2">

        <Label htmlFor="confirmPassword">
          Confirm Password
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
            id="confirmPassword"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="
              h-11
sm:h-12
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
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
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
            {showConfirmPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

      </div>
      {error && (
  <p className="text-center text-sm text-red-400">
    {error}
  </p>
)}
            {/* Create Account */}

<RButton
  fullWidth
  size="lg"
  onClick={handleSignup}
  disabled={loading}
>
  {loading ? "Creating Account..." : "Create Account"}
</RButton>

      {/* Divider */}

      <div className="flex items-center gap-4">

        <div className="h-px flex-1 bg-white/10" />

        <span
          className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-gray-500
          "
        >
          OR
        </span>

        <div className="h-px flex-1 bg-white/10" />

      </div>

      {/* Social Login */}

      <div className="grid grid-cols-2 gap-3">

        <RButton
  variant="secondary"
  onClick={() => googleSignup()}
>

  <FcGoogle size={18} />

  Google

</RButton>

        <RButton
  variant="secondary"
  onClick={githubSignup}
>

  <FaGithub size={18} />

  GitHub

</RButton>

      </div>

      {/* Footer */}

      <div className="
  pt-1
  sm:pt-2
  text-center
">

        <p className="text-sm text-gray-400">

          Already have an account?

         <button
  type="button"
  onClick={onSwitchToLogin}
  className="
    ml-2
    text-purple-300
    transition-colors
    hover:text-purple-200
  "
>
  Sign In
</button>

        </p>

      </div>
      </div>


  );

}
