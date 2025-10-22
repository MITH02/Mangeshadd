import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, "dist/spa")));

// For all other routes, serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/spa/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
