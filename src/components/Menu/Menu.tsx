"use client";

import MenuUI from "./MenuUI";
import { useMenuContext } from "../Providers";
import { useEffect } from "react";

export default function Menu() {
  const [menuContenxt] = useMenuContext();

  useEffect(() => {
    document.body.style.overflowY = menuContenxt.isOpen ? "hidden" : "auto";
  }, [menuContenxt.isOpen]);

  return menuContenxt.isOpen ? <MenuUI /> : null;
}
