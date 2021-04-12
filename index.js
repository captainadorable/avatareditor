const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const helpers = require("handlebars-helpers")();
const path = require("path")

app.engine("handlebars", handlebars({
    defaultLayout: "main",
    layoutsDir: `${__dirname}/views/layouts`,
    helpers: helpers
})); 
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));




app.get("/", (req, res) => {
    res.render("index")
})

app.post("/avatar", (req, res) => {
    res.render("avatar")    
})

app.use("/images", express.static(__dirname + "/images"))



app.listen(3000, () => {
    console.log("Uygulama port 3000'de hazır!");
})

