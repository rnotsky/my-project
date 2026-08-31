"use client";
import MobileDrawer from "@/components/navbar/MobileDrawer";
import { useAuth } from "@/context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  usePathname,
  useRouter,
} from "next/navigation";
import { useEffect, useRef, useState } from "react";

import AuthModal from "@/components/auth/AuthModal";

import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";


export default function Navbar() {


  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();


  const [open,setOpen] = useState(false);

  const [authOpen,setAuthOpen] = useState(false);

  const [userMenu,setUserMenu] = useState(false);


  const dropdownRef = useRef<HTMLDivElement>(null);



  // Close dropdown outside click

  useEffect(()=>{

    function closeDropdown(e:MouseEvent){

      if(
        dropdownRef.current &&
        !dropdownRef.current.contains(
          e.target as Node
        )
      ){

        setUserMenu(false);

      }

    }


    document.addEventListener(
      "mousedown",
      closeDropdown
    );


    return ()=>{

      document.removeEventListener(
        "mousedown",
        closeDropdown
      );

    };


  },[]);





const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Developers",
    href: "/developers",
  },
    {
    name: "Updates",
    href: "/updates",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Projects",
    href: "/projects",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];





  return (

<>
<nav
className="
fixed
top-4
left-0
z-[100]
w-full
px-4
"
>


<div

className="
relative
overflow-visible
isolate

mx-auto

flex

h-[60px]
xl:h-16

max-w-screen-2xl

items-center

justify-between

rounded-2xl

border

border-white/10

bg-black/40

backdrop-blur-3xl

shadow-[0_10px_50px_rgba(0,0,0,0.65)]

ring-1

ring-white/5

px-4 sm:px-6 xl:px-8
"

>



{/* GLASS EFFECT */}


<div

className="
pointer-events-none

absolute

inset-0

rounded-2xl

bg-gradient-to-b

from-white/[0.06]

to-transparent
"

/>





{/* LOGO */}


<Link

href="/"

className="
relative
z-20
"

>


<Image

src="/brand/logo.png"

alt="Rnotsky"

width={180}

height={45}

priority

className="
w-[120px]
sm:w-[145px]
lg:w-[165px]
xl:w-[180px]
2xl:w-[190px]
h-auto
"

/>


</Link>






{/* DESKTOP NAV LINKS */}


<div

className="
hidden

lg:flex

relative

z-20

items-center

gap-5 xl:gap-6 2xl:gap-8
"

>


{
links.map((link)=>{


const active =
pathname === link.href;



return (

<Link

key={link.href}

href={link.href}

className={`
relative

text-sm

font-medium

transition

${
active
?
"text-white"
:
"text-gray-400 hover:text-white"
}

`}

>


{link.name}



{
active &&

<span
className="
absolute

left-0

bottom-[-20px]

h-[2px]

w-full

rounded-full

bg-purple-500
"

/>

}


</Link>


)


})

}


</div>






{/* RIGHT SIDE */}

<div

className="
hidden

lg:flex

relative

z-20

items-center

gap-4
"

>


{/* AI BUTTON */}


<Link
  href="/assistant"
  className="
    group
    flex
    items-center
    gap-2.5
    rounded-full
    border
    border-purple-500/40
    bg-purple-500/10
    px-5
    py-2.5
    text-sm
    font-semibold
    text-purple-300
    transition-all
    duration-300
    hover:bg-purple-500/20
    hover:border-purple-400
    hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
  "
>
  <Image
    src="/icons/ai.png"
    alt="RNOTSKY AI"
    width={22}
    height={22}
    className="
      h-[22px]
      w-[22px]
      object-contain
      transition-transform
      duration-300
      group-hover:scale-110
    "
  />

  <span>AI</span>
</Link>

 {/*// LOGIN / USER AREA*/}

{
user ? (

<div
ref={dropdownRef}
className="
relative
"
>


<button

onClick={()=>setUserMenu(!userMenu)}

className="
flex
items-center
gap-3

rounded-full

border

border-white/10

bg-white/5

px-4

py-2

transition

hover:bg-white/10
"

>


<div

className="
flex

h-8

w-8

items-center

justify-center

rounded-full

bg-purple-600

text-sm

font-bold

text-white
"

>

{
user.full_name
?
user.full_name.charAt(0).toUpperCase()
:
user.email.charAt(0).toUpperCase()
}

</div>



<span

className="
hidden

xl:block

max-w-[120px]

truncate

text-sm

text-white
"

>

{
user.full_name || user.email
}

</span>



<ChevronDown

size={16}

/>


</button>





{
userMenu && (

<div

className="
absolute

right-0

top-14

z-[999]

w-64

rounded-2xl

border

border-white/10

bg-[#0b0913]/95

backdrop-blur-3xl

shadow-[0_20px_60px_rgba(0,0,0,0.6)]

p-4

animate-in

fade-in

zoom-in-95

duration-200
"

>


<div

className="
border-b

border-white/10

pb-3

mb-3
"

>


<p

className="
text-white

font-semibold

truncate
"

>

{
user.full_name || "User"
}

</p>


<p

className="
text-sm

text-gray-400

truncate
"

>

{
user.email
}

</p>


</div>





<Link

href="/profile"

onClick={() => setUserMenu(false)}

className="
flex
w-full
items-center
gap-3
rounded-xl
px-3
py-3
text-gray-300
transition
hover:bg-white/10
hover:text-white
"

>

<User size={18}/>

Profile

</Link>





<Link

href="/settings/profile"

onClick={() => setUserMenu(false)}

className="
flex
w-full
items-center
gap-3
rounded-xl
px-3
py-3
text-gray-300
transition
hover:bg-white/10
hover:text-white
"

>

<Settings size={18}/>

Settings

</Link>





{
  user.is_admin && (
    <button
      onClick={() => {
        router.push("/admin");
        setUserMenu(false);
      }}
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-3
        py-3
        text-gray-300
        transition
        hover:bg-white/10
        hover:text-white
      "
    >
      <LayoutDashboard size={18} />
      Admin Dashboard
    </button>
  )
}






<button

onClick={()=>{

logout();

setUserMenu(false);

}}

className="
mt-2

flex

w-full

items-center

gap-3

rounded-xl

px-3

py-3

text-red-300

hover:bg-red-500/10
"

>


<LogOut size={18}/>

Logout


</button>



</div>

)

}


</div>


)

:

(

<button

onClick={()=>{

setAuthOpen(true);
setOpen(false);
setUserMenu(false);

}}

className="
group

flex

items-center

gap-2

rounded-full

bg-gradient-to-r

from-purple-700

via-purple-600

to-purple-500

px-6

py-2.5

text-sm

font-semibold

text-white

transition

hover:scale-105

hover:shadow-[0_0_40px_rgba(168,85,247,0.75)]
"

>


Login


<ArrowRight

size={16}

className="
transition

group-hover:translate-x-1
"

/>


</button>

)

}


</div>





{/* MOBILE USER + MENU */}
{/* MOBILE CONTROLS */}

<div
  className="
    relative
    z-30
    flex
    items-center
    gap-3
    lg:hidden
  "
>
  <button
    onClick={() => {
      setOpen(true);
      setUserMenu(false);
    }}
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-xl
      border
      border-white/10
      bg-white/5
      text-white
    "
  >
    <Menu size={22} />
  </button>
</div>

<MobileDrawer
  open={open}
  setOpen={setOpen}
  setAuthOpen={setAuthOpen}
  user={user}
  logout={logout}
/>

</div>
</nav>





<AuthModal

open={authOpen}

onOpenChange={setAuthOpen}

/>


</>

);

}