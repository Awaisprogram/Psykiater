import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'underline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface UnderlinedButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
}

const UnderlinedButton: React.FC<UnderlinedButtonProps> = ({ 
  children, 
  variant = 'primary', 
  bgColor, 
  textColor, 
  borderColor,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
  size = 'md'
}) => {
  // Predefined variant styles
  const variants = {
    primary: 'bg-teal-700 hover:bg-teal-800 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-50 text-teal-700 border-2 border-teal-700',
    outline: 'bg-transparent hover:bg-teal-50 text-teal-700 border-2 border-teal-700',
    underline: 'bg-transparent hover:bg-teal-50 text-teal-700 border-b-2 border-teal-700',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
  };

  // Size variants
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  // Custom style override if bgColor or textColor is provided
  const customStyle = {
    ...(bgColor && { backgroundColor: bgColor }),
    ...(textColor && { color: textColor }),
    ...(borderColor && { borderColor: borderColor }),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={customStyle}
      className={`
        ${!bgColor && !textColor ? variants[variant] : ''}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        font-medium rounded-lg
        transition-all duration-200
        transform hover:-translate-y-1
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${borderColor ? 'border-b-2' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default UnderlinedButton;