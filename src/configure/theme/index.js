import colors from './colors';

const theme = {
  name: 'search-image-app',
  rounding: 4,
  defaultMode: 'light',
  global: {
    dark: false,
    ...colors,
    font: {
      family: 'Gotham, Roboto, "Helvetica Neue", sans-serif',
      size: '16px',
      height: 1.5,
      maxWidth: '100%',
    },
    breakpoints: {
      xsmall: {
        value: 576,
      },
      small: {
        value: 768,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4px',
          large: '6px',
          xlarge: '12px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '4px',
          small: '8px',
          medium: '16px',
          large: '24px',
          xlarge: '32px',
          xxlarge: '48px',
        },
        size: {
          xxsmall: '24px',
          xsmall: '80px',
          small: '96px',
          medium: '192px',
          large: '384px',
          xlarge: '768px',
          full: '100%',
        },
      },
      medium: {
        value: 992,
      },
      large: {
        value: 1200,
      },
      xlarge: {
        value: undefined,
      },
    },
    edgeSize: {
      none: '0px',
      hair: '2px',
      xxsmall: '4px',
      xsmall: '8px',
      small: '16px',
      medium: '24px',
      large: '32px',
      xlarge: '48px',
      xxlarge: '96px',
      responsiveBreakpoint: 'small',
    },
    spacing: '24px',
    size: {
      xxsmall: '48px',
      xsmall: '88px',
      small: '192px',
      medium: '384px',
      large: '768px',
      xlarge: '1152px',
      xxlarge: '1536px',
      full: '100%',
      responsiveBreakpoint: 'small',
    },
    elevation: {
      light: {
        none: 'none',
        xsmall: '0px 1px 2px rgba(197, 197, 197, 0.5)',
        small: '0px 2px 4px rgba(197, 197, 197, 0.5)',
        medium: '0px 4px 8px rgba(197, 197, 197, 0.5)',
        large: '0px 8px 16px rgba(197, 197, 197, 0.5)',
        xlarge: '0px 12px 24px rgba(197, 197, 197, 0.5)',
      },
      dark: {
        none: 'none',
        xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
        small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
        medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
        large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
        xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
      },
    },
  },
  list: {
    item: {
      pad: { horizontal: 'large', vertical: 'xsmall' },
      border: false,
    },
  },
};

export const breakpoints = ['576px', '768px', '992px', '1200px'];

export const mq = breakpoints.map(bp => `@media (min-width: ${bp})`);

export default theme;
