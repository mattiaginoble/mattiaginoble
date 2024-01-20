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
          className="fill-black dark:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          height={30}
          viewBox="0 -960 960 960"
          width={30}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      ) : (
        <svg
          className="fill-black dark:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          height={30}
          viewBox="0 -960 960 960"
          width={30}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      )}
    </button>
  );
}
