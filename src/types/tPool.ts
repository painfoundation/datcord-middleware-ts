import { Fireball } from "../fireball";
import { tProtected } from "./tProtected";

export type tPoolField = {
	title: string;
	votes: Fireball[] | number;
};

/**
 * ### Not protected, as it is directly in the message object
 */
export type tPool = {
	title: string;
	description: string | undefined;
	fields: tPoolField[];
};