import Link from "next/link";
import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  href?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  className = "",
  icon,
  href = "/",
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-center w-fit leading-none gap-2 rounded-[10px] bg-thunder font-lato font-bold px-8 py-4 text-white hover:bg-purple duration-300 ease-in-out ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </Link>
  );
};

export default SecondaryButton;
