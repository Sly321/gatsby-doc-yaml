const babelParser = require("@babel/parser")
const fs = require("fs")
const path = require("path")

const str = fs.readFileSync(
    path.resolve(__dirname, "library", "Anything.tsx"),
    "utf8"
)
babelParser.parse(str)
