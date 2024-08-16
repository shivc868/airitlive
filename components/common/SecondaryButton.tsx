import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; 
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  className = "",
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center leading-none gap-2 rounded-[10px] bg-thunder font-lato font-bold px-3 md:px-8 py-1.5 text-white hover:bg-purple duration-300 ease-in-out ${className}`}
    >
      {icon && <span>{icon}</span>} 
      {children}
    </button>
  );
};

export default SecondaryButton;
