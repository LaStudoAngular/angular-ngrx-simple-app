import { IUser } from 'src/app/interfaces/user';

export interface IUserState {
    users: IUser,
    selectedUser: IUser
}

export const initialUserState: IUserState = {
    users: null,
    selectedUser: null
}