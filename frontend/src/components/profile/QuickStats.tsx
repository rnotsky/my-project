import {
  ShoppingCart,
  PackageCheck,
  Crown,
  Heart,
} from "lucide-react";


const stats = [
  {
    icon: ShoppingCart,
    title: "Cart",
    value: "3",
    label: "Items",
  },
  {
    icon: PackageCheck,
    title: "Orders",
    value: "12",
    label: "Completed",
  },
  {
    icon: Heart,
    title: "Wishlist",
    value: "5",
    label: "Saved",
  },
  {
    icon: Crown,
    title: "Plan",
    value: "PRO",
    label: "Active",
  },
];


export default function QuickStats() {

  return (

    <section
      className="
      grid
      grid-cols-2
      gap-4
      lg:grid-cols-4
      "
    >

      {
        stats.map((item)=>{

          const Icon = item.icon;


          return (

            <div
              key={item.title}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-purple-500/20
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-purple-400/40
              "
            >






              <div className="relative">


                {/* Icon */}

                <div
                  className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-purple-500/30
                  bg-purple-500/10
                  text-purple-400
                  "
                >

                  <Icon
                    size={22}
                    strokeWidth={1.8}
                  />

                </div>



                {/* Number */}

                <div
                  className="
                  mt-5
                  text-3xl
                  font-bold
                  text-white
                  "
                >
                  {item.value}
                </div>



                {/* Title */}

                <p
                  className="
                  mt-1
                  text-sm
                  text-white/60
                  "
                >
                  {item.title}
                </p>



                {/* Label */}

                <p
                  className="
                  mt-1
                  text-xs
                  text-purple-300
                  "
                >
                  {item.label}
                </p>


              </div>


            </div>

          );

        })
      }


    </section>

  );
}