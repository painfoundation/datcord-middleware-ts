import { io, Socket } from "socket.io-client";

export const API_domain = "https://crab-smiling-bonefish.ngrok-free.app/";

export type ListenEvents = {};
export type EmitEvents = {};

export class Client {
	protected static readonly socket: Socket<ListenEvents, EmitEvents> = io(API_domain);

	public profile!: ;

	public login(token: string): Promise<Client> {
		return new Promise<Client>((resolve, reject) => {
		});
	};

};