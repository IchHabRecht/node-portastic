// Type definitions for portastic
// Project: portastic
// Definitions by: James Booth github.com/jabooth

export function test(port: number, iface?: string, callback?: Function): Promise<boolean>

export function find(
    options: {min?: number, max?: number, retrieve?: number},
    iface?: string,
    callback?: Function
): Promise<number[]>

export function filter(ports: number[], iface?: string, callback?: Function): Promise<number[]>

import { EventEmitter } from 'events'
export class Monitor extends EventEmitter {
    constructor(ports: number[])
    on(event: "open" | "close", listener: (port: number) => void): this
}
