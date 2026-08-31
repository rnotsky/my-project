"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { apiRequest } from "@/lib/api";


export interface User {

  id:number;

  full_name?:string | null;

  email:string;

  avatar?:string | null;

  provider?:string | null;

  is_admin:boolean;

  is_active:boolean;

  is_verified:boolean;

  created_at:string;

}



interface AuthContextType {

  user:User | null;

  loading:boolean;

  login:(
    access_token:string,
    refresh_token:string
  )=>Promise<void>;

  logout:()=>void;

  refreshUser:()=>Promise<void>;

}



const AuthContext =
createContext<AuthContextType | undefined>(
  undefined
);





export function AuthProvider({
  children,
}:{
  children:ReactNode;
}){


  const [user,setUser] =
  useState<User | null>(null);


  const [loading,setLoading] =
  useState(true);





  async function refreshUser(){


    const token =
    localStorage.getItem(
      "access_token"
    );


    if(!token){

      setUser(null);

      setLoading(false);

      return;

    }



    try{


      const data =
      await apiRequest(
        "/auth/me"
      );



      setUser(data);



    }
    catch(error){

      console.log(
        "Auth check failed",
        error
      );


      localStorage.removeItem(
        "access_token"
      );


      localStorage.removeItem(
        "refresh_token"
      );


      setUser(null);


    }
    finally{

      setLoading(false);

    }


  }






  async function login(
    access_token:string,
    refresh_token:string
  ){



    // SAVE TOKEN FIRST

    localStorage.setItem(
      "access_token",
      access_token
    );


    localStorage.setItem(
      "refresh_token",
      refresh_token
    );



    // LOAD USER

    await refreshUser();


  }








  function logout(){


    localStorage.removeItem(
      "access_token"
    );


    localStorage.removeItem(
      "refresh_token"
    );


    setUser(null);


    window.location.href="/";


  }








  useEffect(()=>{


    refreshUser();


  },[]);








  return (

    <AuthContext.Provider

      value={{

        user,

        loading,

        login,

        logout,

        refreshUser,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}








export function useAuth(){


  const context =
  useContext(AuthContext);


  if(!context){

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );

  }


  return context;


}