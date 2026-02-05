import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 font-sans font-medium text-sm tracking-wide uppercase";
  
  const variants = {
    primary: "bg-dusty-blue text-white hover:bg-opacity-90 active:scale-95",
    ghost: "bg-transparent text-deep-charcoal hover:text-dusty-blue hover:bg-gray-50",
    outline: "border border-dusty-blue text-dusty-blue hover:bg-dusty-blue hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};