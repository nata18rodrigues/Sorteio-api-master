const express = require("express");
const route = express.Router();
const { sweepstakes } = require("./controllers");

route.get("/sweepstakes", sweepstakes.index);
route.post("/sweepstakes", sweepstakes.create);

module.exports = route;
