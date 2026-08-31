"use client";


import { useAuth } from "@/context/AuthContext";


export default function ProfileSettings(){


const {user}=useAuth();



return (

<div className="space-y-6">


<h2 className="text-2xl font-bold">
Profile Settings
</h2>


<div
className="
rounded-2xl
border
border-white/10
bg-black/30
p-5
"
>


<p className="text-white/50">
Name
</p>


<p className="text-lg">
{user?.full_name || "No name"}
</p>



<p className="mt-4 text-white/50">
Email
</p>


<p>
{user?.email}
</p>


</div>


<button
className="
rounded-xl
bg-purple-600
px-5
py-3
"
>
Edit Profile
</button>


</div>

);

}