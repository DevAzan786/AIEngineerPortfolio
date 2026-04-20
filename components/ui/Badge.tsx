import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full';

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  const variantStyles = {
    default: 'bg-surface-light text-text-secondary',
    primary: 'bg-primary/20 text-primary border border-primary/50',
    success: 'bg-success/20 text-success border border-success/50',
    warning: 'bg-warning/20 text-warning border border-warning/50',
    error: 'bg-error/20 text-error border border-error/50',
    accent: 'bg-accent/20 text-accent-light border border-accent/50',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
