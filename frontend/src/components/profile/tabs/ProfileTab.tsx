"use client";

import {
  User,
  Mail,
  ShieldCheck,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";


export default function ProfileTab() {


  const { user } = useAuth();



  const joinDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString(
        "en-US",
        {
          month: "long",
          year: "numeric",
        }
      )
    : "Recently";



  const data = [

    {
      label:"Full Name",
      value:user?.full_name || "User",
      icon:User,
    },


    {
      label:"Email",
      value:user?.email || "No email",
      icon:Mail,
    },


    {
      label:"Role",
      value:user?.is_admin
        ? "Administrator"
        : "User",
      icon:ShieldCheck,
    },


    {
      label:"Account Status",
      value:user?.is_verified
        ? "Verified"
        : "Not Verified",
      icon:BadgeCheck,
    },


    {
      label:"Joined",
      value:joinDate,
      icon:CalendarDays,
    },


  ];




return (

<div>


<h2
className="
text-2xl
font-semibold
text-white
"
>
Account Information
</h2>


<p
className="
mt-2
text-white/50
"
>
Your account details from RNOTSKY server
</p>




<div
className="
mt-6
space-y-4
"
>


{
data.map((item)=>{


const Icon=item.icon;


return (

<div

key={item.label}

className="
flex
items-center
gap-4
rounded-2xl
border
border-purple-500/10
bg-black/20
p-4
"

>


<div

className="
rounded-xl
bg-purple-500/10
p-3
text-purple-400
"

>

<Icon size={20}/>

</div>




<div>


<p
className="
text-sm
text-white/50
"
>

{item.label}

</p>



<p
className="
text-white
font-medium
"
>

{item.value}

</p>



</div>



</div>

);


})

}


</div>



</div>

);


}