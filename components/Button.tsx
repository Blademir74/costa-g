import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  withIcon?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  withIcon = false, 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-costa-navy text-white hover:bg-costa-sky hover:text-costa-navy shadow-lg hover:shadow-xl focus:ring-costa-navy",
    secondary: "bg-transparent border-2 border-costa-navy text-costa-navy hover:bg-costa-navy hover:text-white focus:ring-costa-navy",
    accent: "bg-costa-gold text-white hover:bg-costa-navy shadow-lg focus:ring-costa-gold",
    ghost: "bg-transparent text-costa-navy hover:text-costa-sky hover:bg-costa-sky/10"
  };

  const sizes = "py-3 px-8 text-sm md:text-base";
  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes} ${width} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;