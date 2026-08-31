import React from "react";


interface LegalPageProps {

title:string;

updated:string;

children:React.ReactNode;

}



export default function LegalPage({
title,
updated,
children

}:LegalPageProps){


return (

<main
className="
min-h-screen
bg-black
text-white
px-5
py-24
"
>


<div
className="
max-w-5xl
mx-auto
"
>


<div
className="
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
md:p-14
shadow-xl
"
>


<h1
className="
text-4xl
md:text-6xl
font-bold
mb-4
bg-gradient-to-r
from-purple-600
via-purple-400
to-purple-200
bg-clip-text
text-transparent
"
>

{title}

</h1>


<p
className="
text-gray-400
mb-12
"
>

Last Updated: {updated}

</p>



<article
className="
space-y-10
text-gray-300
leading-8
"

>


{children}


</article>



</div>


</div>


</main>


)

}