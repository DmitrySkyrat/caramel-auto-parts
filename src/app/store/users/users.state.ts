export interface IUser {
    name: string;
    age: number;
    login: string;
    password: string;
    email: string;
    phone: string;
}

export interface UsersState {
    users: ReadonlyArray<IUser>
}

export const initialUsersState: UsersState = {
    users: []
}
