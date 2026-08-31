"use client";

import {
  BadgeCheck,
  CalendarDays,
  Pencil,
  Sparkles,
  ShieldCheck,
  Mail,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";


export default function ProfileHero() {


  const { user, loading } = useAuth();



  const initials =
    user?.full_name
      ?.split(" ")
      .map((name:string)=>name[0])
      .join("")
      .slice(0,2)
      .toUpperCase()
    ||
    "U";





  const shortenName = (
    name:string,
    limit:number = 14
  ) => {

    if(!name)
      return "User";


    return name.length > limit
      ? name.slice(0,limit) + ".."
      : name;

  };






  const joinDate = user?.created_at

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

  "Recently";







  const providerName = () => {


    switch(user?.provider){


      case "google":
        return "Google";


      case "github":
        return "GitHub";


      case "email":
        return "Email";


      default:
        return "Email";


    }


  };







  if(loading){

    return (

      <section
      className="
      rounded-3xl
      border
      border-purple-500/20
      bg-white/5
      p-10
      text-center
      text-white/50
      backdrop-blur-xl
      "
      >

        Loading profile...

      </section>

    );

  }







return (

<section

className="
relative
overflow-hidden
rounded-3xl
border
border-purple-500/20
bg-white/5
backdrop-blur-xl
p-6
sm:p-10
"

>











<div

className="
relative
flex
flex-col
items-center
text-center
"

>






{/* Avatar */}


<div

className="
flex
h-32
w-32
items-center
justify-center
overflow-hidden
rounded-full
border
border-purple-400/40
bg-gradient-to-br
from-purple-600/30
via-purple-900/30
to-black
text-4xl
font-bold
text-purple-200
shadow-[0_0_40px_rgba(168,85,247,0.35)]
"

>


{
user?.avatar

?

<img

src={user.avatar}

alt="Profile"

className="
h-full
w-full
object-cover
"

/>

:

initials

}



</div>









{/* Name */}

<h1

className="
mt-6
max-w-[280px]
truncate
text-3xl
font-bold
sm:text-4xl
"

>

{
shortenName(
user?.full_name || "User"
)
}

</h1>







{/* Email */}


<div

className="
mt-2
flex
max-w-[300px]
items-center
gap-2
text-white/60
"

>


<Mail size={15}/>


<p
className="
truncate
"
>

{
user?.email || "email@example.com"
}

</p>


</div>









{/* Badges */}


<div

className="
mt-5
flex
flex-wrap
justify-center
gap-3
"

>





<div

className="
flex
items-center
gap-2
rounded-full
border
border-purple-500/30
bg-purple-500/10
px-4
py-2
text-sm
text-purple-300
"

>


<BadgeCheck size={16}/>


{
user?.is_verified
?
"Verified User"
:
"Member"
}


</div>









<div

className="
flex
items-center
gap-2
rounded-full
border
border-purple-500/30
bg-purple-500/10
px-4
py-2
text-sm
text-purple-300
"

>


{
user?.is_admin

?

<ShieldCheck size={16}/>

:

<Sparkles size={16}/>

}



{
user?.is_admin

?

"Admin"

:

"AI Explorer"

}


</div>









<div

className="
rounded-full
border
border-purple-500/30
bg-purple-500/10
px-4
py-2
text-sm
text-purple-300
"

>

{providerName()}

</div>





</div>









{/* Joined */}


<div

className="
mt-5
flex
items-center
gap-2
text-sm
text-white/50
"

>


<CalendarDays size={16}/>


Joined {joinDate}


</div>









{/* Status */}


<div

className="
mt-3
rounded-full
border
border-green-500/20
bg-green-500/10
px-4
py-1.5
text-xs
text-green-300
"

>


{
user?.is_active
?
"Active Account"
:
"Inactive Account"
}


</div>









{/* Edit */}


<Link

href="/settings/profile"

className="
mt-6
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
"

>


<Pencil size={18}/>


Edit Profile


</Link>







</div>


</section>


);


}