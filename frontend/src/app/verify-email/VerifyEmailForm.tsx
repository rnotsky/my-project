"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  useRouter,
  useSearchParams
} from "next/navigation";

import {
  X,
  CheckCircle2,
  Mail
} from "lucide-react";

import {
  toast
} from "sonner";



export default function VerifyEmailForm(){


const router = useRouter();

const searchParams =
useSearchParams();



const email =
searchParams.get("email") || "";



const maskedEmail = email
? email.replace(
    /^(.{3}).*(@.*)$/,
    "$1***$2"
  )
:"";




// OTP BOXES

const [otp,setOtp] =
useState([
 "",
 "",
 "",
 "",
 "",
 ""
]);



const inputRefs =
useRef<HTMLInputElement[]>([]);



const [loading,setLoading] =
useState(false);



const [resendLoading,setResendLoading] =
useState(false);



const [timer,setTimer] =
useState(60);



const [success,setSuccess] =
useState(false);



const [changeEmail,setChangeEmail] =
useState(false);



const [newEmail,setNewEmail] =
useState("");



useEffect(()=>{


if(!email){

toast.error(
"Invalid verification session"
);


router.replace("/");

}


},[
email,
router
]);





// TIMER

useEffect(()=>{


if(timer<=0)
return;


const interval =
setInterval(()=>{


setTimer(
prev=>prev-1
);


},1000);



return()=>clearInterval(interval);


},[timer]);





// OTP INPUT

function handleOTPChange(
value:string,
index:number
){


if(!/^\d*$/.test(value))
return;



const updated=[
...otp
];


updated[index]=
value.slice(-1);



setOtp(updated);



if(
value &&
index<5
){

inputRefs.current[index+1]
?.focus();

}


}





function handleKeyDown(
e:React.KeyboardEvent<HTMLInputElement>,
index:number
){


if(
e.key==="Backspace" &&
!otp[index] &&
index>0
){

inputRefs.current[index-1]
?.focus();


}


}





function handlePaste(
e:React.ClipboardEvent<HTMLInputElement>
){


const pasted =
e.clipboardData
.getData("text")
.replace(/\D/g,"")
.slice(0,6);



if(
pasted.length===6
){


setOtp(
pasted.split("")
);



setTimeout(()=>{

inputRefs.current[5]
?.focus();


},100);


}



}
// RESEND OTP

async function resendOTP(){


if(
timer > 0 ||
resendLoading
){

return;

}



try{


setResendLoading(true);



const response =
await fetch(

`${process.env.NEXT_PUBLIC_API_URL}/auth/resend-otp`,

{

method:"POST",

headers:{
"Content-Type":"application/json",
},


body:JSON.stringify({

email,

}),


}

);



const data =
await response.json();



if(!response.ok){


throw new Error(
data.detail ||
"Failed to resend OTP"
);


}



toast.success(
"New verification code sent"
);



setOtp([
"",
"",
"",
"",
"",
""
]);


setTimer(60);



inputRefs.current[0]
?.focus();



}


catch(error:any){


toast.error(
error.message
);


}


finally{


setResendLoading(false);


}



}






// VERIFY EMAIL


async function verifyEmail(){



const code =
otp.join("");



if(
code.length !== 6
){


toast.error(
"Enter 6 digit verification code"
);


return;


}




try{


setLoading(true);



const response =
await fetch(


`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email`,


{


method:"POST",


headers:{


"Content-Type":"application/json",


},


body:JSON.stringify({

email,

code,


}),


}


);




const data =
await response.json();




if(!response.ok){


throw new Error(

data.detail ||
"Verification failed"

);


}





setSuccess(true);



toast.success(
"Account created successfully 🎉"
);



setTimeout(()=>{


router.push("/login");


},1500);




}



catch(error:any){


toast.error(
error.message
);



}



finally{


setLoading(false);


}



}






// CHANGE EMAIL


function submitChangeEmail(){



if(!newEmail){


toast.error(
"Enter new email"
);


return;


}




router.push(

`/verify-email?email=${encodeURIComponent(newEmail)}`

);



}
return (

<main
className="
min-h-screen
bg-black
flex
items-center
justify-center
px-5
text-white
relative
overflow-hidden
"
>


{/* Background Glow */}

<div
className="
absolute
h-[500px]
w-[500px]
rounded-full
bg-purple-600/10
blur-[160px]
"
/>





<div
className="
relative
w-full
max-w-md
rounded-3xl
border
border-white/10
bg-[#0b0b0b]
p-8
shadow-[0_0_60px_rgba(168,85,247,0.18)]
backdrop-blur-xl
"
>



{/* CLOSE BUTTON */}

<button

aria-label="Go back"

onClick={()=>
router.back()
}

className="
absolute
right-5
top-5
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-white/10
bg-white/5
text-gray-400
transition
hover:border-purple-500/50
hover:bg-purple-500/10
hover:text-white
"

>

<X size={20}/>

</button>





{
success ? (



<div
className="
flex
flex-col
items-center
justify-center
py-10
"
>


<div
className="
h-20
w-20
rounded-full
bg-purple-500/20
flex
items-center
justify-center
animate-pulse
"
>


<CheckCircle2
size={45}
className="text-purple-400"
/>


</div>



<h2
className="
mt-6
text-2xl
font-bold
"
>

Verified Successfully 🎉

</h2>



<p
className="
mt-2
text-gray-400
text-center
"
>

Your RNOTSKY account is ready.

</p>



</div>



) : (



<>


<p
className="
text-sm
uppercase
tracking-[0.3em]
text-purple-400
"
>

RNOTSKY SECURITY

</p>





<h1
className="
mt-4
text-3xl
font-bold
"
>

Verify Email

</h1>





<p
className="
mt-3
leading-7
text-gray-400
"
>

Enter the 6 digit verification code sent to your email.

</p>





{/* EMAIL DISPLAY */}


<div
className="
mt-8
flex
items-center
gap-3
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-gray-400
"
>

<Mail size={18}/>


<span>

{maskedEmail}

</span>


</div>






{/* CHANGE EMAIL */}

<button

onClick={()=>setChangeEmail(true)}

className="
mt-3
text-sm
text-purple-400
hover:text-purple-300
"

>

Change email

</button>





{
changeEmail && (


<div
className="
mt-4
space-y-3
"
>


<input

value={newEmail}

onChange={(e)=>
setNewEmail(
e.target.value
)
}

placeholder="New email address"

className="
w-full
rounded-xl
border
border-white/10
bg-black
px-4
py-3
outline-none
focus:border-purple-500
"

/>



<button

onClick={submitChangeEmail}

className="
w-full
rounded-xl
bg-white/10
py-3
font-semibold
hover:bg-white/20
"

>

Continue

</button>


</div>


)

}





{/* OTP BOXES */}


<div
className="
mt-6
flex
justify-between
gap-2
"
>


{

otp.map((digit,index)=>(


<input


key={index}


ref={(el)=>{


if(el)

inputRefs.current[index]=el;


}}


autoFocus={
index===0
}


value={digit}


onChange={(e)=>

handleOTPChange(

e.target.value,

index

)

}


onKeyDown={(e)=>

handleKeyDown(

e,

index

)

}


onPaste={handlePaste}



maxLength={1}


inputMode="numeric"


className="
h-14
w-12
rounded-xl
border
border-white/10
bg-black
text-center
text-2xl
font-bold
outline-none
focus:border-purple-500
focus:ring-2
focus:ring-purple-500/30
"

/>


))

}


</div>





{/* RESEND OTP */}


<div
className="
mt-6
text-center
text-sm
text-gray-400
"
>

Didn't receive the code?


<button

onClick={resendOTP}


disabled={
timer > 0 ||
resendLoading
}


className="
ml-2
font-semibold
text-purple-400
transition
hover:text-purple-300
disabled:text-gray-600
"

>


{

resendLoading

?

"Sending..."

:

timer > 0

?

`Resend in ${timer}s`

:

"Resend OTP"

}


</button>


</div>






{/* VERIFY BUTTON */}


<button

onClick={verifyEmail}


disabled={
loading ||
otp.join("").length !== 6
}


className="
mt-6
w-full
rounded-xl
bg-gradient-to-r
from-purple-500
via-violet-500
to-fuchsia-500
py-3
font-semibold
transition
hover:scale-[1.02]
disabled:opacity-50
"

>


{

loading

?

"Verifying..."

:

"Verify Account"

}


</button>




</>


)

}



</div>


</main>


);


}