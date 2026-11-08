// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

// 纯净化独立站点 URL 体系，默认绑定自有域名
const siteUrl = process.env.SITE_URL || "https://jichangwang.cc";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: "/",
  trailingSlash: "ignore",
  devToolbar: {
    enabled: false,
  },
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
