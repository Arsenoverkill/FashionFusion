"use client";
import { FC, ReactNode } from "react";
import ReduxProvider from "@/provider/ReduxProvider";
import LayoutPage from "@/appPage/site/layout/LayoutPage";

interface LayoutProviderType {
  children: ReactNode;
}

const LayoutProvider: FC<LayoutProviderType> = ({ children }) => {
  return (
    <ReduxProvider>
      <LayoutPage>{children}</LayoutPage>
    </ReduxProvider>
  );
};

export default LayoutProvider;
