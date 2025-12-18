import { FC } from "react";

export const LogoIcon: React.FC<{ className?: string }> = ({
  className = "w-10 h-10",
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* O Arco Fino */}
      <path
        d="M20 80 C 10 50, 40 10, 90 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="opacity-80"
      />

      {/* A Pena Estilizada */}
      <path
        d="M35 90 C 40 80, 45 60, 80 35 C 80 35, 60 45, 50 55 C 45 60, 40 75, 35 90 Z"
        fill="currentColor"
        className="opacity-90"
      />
      {/* Detalhe central da pena (raque) */}
      <path
        d="M35 90 C 45 70, 60 50, 80 35"
        stroke="white"
        strokeWidth="0.5"
        className="opacity-40"
      />
    </svg>
  );
};
