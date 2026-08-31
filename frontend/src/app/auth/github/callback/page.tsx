"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { apiRequest } from "@/lib/api";
import { useRouter } from "next/navigation";


export default function GithubCallback(){

  const { login } = useAuth();

  const router = useRouter();


  useEffect(()=>{


    async function handleGithub(){


      const params =
        new URLSearchParams(
          window.location.search
        );


      const code =
        params.get("code");


      if(!code){
        return;
      }


      try{


        const data =
          await apiRequest(
            "/auth/github",
            {
              method:"POST",

              body:JSON.stringify({
                code,
              }),
            }
          );


        await login(
          data.access_token,
          data.refresh_token
        );


        router.push("/");


      }
      catch(error){

        console.log(
          "Github login failed",
          error
        );

        router.push("/");

      }


    }


    handleGithub();


  },[]);



  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-black
      text-white
    ">

      Signing in with GitHub...

    </div>

  );

}