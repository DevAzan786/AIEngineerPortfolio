export const theme = {
  colors: {
    primary: '#3b82f6',
    primaryDark: '#1e40af',
    primaryLight: '#60a5fa',
    secondary: '#1f2937',
    secondaryLight: '#374151',
    accent: '#8b5cf6',
    accentLight: '#a78bfa',
    background: '#0f172a',
    surface: '#1e293b',
    surfaceLight: '#334155',
    textPrimary: '#f1f5f9',
    textSecondary: '#cbd5e1',
    textTertiary: '#94a3b8',
    border: '#334155',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  transitions: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  glow: `0 0 20px ${theme.colors.primary}`,
};

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
