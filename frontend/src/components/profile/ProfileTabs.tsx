"use client";

import { useState } from "react";

import {
  User,
  ShoppingCart,
  PackageCheck,
  Heart,
  Crown,
  Download,
} from "lucide-react";


import ProfileTab from "./tabs/ProfileTab";
import CartTab from "./tabs/CartTab";
import OrdersTab from "./tabs/OrdersTab";
import WishlistTab from "./tabs/WishlistTab";
import SubscriptionTab from "./tabs/SubscriptionTab";
import DownloadsTab from "./tabs/DownloadsTab";


const tabs = [
  {
    name: "Profile",
    icon: User,
  },
  {
    name: "Cart",
    icon: ShoppingCart,
  },
  {
    name: "Orders",
    icon: PackageCheck,
  },
  {
    name: "Wishlist",
    icon: Heart,
  },
  {
    name: "Subscription",
    icon: Crown,
  },
  {
    name: "Downloads",
    icon: Download,
  },
];


export default function ProfileTabs() {

  const [active, setActive] = useState("Profile");


  return (

    <section>


      {/* Tabs */}

      <div
        className="
        flex
        gap-3
        overflow-x-auto
        rounded-3xl
        border
        border-purple-500/20
        bg-white/5
        p-3
        backdrop-blur-xl
        scrollbar-hide
        "
      >

        {
          tabs.map((tab)=>{

            const Icon = tab.icon;

            const selected = active === tab.name;


            return (

              <button
                key={tab.name}
                onClick={() => setActive(tab.name)}
                className={`
                  group
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-2xl
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    selected
                      ? `
                        border
                        border-purple-400/30
                        bg-purple-500/20
                        text-purple-300
                        shadow-[0_0_25px_rgba(168,85,247,0.25)]
                      `
                      : `
                        text-white/60
                        hover:bg-white/5
                        hover:text-white
                      `
                  }
                `}
              >

                <Icon
                  size={19}
                  strokeWidth={1.8}
                  className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  "
                />

                {tab.name}

              </button>

            );

          })
        }


      </div>




      {/* Content */}

      <div
        className="
        relative
        mt-6
        min-h-[400px]
        overflow-hidden
        rounded-3xl
        border
        border-purple-500/20
        bg-white/5
        p-6
        backdrop-blur-xl
        "
      >





        <div className="relative">


          {active === "Profile" && (
            <ProfileTab />
          )}


          {active === "Cart" && (
            <CartTab />
          )}


          {active === "Orders" && (
            <OrdersTab />
          )}


          {active === "Wishlist" && (
            <WishlistTab />
          )}


          {active === "Subscription" && (
            <SubscriptionTab />
          )}


          {active === "Downloads" && (
            <DownloadsTab />
          )}


        </div>


      </div>


    </section>

  );

}