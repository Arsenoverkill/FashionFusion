import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProps {
  children: ReactNode;
}

const LayoutPage: FC<LayoutProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const basketProduct = localStorage.getItem("basketProduct");
    if (basketProduct) {
      setCount(JSON.parse(basketProduct).length);
    } else {
      setCount(0);
    }
  }, []);

  return (
    <LayoutContext.Provider value={{ count, setCount }}>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </LayoutContext.Provider>
  );
};

export default LayoutPage;

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};
