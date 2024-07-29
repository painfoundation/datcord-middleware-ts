import { Fireball, genFireball } from "../fireball";
import { tPool } from "./tPool";
import { tProtected } from "./tProtected";
import { tReaction } from "./tReaction";

/**
 * # tMessage
 */
export type tMessage = tProtected<"channelID" | "guildID" | "userID"> & {
	createdAt: number;
	editedAt: number;

	/**
	 * ### Content
	 * 
	 * The text sent by the user.
	 * 
	 * If left blank will be set to `""`.
	 */
	content: string;
	/**
	 * ### Attachments
	 * 
	 * Self explanatory
	 */
	attachments: Fireball[];
	/**
	 * ### Reactions
	 * 
	 * This field is maintained by the API.
	 */
	reactions: tReaction[];
	/**
	 * ### Replies
	 * 
	 * You can reply to multiple messages at once to give more context for your message.
	 */
	reply: Fireball[];
	/**
	 * ### Stickers
	 * 
	 * You can add multiple stickers to your message.
	 */
	sticker: Fireball[];
	/**
	 * ### Pools
	 * 
	 * You can add multiple pools to your message.
	 */
	pool: tPool[];
	/**
	 * ### Message emote
	 * 
	 * Add emojis to your message that will be rendered as an effect on the message
	 * 
	 * Eg. heart emoji will be rendered as hearts flying out from the message (this may wary based on the client app and theme you use).
	 */
	messageEmote: Fireball[];
};