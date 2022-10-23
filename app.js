require("dotenv").config();
const express = require("express");
const app = express();
const baseRoutes = require("./routes/base-routes");
const port = process.env.NODE_PORT;


app.use("/halwa", baseRoutes);
// app.use("/user", userRoutes);

app.listen(port ? port : 3000, () => {
    console.log("app running on "+port);
})

