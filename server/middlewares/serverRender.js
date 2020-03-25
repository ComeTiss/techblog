import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../../components/App";

import path from "path";
import fs from "fs";

const controller = (req, res, next) => {
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error(err);
      return res.status(404).end();
    }
    const html = ReactDOMServer.renderToString(React.createElement(App));
    const newHtml = htmlData.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );
    return res.send(newHtml);
  });
};

export default controller;
