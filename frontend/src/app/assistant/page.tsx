"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";


export default function AssistantPage() {


  const [message, setMessage] = useState("");

  const chatRef = useRef<HTMLDivElement>(null);


  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello, I am Rnotsky AI Core. How can I assist you today?"
    }
  ]);



  useEffect(() => {

    if(chatRef.current){

      chatRef.current.scrollTop =
      chatRef.current.scrollHeight;

    }

  },[messages]);




  function sendMessage(){

    if(!message.trim()) return;


    setMessages((prev)=>[

      ...prev,

      {
        role:"user",
        text:message
      },

      {
        role:"ai",
        text:"Processing your request through Rnotsky intelligence systems..."
      }

    ]);


    setMessage("");

  }





  return (

<main
className="
relative
min-h-screen
overflow-hidden
bg-[#050507]
text-white
"
>


{/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />




<div
className="
relative
mx-auto
flex
min-h-screen
w-full
max-w-7xl
flex-col
px-4
pb-10
pt-24

sm:px-6

lg:px-10
"
>




{/* HEADER */}


<section
className="
mx-auto
max-w-4xl
text-center
"
>


<p
className="
text-xs
font-semibold
uppercase
tracking-[0.35em]
text-purple-400

sm:text-sm
"
>
RNOTSKY AI CORE
</p>




<h1
className="
mt-6
text-4xl
font-bold
leading-tight

sm:text-5xl

lg:text-7xl
"
>

Your Intelligent

<br />


<span
className="
bg-gradient-to-r
from-purple-400
via-violet-500
to-fuchsia-500
bg-clip-text
text-transparent
"
>
AI Companion
</span>


</h1>





<p
className="
mx-auto
mt-6
max-w-2xl
text-sm
leading-7
text-gray-400

sm:text-base

lg:text-lg
"
>

Interact with Rnotsky AI Core.
Explore technology, projects,
research and intelligent systems.

</p>



</section>






{/* CHAT BOX */}


<section
className="
mx-auto
mt-12
flex
w-full
max-w-5xl
flex-col

overflow-hidden

rounded-3xl

border
border-white/10

bg-white/[0.03]

backdrop-blur-xl

shadow-[0_0_80px_rgba(168,85,247,0.15)]

sm:mt-16
"
>





{/* HEADER BAR */}


<div
className="
flex
flex-col
gap-2

border-b
border-white/10

px-5
py-5


sm:flex-row
sm:items-center
sm:justify-between

sm:px-8
"
>


<div>

<h2
className="
font-semibold
"
>
Rnotsky AI Core
</h2>


<p
className="
text-xs
text-gray-500
"
>
Neural Intelligence System
</p>


</div>




<span
className="
text-sm
text-purple-400
"
>
ONLINE
</span>



</div>
{/* CHAT AREA */}


<div
ref={chatRef}
className="
h-[55vh]
min-h-[380px]
max-h-[650px]

space-y-5

overflow-y-auto

p-4

sm:p-6
"
>


{
messages.map((msg,index)=>(


<div
key={index}
className={`
flex

${
msg.role==="user"
?
"justify-end"
:
"justify-start"
}

`}
>


<div
className={`
max-w-[90%]

rounded-2xl

px-4
py-3

text-sm

leading-6


sm:max-w-md

sm:px-5
sm:py-4


${
msg.role==="user"

?

"bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/20"

:

"border border-white/10 bg-white/[0.04] text-gray-300"

}

`}
>

{msg.text}

</div>


</div>


))

}



</div>








{/* INPUT */}


<div
className="
border-t
border-white/10

p-4

sm:p-6
"
>


<div
className="
flex

items-center

gap-3

rounded-2xl

border

border-white/10

bg-black/40

p-2

focus-within:border-purple-500/50
"
>


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter"){
sendMessage();
}

}}

placeholder="Ask Rnotsky AI..."

className="
flex-1

bg-transparent

px-4

py-3

text-sm

text-white

outline-none

placeholder:text-gray-600

"

/>




<button

onClick={sendMessage}

className="
flex

h-11

w-11

shrink-0

items-center

justify-center

rounded-xl

bg-gradient-to-r

from-purple-600

to-violet-600

transition

hover:scale-105

"

>


<Send
className="
h-5
w-5
"
/>


</button>



</div>



<p
className="
mt-3

text-center

text-xs

text-gray-600
"
>
Powered by Rnotsky Intelligence Systems
</p>



</div>





</section>





</div>


</main>


  );

}