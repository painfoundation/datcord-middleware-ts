import { Fireball } from "../fireball";

type tProtectedTypes = "user" | "guild" | "channel" | "message";
export type tProtected<T extends tProtectedTypes> = {
	[K in T]: Fireball;
};