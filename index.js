// server.js
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const loginRoutes = require("./routes/loginRoutes");
const postRoutes = require("./routes/postRouters")

const app = express();
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/post", postRoutes);

// setting up port
const PORT = process.env.PORT || 3000;
app.use((req, res) => res.send("routes not found"));

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});