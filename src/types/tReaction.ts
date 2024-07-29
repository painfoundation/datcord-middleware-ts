import { Fireball } from "../fireball";
import { tProtected } from "./tProtected";

/**
 * # tReaction
 * 
 * ### Not protected, as it is directly in the message object
 */
export type tReaction = {
	amount: number;
	users: Fireball[];
	emoji: Fireball[];
	super: boolean;
};