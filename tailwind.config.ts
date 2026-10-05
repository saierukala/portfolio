import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["class", ".dark"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        line: token("line"),
        fg: token("fg"),
        muted: token("muted"),
        accent: token("accent"),
        accent2: token("accent2"),
        "accent-ink": token("accent-ink"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { card: "16px" },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [plugin(({ addVariant }) => addVariant("light", ".light &"))],
};
export default config;
