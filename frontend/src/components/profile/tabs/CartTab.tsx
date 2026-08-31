import {
  ShoppingCart,
  Trash2,
} from "lucide-react";


const items = [
  {
    name: "RNOTSKY AI Pro",
    price: "₹999",
  },
  {
    name: "Vision Camera Module",
    price: "₹499",
  },
];


export default function CartTab() {

return (

<div>

<h2 className="text-2xl font-semibold">
Shopping Cart
</h2>

<p className="mt-2 text-white/50">
Items ready for checkout
</p>


<div className="mt-6 space-y-4">

{
items.map((item)=>(

<div
key={item.name}
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
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-purple-500/10
text-purple-400
"
>

<ShoppingCart size={22}/>

</div>


<div>

<h3 className="font-medium">
{item.name}
</h3>

<p className="text-sm text-white/50">
{item.price}
</p>

</div>


</div>


<button
className="
text-red-400
hover:text-red-300
"
>
<Trash2 size={20}/>
</button>


</div>

))
}


</div>


<button
className="
mt-6
w-full
rounded-2xl
bg-gradient-to-r
from-purple-600
to-purple-400
py-3
font-semibold
text-black
"
>
Checkout
</button>


</div>

)

}