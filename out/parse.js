"use strict"

var babelParser = require("@babel/parser")

var fs = require("fs")

var path = require("path")

var str = fs.readFileSync(
    path.resolve(__dirname, "..", "library", "Anything.tsx"),
    "utf8"
)
babelParser.parse(str)
