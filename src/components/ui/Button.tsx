"use client";
interface type {
  text: string;
  icon?: JSX.Element | string;
}

function Button({ text, icon }: type) {
  return (
    <button className="bg-[#1D6361] hover:bg-[#1a5754] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2">
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
