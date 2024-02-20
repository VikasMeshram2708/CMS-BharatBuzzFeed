import app from "./app";

const port = process.env.PORT || 5001;
app.listen(() => {
  console.log(`Listening at http://localhost:${port}`);
});
