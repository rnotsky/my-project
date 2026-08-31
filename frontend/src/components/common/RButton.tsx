"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface RButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function RButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
}: RButtonProps) {


  const baseClasses =
    `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-xl
    font-semibold
    transition-all
    duration-300
    cursor-pointer
    active:scale-95
    `;


  const widthClasses = fullWidth
    ? "w-full"
    : "";


  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };



  const variantClasses = {

    primary:
    `
    bg-gradient-to-r
    from-purple-700
    via-violet-600
    to-purple-500

    text-white

    shadow-[0_0_25px_rgba(124,58,237,0.35)]

    hover:shadow-[0_0_45px_rgba(168,85,247,0.65)]

    hover:scale-[1.03]
    `,


    secondary:
    `
    border
    border-white/10

    bg-white/[0.05]

    text-gray-200

    backdrop-blur-xl

    hover:bg-white/[0.1]

    hover:border-purple-400/50

    hover:scale-[1.03]
    `,

  };



  const className = `
    ${baseClasses}
    ${widthClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? "opacity-50 pointer-events-none" : ""}
  `;



  const content = (
    <>

      {/* Shine Animation */}

      <span
        className="
        absolute
        inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        transition-transform
        duration-700

        group-hover:translate-x-full
        "
      />


      <span
        className="
        relative
        z-10
        flex
        items-center
        justify-center
        gap-2
        "
      >
        {children}
      </span>


    </>
  );



  if (href) {

    return (
      <Link
        href={href}
        className={className}
      >
        {content}
      </Link>
    );

  }



  return (

    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >

      {content}

    </button>

  );

}