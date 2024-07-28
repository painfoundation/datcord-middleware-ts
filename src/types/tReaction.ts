import { Fireball } from "../fireball";
import { tProtected } from "./tProtected";

export type tReaction = tProtected<"channel" | "guild" | "message"> & {
	amount: number;
	users: Fireball[];
	emoji: Fireball[];
};