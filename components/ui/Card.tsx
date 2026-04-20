import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  gradient?: boolean;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ hover = true, gradient = false, interactive = false, className = '', children, ...props }, ref) => {
    const baseStyles = 'rounded-xl border border-border backdrop-blur-sm p-6 md:p-8';

    const hoverStyles = hover ? 'card-hover' : '';

    const bgStyles = gradient
      ? 'bg-gradient-to-br from-surface to-surface-light'
      : 'bg-surface/80';

    const interactiveStyles = interactive
      ? 'cursor-pointer transition-all duration-300 hover:border-primary/50'
      : '';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${bgStyles} ${hoverStyles} ${interactiveStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={`mb-4 pb-4 border-b border-border ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', children, ...props }) => (
  <div className={`mt-6 pt-6 border-t border-border flex gap-3 ${className}`} {...props}>
    {children}
  </div>
);
