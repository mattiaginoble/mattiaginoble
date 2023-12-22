"use client";

import MenuUI from "./MenuUI";
import { useMenuContext } from "../Providers";

export default function Menu() {
  const [menuContenxt] = useMenuContext();

  return menuContenxt.isOpen ? <MenuUI /> : null;
}
