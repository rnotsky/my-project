"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  User,
  Shield,
  Smartphone,
  Settings,
  Trash2,
  X,
} from "lucide-react";


const menu = [
  {
    name: "Profile",
    href: "/settings/profile",
    icon: User,
  },
  {
    name: "Security",
    href: "/settings/security",
    icon: Shield,
  },
  {
    name: "Verification",
    href: "/settings/verification",
    icon: Smartphone,
  },
  {
    name: "Account",
    href: "/settings/account",
    icon: Settings,
  },
  {
    name: "Delete Account",
    href: "/settings/delete-account",
    icon: Trash2,
  },
];



export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const pathname = usePathname();

  const router = useRouter();



  function handleClose(){

    if(window.history.length > 1){

      router.back();

    }
    else{

      router.push("/profile");

    }

  }



  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      px-5
      py-28
      "
    >


      <div
        className="
        mx-auto
        max-w-6xl
        "
      >



        {/* HEADER */}

        <div
          className="
          mb-8
          flex
          items-center
          justify-between
          "
        >


          <div>

            <h1
              className="
              text-3xl
              font-bold
              "
            >
              Account Settings
            </h1>


            <p
              className="
              mt-2
              text-white/50
              "
            >
              Manage your RNOTSKY account
            </p>


          </div>




          <button

            onClick={handleClose}

            aria-label="Close settings"

            className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-white/70
            hover:bg-white/10
            transition
            "

          >

            <X size={18}/>

            Close


          </button>



        </div>







        <div
          className="
          grid
          gap-6
          lg:grid-cols-[240px_1fr]
          "
        >



          {/* SIDEBAR */}


          <aside

            className="
            h-fit
            rounded-3xl
            border
            border-purple-500/20
            bg-white/5
            p-3
            backdrop-blur-xl
            "

          >


            {
              menu.map((item)=>{


                const Icon = item.icon;


                const active =
                  pathname === item.href;



                return (

                  <Link

                    key={item.href}

                    href={item.href}

                    className={`
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    transition

                    ${
                      active
                      ?
                      "bg-purple-500/20 text-purple-300"
                      :
                      "text-white/60 hover:bg-white/10 hover:text-white"
                    }

                    `}

                  >

                    <Icon size={18}/>

                    {item.name}


                  </Link>


                );


              })
            }



          </aside>







          {/* CONTENT */}


          <section

            className="
            rounded-3xl
            border
            border-purple-500/20
            bg-white/5
            p-6
            backdrop-blur-xl
            "

          >

            {children}


          </section>






        </div>





      </div>



    </main>

  );

}