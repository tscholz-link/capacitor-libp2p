import { IConnection } from "./Connection/IConnection";

export interface IConnectionHandler {
    start(): Promise<void>;
    stop(): Promise<void>;


    dial(address: string): Promise<IConnection>;
    hangUp(address: string): Promise<void>;
    getMultiAddresses(): string[];
    getStreamForProtocol(address: string, protocol: string): any;
}