"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let rawData = fs.readFileSync('config.json').toString();
const config = JSON.parse(rawData);
exports.default = config;
//# sourceMappingURL=config.js.map