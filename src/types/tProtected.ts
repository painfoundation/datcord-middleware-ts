import { Fireball } from "../fireball";

type tProtectedTypes = "userID" | "guildID" | "channelID" | "messageID";
export type tProtected<T extends tProtectedTypes> = {
	[K in T]: Fireball;
};