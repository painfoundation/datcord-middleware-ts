import { Socket } from "socket.io-client";
import { Profile } from "./profile";
export declare const API_domain = "https://crab-smiling-bonefish.ngrok-free.app/";
export type ListenEvents = {};
export type EmitEvents = {};
export declare class Client {
    protected static readonly socket: Socket<ListenEvents, EmitEvents>;
    profile: Profile;
    login(token: string): Promise<Client>;
}
//# sourceMappingURL=client.d.ts.map