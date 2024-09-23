let mongoose = require('mongoose');

try {
    let connect = mongoose.connect("mongodb+srv://sharjeelakhtar245:sharjeel3322@cluster0.ssd7alz.mongodb.net/");
    console.log("db connected")
} catch (e) {
    console.log(e)
}