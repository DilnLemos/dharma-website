import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, type Plugin } from "vite";

function inlineCss(): Plugin {
  return {
    name: "inline-css",
    enforce: "post",
    generateBundle(_options, bundle) {
      const htmlAsset = bundle["index.html"];
      if (!htmlAsset || htmlAsset.type !== "asset") {
        return;
      }
      const decode = (source: string | Uint8Array): string =>
        typeof source === "string"
          ? source
          : new TextDecoder().decode(source);
      let html = decode(htmlAsset.source);
      for (const [fileName, output] of Object.entries(bundle)) {
        if (!fileName.endsWith(".css") || output.type !== "asset") {
          continue;
        }
        const css = decode(output.source);
        let inlined = false;
        html = html.replace(/<link\s+rel="stylesheet"[^>]*>/g, (tag) => {
          const href = tag.match(/href="([^"]+)"/)?.[1];
          if (href !== `/${fileName}` && !href?.endsWith(`/${fileName}`)) {
            return tag;
          }
          inlined = true;
          return `<style>${css}</style>`;
        });
        if (!inlined) {
          continue;
        }
        const referencedElsewhere = Object.entries(bundle).some(
          ([name, chunk]) =>
            name !== fileName &&
            chunk.type === "chunk" &&
            chunk.code.includes(fileName),
        );
        if (!referencedElsewhere) {
          delete bundle[fileName];
        }
      }
      htmlAsset.source = html;
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
  server: {
    allowedHosts: ["crouch-scoundrel-empathy.ngrok-free.dev"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
