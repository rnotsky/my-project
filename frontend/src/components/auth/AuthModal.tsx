"use client";

import { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import AdminLoginForm from "./AdminLoginForm";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { X } from "lucide-react";


interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}


export default function AuthModal({
  open,
  onOpenChange,
}: AuthModalProps) {


  const [mode, setMode] = useState<
    "login" | "signup" | "admin"
  >("login");

  return (

    <Dialog
      open={open}
      modal={true}

      onOpenChange={(value)=>{

        onOpenChange(value);


        if(!value){

          setMode("login");

        }

      }}

    >




      <DialogContent

        showCloseButton={false}


        className="

          fixed

          left-1/2

          top-1/2


          -translate-x-1/2

          -translate-y-1/2



          w-[95vw]

          max-w-md


          sm:max-w-lg


          lg:max-w-xl



          max-h-[90vh]

          overflow-y-auto



          p-0



          rounded-3xl



          border

          border-white/10



          bg-[#0b0913]/95



          backdrop-blur-3xl



          text-white



          shadow-[0_0_100px_rgba(168,85,247,0.35)]

        "


      >




        {/* CLOSE BUTTON */}


        <button

          type="button"

          onClick={()=>onOpenChange(false)}


          className="

            absolute

            right-5

            top-5


            z-[200]


            flex

            h-9

            w-9

            items-center

            justify-center



            rounded-full



            text-gray-400



            transition



            hover:bg-white/10

            hover:text-white

          "

        >

          <X
            className="
              h-5
              w-5
            "
          />


        </button>








       




        <div

          className="

            pointer-events-none

            absolute

            -top-32

            left-1/2


            h-72

            w-72


            -translate-x-1/2


            rounded-full


            bg-purple-500/20


            blur-[120px]

          "

        />







        {/* CONTENT */}



        <div

          className="

            relative

            z-10


            p-5


            sm:p-7


            lg:p-8


          "

        >




          {
            mode === "login" && (

           <LoginForm

  onSwitchToSignup={() =>
    setMode("signup")
  }

  onSwitchToAdmin={() =>
    setMode("admin")
  }

  onLoginSuccess={() => {
    onOpenChange(false);
    setMode("login");
  }}

/>

            )
          }







          {
            mode === "signup" && (

 <SignupForm
  onSwitchToLogin={() => setMode("login")}
  onSignupSuccess={() => {
    onOpenChange(false);
    setMode("login");
  }}
/>
            )
          }







          {
            mode === "admin" && (

              <AdminLoginForm

                onBackToLogin={()=>
                  setMode("login")
                }

              />

            )
          }





        </div>





      </DialogContent>




    </Dialog>

  );

}