export const ComponentSizes = ['', 'default', 'small', 'large'] as const;

export type ComponentSize = typeof ComponentSizes[number];

export const ComponentSizeMap = {
  large: 40,
  default: 32,
  small: 24
} as const;
