import {
PackageCheck
} from "lucide-react";


const orders=[
{
id:"#RN1024",
product:"AI Pro License",
status:"Completed"
},
{
id:"#RN1025",
product:"Vision Kit",
status:"Processing"
}
];


export default function OrdersTab(){

return(

<div>

<h2 className="text-2xl font-semibold">
Order History
</h2>


<div className="mt-6 space-y-4">

{
orders.map(order=>(

<div
key={order.id}
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


<div className="flex gap-4 items-center">


<div
className="
rounded-xl
bg-purple-500/10
p-3
text-purple-400
"
>

<PackageCheck/>

</div>


<div>

<p className="font-medium">
{order.product}
</p>

<p className="text-sm text-white/50">
{order.id}
</p>

</div>


</div>


<span
className="
rounded-full
bg-purple-500/10
px-4
py-1
text-sm
text-purple-300
"
>
{order.status}
</span>


</div>

))
}

</div>


</div>

)

}