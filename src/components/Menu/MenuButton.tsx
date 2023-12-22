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
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          width={30}
          height={30}
        >
          <title>close</title>
          <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
        </svg>
      ) : (
        "Menu"
      )}
    </button>
  );
}
