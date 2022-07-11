export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    data: {
        name: string;
        role: string;
        token: string;
        tokenExpiry: number;
        userId: string;
    },
    error: null
}

export interface IPokemon {
    id: number;
    name: string;
    level: number;
    type: number;
    createdOn?: string;
    updatedOn?: string;
    isSelected?: false;
    action?: string;
}

export interface IPokeType {
    id: number;
    name: string;
}