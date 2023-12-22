"use client";

import {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type MenuContextType = { isOpen: boolean };
const MenuContext = createContext<
  [MenuContextType, Dispatch<SetStateAction<MenuContextType>>] | null
>(null);
export const useMenuContext = () => {
  const menuContext = useContext(MenuContext);
  if (!menuContext) {
    throw new Error(
      "useMenuContext has to be used within <MenuContext.Provider>"
    );
  }
  return menuContext;
};

export default function Providers({ children }: { children: ReactNode }) {
  const [menuContext, setMenuContext] = useState<MenuContextType>({
    isOpen: false,
  });

  return (
    <MenuContext.Provider value={[menuContext, setMenuContext]}>
      {children}
    </MenuContext.Provider>
  );
}
