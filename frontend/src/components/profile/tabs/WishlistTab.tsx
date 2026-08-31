import {
Heart
} from "lucide-react";


const products=[
"RNOTSKY Robot Arm",
"AI Vision Camera",
"Developer Kit"
];


export default function WishlistTab(){

return(

<div>

<h2 className="text-2xl font-semibold">
Wishlist
</h2>


<p className="mt-2 text-white/50">
Saved products
</p>


<div className="mt-6 grid gap-4 sm:grid-cols-2">

{
products.map(product=>(

<div
key={product}
className="
rounded-2xl
border
border-purple-500/20
bg-black/20
p-5
"
>


<Heart
className="text-purple-400"
/>


<h3 className="mt-4 font-medium">
{product}
</h3>


<button
className="
mt-4
text-sm
text-purple-300
"
>
Move to Cart
</button>


</div>

))
}


</div>


</div>

)

}