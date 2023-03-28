import { renderToStaticMarkup } from "react-dom/server";
import express from "express";

function MainPage() {
  return (
    <div>
      <h1>Main page</h1>
      <p>This is a test page</p>
    </div>
  );
}

const app = express();
const port = 8090;

app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.send(renderToStaticMarkup(<MainPage />));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
