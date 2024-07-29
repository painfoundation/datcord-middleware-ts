import { Fireball } from "../fireball";
import { tPool } from "./tPool";
import { tProtected } from "./tProtected";
import { tReaction } from "./tReaction";
export type tMessage = tProtected<"channel" | "guild" | "user"> & {
    content: string;
    attachments: Fireball[];
    reactions: tReaction[];
    reply: Fireball[] | undefined;
    sticker: Fireball[] | undefined;
    pool: tPool[];
    /**
     * Message super reaction on he message,
     * like big emojis on fb or smth idk
     */
    rindfleischethikitierungsbeauftragungsüberwachungsübertragungsgesetz: Fireball;
    /**
     * Sekret
     */
    megszentségteleníthetetlenségeskiedésiedért: boolean;
};
//# sourceMappingURL=tMessage.d.ts.map