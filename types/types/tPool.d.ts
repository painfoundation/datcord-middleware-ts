import { Fireball } from "../fireball";
import { tProtected } from "./tProtected";
export type tPool = tProtected<"channel" | "guild" | "message" | "user"> & {
    title: string;
    description: string | undefined;
    fields: {
        title: string;
        votes: Fireball[] | number;
    }[];
};
//# sourceMappingURL=tPool.d.ts.map