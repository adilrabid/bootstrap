const mapConfig = {
  inline: false,
  annotation: true,
  sourcesContent: true
}

export default context => {
  return {
    map: context.file.dirname.includes('examples') ? false : mapConfig,
    plugins: {
      'postcss-prefix-selector' : {
        prefix: 'dx-',
        transform: function (prefix, selector) {
          if (selector.startsWith('.')) {
            return `.${prefix}${selector.slice(1)}`; // Add 'dx-' to classes
          } else if (selector.startsWith('#')) {
            return `#${prefix}${selector.slice(1)}`; // Add 'dx-' to IDs
          }
          return selector; // Leave other selectors unchanged
        }
      },
      autoprefixer: {
        cascade: false
      },
      rtlcss: context.env === 'RTL'
    }
  }
}
