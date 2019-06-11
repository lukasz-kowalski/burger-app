export const breakpoints = {
  xs: '400',
  sm: '500',
  md: '700',
  lg: '1000',
  xl: '1440',
};

export const minWidth = size => `@media screen and (min-width: ${size}px)`;

export const minHeight = size => ` and (min-height: ${size}px)`;

export const maxHeight = size => ` and (max-height: ${size}px)`;
