const size = {
  mobile: "414px",
  tablet: "767px",
  laptop: "1023px",
  desktop: "1200px",
  largeDesktop: "1920px",
};

export const device = {
  mobile: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  laptop: `(min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop}) and (max-width: ${size.largeDesktop})`,
  largeDesktop: `(min-width: ${size.largeDesktop})`,
};
