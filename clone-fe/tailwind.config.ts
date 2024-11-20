import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",     // #F1F5F9
        foreground: "hsl(var(--foreground))",     // #334155
        primary: "hsl(var(--primary))",           // #3B82F6
        secondary: "hsl(var(--secondary))",       // #1E293B
        highlight: "hsl(var(--highlight))",       // #22C55E
        border: "hsl(var(--border))",             // #E5E7EB
        error: "hsl(var(--error))",               // #EF4444
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
