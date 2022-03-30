export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
}
export declare class SerializedUser {
    id: number;
    username: string;
    email: string;
    password: string;
    constructor(partial: Partial<SerializedUser>);
}
