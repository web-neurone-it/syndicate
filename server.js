import express from "express";
import { createServer as createViteServer } from "vite";

import path, { resolve } from "path";
import fs from "fs";

import { fileURLToPath } from "url";
import serializeJavascript from "serialize-javascript";
const PORT = process.env.PORT || 3000;
const dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const prod = process.env.NODE_ENV === "production";

  let vite;
  if (!prod) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);
  }

  if (prod) {
    app.use((await import("compression")).default());
    app.use(
      (await import("serve-static")).default(resolve("dist/client"), {
        index: false,
      })
    );
  }

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const indexPath = prod ? "dist/client/index.html" : "index.html";
      let template = fs.readFileSync(path.resolve(dirname, indexPath), "utf-8");

      if (!prod) {
        template = await vite.transformIndexHtml(url, template);
      }

      let render;

      if (prod) {
        render = (await import("./dist/server/entry-server.cjs")).render;
      } else {
        render = (await vite.ssrLoadModule("src/entry-server.tsx")).render;
      }
      const { html: appHtml, state } = await render();

      let html = template.replace("<!--ssr-->", appHtml);
      const serializedState = serializeJavascript(state);
      html = html.replace(
        "<!--preloadedState-->",
        `window.__PRELOADED_STATE__ = ${serializedState}`
      );

      res.status(200).end(html);
    } catch (e) {
      if (!prod) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
}

createServer();
