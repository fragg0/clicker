"use client";

import GlobalStyles from "../styles/GlobalStyles";
import StyledComponentsRegistry from "./StyledComponentsRegistry";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {children}
    </StyledComponentsRegistry>
  );
}
