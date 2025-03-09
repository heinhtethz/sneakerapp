import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // showOnHover: {
        //   "0%": { opacity: "0" },
        //   "100%": { opacity: "1" },
        // },
        // hideOnNotHover: {
        //   "0%": { opacity: "1" },
        //   "100%": { opacity: "0" },
        // },
        // moveTextDown: {
        //   "0%": { opacity: "1" },
        //   "100%": { opacity: "0" },
        // }
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out",
        // "show-on-hover": "showOnHover 1s ease-in-out",
        // "hide-on-nothover": "hideOnNotHover 1s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
