const plugin = require("tailwindcss/plugin");

const separatedPlugin = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const themeConfig = theme("separated");
    addUtilities(
      [
        ...Object.entries(themeConfig).map(([key, value]) => {
          return {
            [`.separated-${e(key)}:not(:empty) ~ .separated-${e(key)}:not(:empty)::before`]: {
              ...(typeof value === "string"
                ? {
                    content: `"<span aria-hidden=\"true\">${value}</span>"`,
                  }
                : value),
            },
          };
        }),
      ],
      variants("separated")
    );
  },
  {
    theme: {
      separated: {
        comma: ", ",
      },
    },
    variants: {
      separated: [],
    },
  }
);

module.exports = separatedPlugin;
