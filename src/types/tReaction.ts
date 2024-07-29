import { Fireball } from "../fireball";
import { tProtected } from "./tProtected";

export type tReaction = tProtected<"channelID" | "guildID" | "messageID"> & {
	amount: number;
	users: Fireball[];
	emoji: Fireball[];
	super: boolean;
};