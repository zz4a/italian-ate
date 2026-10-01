/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Material Design 3 Color Tokens with Italian Ate Culinary Theme
        italian: {
          cream: '#FAF6F0',
          ivory: '#FFFDF9',
          terracotta: '#C85A32',
          'terracotta-dark': '#9E3C1B',
          tomato: '#D32F2F',
          olive: '#4A5D23',
          'olive-light': '#6B8238',
          'olive-dark': '#2E3B13',
          basil: '#3B5323',
          beige: '#EFE6D8',
          gold: '#D4AF37',
          copper: '#E07A5F',
          espresso: '#1C1613',
          burgundy: '#581825',
          charcoal: '#121312',
          'surface-dark': '#1E1B18',
          'surface-variant-dark': '#2B2622',
        },
        // Material 3 System Color Roles
        md3: {
          light: {
            primary: '#C85A32',
            onPrimary: '#FFFFFF',
            primaryContainer: '#FCEBE3',
            onPrimaryContainer: '#3B1204',
            secondary: '#4A5D23',
            onSecondary: '#FFFFFF',
            secondaryContainer: '#E8EFCB',
            onSecondaryContainer: '#131E00',
            tertiary: '#D4AF37',
            surface: '#FFFDF9',
            surfaceContainer: '#F4ECE1',
            surfaceVariant: '#EFE6D8',
            outline: '#CBBFA0',
            error: '#BA1A1A',
          },
          dark: {
            primary: '#E07A5F',
            onPrimary: '#4D1702',
            primaryContainer: '#7A2E12',
            onPrimaryContainer: '#FFDBCF',
            secondary: '#A3C067',
            onSecondary: '#203600',
            secondaryContainer: '#354B0B',
            onSecondaryContainer: '#D1EC93',
            tertiary: '#F3CC5B',
            surface: '#121312',
            surfaceContainer: '#1E1B18',
            surfaceVariant: '#2B2622',
            outline: '#8A8072',
            error: '#FFB4AB',
          }
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
