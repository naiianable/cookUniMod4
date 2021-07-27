const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");


app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    //loads html file
    res.sendFile(path.resolve(__dirname, "frontend", "./index.html"));
});

app.listen( PORT, () => console.log(`Server running on port:${PORT}`));

app.use(express.json({ limit: '1mb' }));

app.post('/recipes', (req, res) => {
    console.log('i got a request');
    console.log(req);
});

app.post('/register', (req, res) => {
    console.log('i got a request');
    console.log(req);
});