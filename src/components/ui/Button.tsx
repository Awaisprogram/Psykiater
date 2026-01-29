"use client";
interface type {
  text: string;
  icon?: string;
}

function Button({ text }: type) {
  return (
    <div>
      <button className="w-full bg-[#1D6361] hover:bg-[#1a5754] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-md inline-block text-center">
        {text}
      </button>
    </div>
  );
}

export default Button;
