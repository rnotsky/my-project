import {
Download
} from "lucide-react";


const files=[
"RNOTSKY AI Desktop App",
"Robot SDK",
"Vision Model Pack"
];


export default function DownloadsTab(){

return(

<div>


<h2 className="text-2xl font-semibold">
Downloads
</h2>


<p className="mt-2 text-white/50">
Your purchased files
</p>



<div className="mt-6 space-y-4">


{
files.map(file=>(

<div
key={file}
className="
flex
items-center
justify-between
rounded-2xl
border
border-purple-500/20
bg-black/20
p-4
"
>


<div className="flex items-center gap-4">


<div
className="
rounded-xl
bg-purple-500/10
p-3
text-purple-400
"
>

<Download/>

</div>


<p>
{file}
</p>


</div>


<button
className="
rounded-xl
bg-purple-500/20
px-4
py-2
text-sm
text-purple-300
"
>
Download
</button>


</div>


))

}


</div>


</div>

)

}