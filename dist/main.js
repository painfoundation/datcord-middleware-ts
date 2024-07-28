"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fireball_1 = require("./fireball");
const fs_1 = require("fs");
const stream = (0, fs_1.createWriteStream)("randfire.txt");
const l = () => stream.write((0, fireball_1.genFireball)() + "\n");
let i = 0;
setInterval(() => {
    i++;
    if (i >= 50000) {
        stream.close();
        throw 0;
    }
    ;
    l();
});
//# sourceMappingURL=main.js.map