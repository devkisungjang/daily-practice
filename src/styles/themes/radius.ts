export const Radius = {
  none: "0rem",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

export const setRadiusToCSSVariables = () => {
  Object.entries(Radius).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--radius-${key}`, value);
  });
};
