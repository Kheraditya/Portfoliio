import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{mdx,md}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas","Liberation Mono","Courier New","monospace"]
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "100% 50%" } }
      },
      animation: { floaty: "floaty 6s ease-in-out infinite", shimmer: "shimmer 8s ease-in-out infinite" }
    }
  },
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;
