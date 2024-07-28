import { randomUUID, UUID } from "crypto";


export type Fireball = `${UUID}/${UUID}/${UUID}/${UUID}`;
export const FireballRegExp = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})(\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}){3}$/;
export const genFireball = () => randomUUID()+"/"+randomUUID()+"/"+randomUUID()+"/"+randomUUID();
