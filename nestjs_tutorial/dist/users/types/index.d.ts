export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
}
export declare class SerializedUser {
    id: number;
    username: string;
    email: string;
    password: string;
    constructor(partial: Partial<SerializedUser>);
}
