import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // Optional icon prop
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
      className={`flex items-center justify-center gap-2 rounded-[10px] bg-thunder font-lato font-bold px-8 py-1.5 text-white hover:bg-purple duration-300 ease-in-out ${className}`}
    >
      {icon && <span>{icon}</span>} {/* Render icon only if it exists */}
      {children}
    </button>
  );
};

export default SecondaryButton;
