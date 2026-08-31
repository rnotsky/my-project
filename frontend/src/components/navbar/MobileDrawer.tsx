"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  X,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  Home,
  Package,
  Rocket,
  Info,
  Phone,
  Code2,
  CreditCard,
} from "lucide-react";

interface MobileDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  logout: () => void;
}



function shortenName(
  name: string,
  limit = 7
) {

  if (!name) return "User";

  return name.length > limit
    ? name.slice(0, limit) + ".."
    : name;

}




const links = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },


  {
    name: "Products",
    href: "/products",
    icon: Package,
  },


  {
    name: "Developers",
    href: "/developers",
    icon: Code2,
  },

    {
    name: "Updates",
    href: "/updates",
    icon: Info,
  },

  {
    name: "Pricing",
    href: "/pricing",
    icon: CreditCard,
  },


  {
    name: "Projects",
    href: "/projects",
    icon: Rocket,
  },





  {
    name: "Contact",
    href: "/contact",
    icon: Phone,
  },

];





export default function MobileDrawer({
  open,
  setOpen,
  setAuthOpen,
  user,
  logout,
}: MobileDrawerProps) {


const initials =
user?.full_name
?.split(" ")
.map((name:string)=>name[0])
.join("")
.slice(0,2)
.toUpperCase()
||
user?.email?.charAt(0).toUpperCase()
||
"U";





return (

<AnimatePresence>

{open && (

<>


{/* BACKDROP */}

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

onClick={()=>setOpen(false)}

className="
fixed
inset-0
z-[998]
bg-black/60
backdrop-blur-sm
lg:hidden
"

/>






{/* DRAWER */}


<motion.aside

initial={{x:"100%"}}

animate={{x:0}}

exit={{x:"100%"}}

transition={{
type:"spring",
stiffness:280,
damping:30
}}

className="
fixed
right-0
top-0
z-[999]
h-screen
w-[85%]
max-w-[380px]
overflow-y-auto
border-l
border-white/10
bg-[#08070d]/95
backdrop-blur-3xl
shadow-[-20px_0_70px_rgba(0,0,0,.6)]
lg:hidden
"

>





{/* HEADER */}


<div
className="
flex
items-center
justify-between
p-6
"
>

<h2 className="text-xl font-bold text-white">
Menu
</h2>


<button

onClick={()=>setOpen(false)}

className="
rounded-xl
border
border-white/10
p-2
text-white
hover:bg-white/10
"

>

<X size={20}/>

</button>


</div>







{/* USER SECTION */}



{user ? (

<div className="px-6 pb-6">


<div className="
flex
items-center
gap-4
">


<div

className="
flex
h-14
w-14
shrink-0
items-center
justify-center
rounded-full
border
border-purple-400/30
bg-gradient-to-br
from-purple-600
to-purple-900
text-xl
font-bold
text-white
"

>

{initials}

</div>




<div className="min-w-0">


<h3

className="
max-w-[140px]
truncate
font-semibold
text-white
"

>

{shortenName(
user.full_name || "User"
)}

</h3>



<p

className="
max-w-[160px]
truncate
text-sm
text-gray-400
"

>

{user.email}

</p>


</div>



</div>


</div>


):(


<div className="px-6 pb-6">


<h3 className="text-xl font-bold text-white">

Welcome User 

</h3>


<p className="mt-2 text-gray-400">

Login to continue.

</p>


</div>


)}







<div className="border-t border-white/10"/>







{/* MAIN NAVIGATION */}



<div className="space-y-2 p-5">


{
links.map((link)=>{


const Icon = link.icon;


return (

<Link

key={link.href}

href={link.href}

onClick={()=>setOpen(false)}

className="
flex
items-center
gap-4
rounded-2xl
px-4
py-3
text-gray-300
transition
hover:bg-white/10
hover:text-white
"

>

<Icon size={20}/>

{link.name}

</Link>


)


})
}





<div className="my-6 border-t border-white/10"/>





<Link
  href="/assistant"
  onClick={() => setOpen(false)}
  className="
    flex
    items-center
    justify-center

    rounded-2xl

    bg-gradient-to-r
    from-purple-700
    via-purple-600
    to-purple-500

    py-3

    font-semibold
    text-white

    transition-all
    duration-300

    hover:scale-[1.02]
    hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
  "
>
  AI Assistant
</Link>





<div className="my-6 border-t border-white/10"/>







{/* ACCOUNT MENU */}



{user ? (


<div className="space-y-2">


<Link

href="/profile"

onClick={()=>setOpen(false)}

className="
flex
items-center
gap-4
rounded-2xl
px-4
py-3
text-gray-300
transition
hover:bg-white/10
hover:text-white
"

>

<User size={20}/>

Profile


</Link>





<Link

href="/settings/profile"

onClick={()=>setOpen(false)}

className="
flex
items-center
gap-4
rounded-2xl
px-4
py-3
text-gray-300
transition
hover:bg-white/10
hover:text-white
"

>

<Settings size={20}/>

Settings


</Link>





{user.is_admin && (

<Link

href="/admin"

onClick={()=>setOpen(false)}

className="
flex
items-center
gap-4
rounded-2xl
px-4
py-3
text-gray-300
transition
hover:bg-white/10
hover:text-white
"

>

<LayoutDashboard size={20}/>

Admin Dashboard


</Link>

)}





<button

onClick={()=>{

logout();

setOpen(false);

}}

className="
mt-3
flex
w-full
items-center
gap-4
rounded-2xl
bg-red-500/10
px-4
py-3
text-red-300
transition
hover:bg-red-500/20
"

>

<LogOut size={20}/>

Logout


</button>



</div>



):(


<button

onClick={()=>{

setAuthOpen(true);

setOpen(false);

}}

className="
w-full
rounded-2xl
bg-gradient-to-r
from-purple-700
via-purple-600
to-purple-500
py-3
font-semibold
text-white
"

>

Login

</button>


)}





</div>






</motion.aside>

</>

)}

</AnimatePresence>

);

}