// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "ConcertOne",
        cssVariable: "--font-ConcertOne",
      },
      {
        provider: fontProviders.google(),
        name: "KosugiMaru",
        cssVariable: "--font-KosugiMaru",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
