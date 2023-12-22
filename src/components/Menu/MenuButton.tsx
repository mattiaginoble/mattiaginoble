"use client";

import { useMenuContext } from "../Providers";

export default function MenuButton() {
  const [{ isOpen }, setMenuContext] = useMenuContext();
  return (
    <button
      type="button"
      onClick={() =>
        setMenuContext((prev) => ({ ...prev, isOpen: !prev.isOpen }))
      }
    >
      {isOpen ? "X" : "Menu"}
    </button>
  );
}
