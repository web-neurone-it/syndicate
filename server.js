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

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);
  if (process.env.NODE_ENV === "production") {
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
      const indexPath =
        process.env.NODE_ENV === "production"
          ? "dist/client/index.html"
          : "index.html";
      let template = fs.readFileSync(path.resolve(dirname, indexPath), "utf-8");

      template = await vite.transformIndexHtml(url, template);

      let render;

      if (process.env.NODE_ENV === "production") {
        render = (await vite.ssrLoadModule("./dist/server/entry-server.js"))
          .render;
      } else {
        render = (await vite.ssrLoadModule("src/entry-server.tsx")).render;
      }
      console.log(render);
      const { html: appHtml, state } = await render();

      let html = template.replace("<!--ssr-->", appHtml);
      const serializedState = serializeJavascript(state);
      html = html.replace(
        "<!--preloadedState-->",
        `window.__PRELOADED_STATE__ = ${serializedState}`
      );

      res.status(200).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

createServer();
