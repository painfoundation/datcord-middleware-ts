import { Fireball } from "../fireball";
import { tProtected } from "./tProtected";

export type tPoolField = {
	title: string;
	votes: Fireball[] | number;
};

/**
 * # tPool
 * 
 * ### Not protected, as it is directly in the message object
 */
export type tPool = {
	/**
	 * The title the pool
	 */
	title: string;
	/**
	 * The description of the pool
	 */
	description: string;
	/**
	 * Pool fields
	 */
	fields: tPoolField[];
};