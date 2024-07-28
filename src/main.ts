import { randomUUID } from "crypto";
import { FireballRegExp, genFireball } from "./fireball";
import { createWriteStream } from "fs";

const stream = createWriteStream("randfire.txt");

const l = () => stream.write(genFireball() + "\n");

let i = 0;

setInterval(() => {
	i++;

	if (i >= 50000) {
		stream.close();
		throw 0;
	};

	l();
});