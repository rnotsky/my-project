"use client";

import { useState } from "react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import RButton from "@/components/common/RButton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { apiRequest } from "@/lib/api";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

interface AdminLoginFormProps {
  onBackToLogin: () => void;
}

export default function AdminLoginForm({
  onBackToLogin,
}: AdminLoginFormProps) {

  const [showPassword, setShowPassword] = useState(false);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const router = useRouter();
  async function handleAdminLogin(){

    try{

        setLoading(true);


        const response = await apiRequest(
            "/admin/login",
            {
                method:"POST",

                body:JSON.stringify({
                    email,
                    password,
                }),
            }
        );


        localStorage.setItem(
            "access_token",
            response.access_token
        );


        localStorage.setItem(
            "refresh_token",
            response.refresh_token
        );


        toast.success(
            "Admin login successful"
        );


        window.location.href = "/admin";


    }
    catch(error:any){

        toast.error(
            error.message || "Invalid admin credentials"
        );

    }
    finally{

        setLoading(false);

    }

}
  return (
    <div
      className="
        w-full
        space-y-6
      "
    >

      {/* Header */}

      <div className="flex flex-col items-center text-center">

        <Image
          src="/brand/logo.png"
          alt="Rnotsky"
          width={170}
          height={45}
          priority
          className="
            drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]
          "
        />

        <div
          className="
            mt-6
            flex
            items-center
            gap-2
          "
        >

          <ShieldCheck
            className="
              h-7
              w-7
              text-purple-300
            "
          />

          <h1 className="text-3xl font-bold">
            Admin Portal
          </h1>

        </div>


        <p
          className="
            mt-2
            text-sm
            text-gray-400
          "
        >
          Secure access for Rnotsky administrators.
        </p>

      </div>


      {/* Email */}

      <div className="space-y-2">

        <Label htmlFor="admin-email">
          Admin Email
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
 id="admin-email"
 type="email"
 placeholder="admin@rnotsky.com"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
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

        <Label htmlFor="admin-password">
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
 id="admin-password"
 type={showPassword ? "text" : "password"}
 value={password}
 onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter admin password"
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
            onClick={() =>
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

            {showPassword ? (
              <EyeOff size={18}/>
            ) : (
              <Eye size={18}/>
            )}

          </button>

        </div>

      </div>


      {/* Login Button */}

     <RButton
 fullWidth
 size="lg"
 onClick={handleAdminLogin}
 disabled={loading}
>
{
 loading
 ? "Checking..."
 : "Access Dashboard"
}
</RButton>


      {/* Back */}

      <button
        type="button"
        onClick={onBackToLogin}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          text-sm
          text-gray-400
          transition
          hover:text-purple-300
        "
      >

        <ArrowLeft size={16}/>

        Back to User Login

      </button>


    </div>
  );
}