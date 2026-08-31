"use client";

import {
  User,
  Mail,
  Shield,
  CalendarDays,
  Save,
  Camera,
  Hash,
  CheckCircle,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { apiRequest } from "@/lib/api";

import { useState } from "react";
import { toast } from "sonner";


export default function ProfileSettings() {


  const { user, refreshUser } = useAuth();


  const [name, setName] = useState(
    user?.full_name || ""
  );


  const [loading, setLoading] = useState(false);



  if (!user) {

    return (

      <div className="text-white/60">

        Please login to access settings.

      </div>

    );

  }




  const initials =
    user.full_name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()
    ||
    "U";




  const userId =
    String(user.id)
      .padStart(5, "0");





  async function saveChanges() {


    try {


      setLoading(true);



      await apiRequest(

        "/users/profile",

        {

          method: "PATCH",

          body: JSON.stringify({

            full_name: name,

          }),

        }

      );



      await refreshUser();



      toast.success(
        "Profile updated successfully"
      );



    }

    catch (error: any) {


      toast.error(

        error.message ||
        "Failed to update profile"

      );


    }

    finally {


      setLoading(false);


    }


  }







  return (


    <div>


      <h2
        className="
        text-2xl
        font-bold
        "
      >

        Profile Settings

      </h2>



      <p
        className="
        mt-2
        text-white/50
        "
      >

        Update your personal information

      </p>







      {/* PROFILE CARD */}


      <div

        className="
        mt-8
        flex
        flex-col
        items-center
        gap-5
        rounded-3xl
        border
        border-white/10
        bg-black/20
        p-6
        sm:flex-row
        "

      >




        {/* Avatar */}


        <div

          className="
          relative
          flex
          h-24
          w-24
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-purple-600
          text-3xl
          font-bold
          text-white
          "

        >


          {

            user.avatar

              ?

              <img

                src={user.avatar}

                alt="Avatar"

                className="
                h-full
                w-full
                object-cover
                "

              />

              :

              initials

          }





          <button

            className="
            absolute
            bottom-0
            right-0
            rounded-full
            bg-black
            p-2
            text-purple-400
            border
            border-white/20
            "

          >

            <Camera size={16} />

          </button>



        </div>







        <div>


          <h3
            className="
            text-xl
            font-semibold
            "
          >

            {user.full_name || "User"}

          </h3>



          <p
            className="
            text-white/50
            "
          >

            {user.email}

          </p>


        </div>



      </div>









      {/* EDIT DETAILS */}



      <div
        className="
        mt-8
        space-y-4
        "
      >





        {/* NAME */}


        <div>


          <label
            className="
            text-sm
            text-white/50
            "
          >

            Full Name

          </label>




          <div

            className="
            mt-2
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-black/20
            px-4
            "

          >


            <User size={18} />



            <input

              value={name}

              onChange={(e) =>
                setName(e.target.value)
              }

              maxLength={20}

              className="
              w-full
              bg-transparent
              py-3
              outline-none
              text-white
              "

            />


          </div>



        </div>







        {/* EMAIL */}


        <div>


          <label
            className="
            text-sm
            text-white/50
            "
          >

            Email

          </label>



          <div

            className="
            mt-2
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            "

          >

            <Mail size={18} />

            <span>

              {user.email}

            </span>


          </div>


        </div>









        {/* USER ID */}


        <div>


          <label
            className="
            text-sm
            text-white/50
            "
          >

            User ID

          </label>



          <div

            className="
            mt-2
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            "

          >


            <Hash size={18}/>


            <span>

              #{userId}

            </span>


          </div>


        </div>








        {/* ROLE */}


        <div>


          <label
            className="
            text-sm
            text-white/50
            "
          >

            Account Type

          </label>



          <div

            className="
            mt-2
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            "

          >

            <Shield size={18}/>



            <span>

              {
                user.is_admin
                  ?
                  "Administrator"
                  :
                  "User"
              }

            </span>


          </div>


        </div>









        {/* JOIN DATE */}


        <div>


          <label
            className="
            text-sm
            text-white/50
            "
          >

            Joined

          </label>



          <div

            className="
            mt-2
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-black/20
            px-4
            py-3
            "

          >


            <CalendarDays size={18}/>



            <span>

              {
                user.created_at

                ?

                new Date(
                  user.created_at
                )
                .toLocaleDateString(
                  "en-US",
                  {
                    month:"long",
                    year:"numeric"
                  }
                )

                :

                "Recently"

              }


            </span>



          </div>


        </div>





      </div>









      {/* STATUS */}


      <div

        className="
        mt-6
        flex
        items-center
        gap-2
        rounded-full
        border
        border-green-500/20
        bg-green-500/10
        px-4
        py-2
        text-sm
        text-green-300
        w-fit
        "

      >


        <CheckCircle size={16}/>


        Active Account


      </div>









      {/* SAVE BUTTON */}


      <button


        onClick={saveChanges}


        disabled={loading}


        className="
        mt-8
        flex
        items-center
        gap-2
        rounded-full
        bg-gradient-to-r
        from-purple-600
        to-purple-400
        px-7
        py-3
        font-semibold
        text-black
        transition
        hover:scale-105
        disabled:opacity-50
        "


      >


        <Save size={18}/>



        {

          loading

          ?

          "Saving..."

          :

          "Save Changes"

        }



      </button>





    </div>


  );


}