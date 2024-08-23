import React, { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface LenisWrapperProps {
  children: ReactNode;
}

const LenisWrapper: React.FC<LenisWrapperProps> = ({ children }) => {
  return (
    <>
      <ReactLenis root>{children}</ReactLenis>
    </>
  );
};

export default LenisWrapper;
