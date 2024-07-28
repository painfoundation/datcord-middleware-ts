"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genFireball = exports.FireballRegExp = void 0;
const crypto_1 = require("crypto");
exports.FireballRegExp = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})(\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}){3}$/;
const genFireball = () => (0, crypto_1.randomUUID)() + "/" + (0, crypto_1.randomUUID)() + "/" + (0, crypto_1.randomUUID)() + "/" + (0, crypto_1.randomUUID)();
exports.genFireball = genFireball;
//# sourceMappingURL=fireball.js.map