"use client";


import { useState } from "react";


export default function DeleteAccountPage(){


const [confirm,setConfirm]=useState(false);



return (

<div className="space-y-6">


<h2 className="
text-2xl
font-bold
text-red-400
">
Delete Account
</h2>



<div
className="
rounded-2xl
border
border-red-500/20
bg-red-500/5
p-5
"
>


<p className="text-white/60">
This action cannot be undone.
Your account and data will be permanently removed.
</p>



<label
className="
mt-5
flex
items-center
gap-3
"
>

<input

type="checkbox"

onChange={(e)=>
setConfirm(e.target.checked)
}

/>

I understand


</label>



<button

disabled={!confirm}

className="
mt-5
rounded-xl
bg-red-600
px-5
py-3
disabled:opacity-40
"

>
Delete Account
</button>



</div>



</div>

)

}