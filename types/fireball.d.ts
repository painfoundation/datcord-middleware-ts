/// <reference types="node" />
import { UUID } from "crypto";
export type Fireball = `${UUID}/${UUID}/${UUID}/${UUID}`;
export declare const FireballRegExp: RegExp;
export declare const genFireball: () => `${string}-${string}-${string}-${string}-${string}/${string}-${string}-${string}-${string}-${string}/${string}-${string}-${string}-${string}-${string}/${string}-${string}-${string}-${string}-${string}`;
//# sourceMappingURL=fireball.d.ts.map