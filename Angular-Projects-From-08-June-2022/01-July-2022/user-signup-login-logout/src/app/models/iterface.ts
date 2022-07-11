export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserAfterLogin {
    email: string;
    password: string;
}

export interface IAlert { message: string; isError: boolean; }