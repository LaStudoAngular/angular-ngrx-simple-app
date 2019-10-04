import { IConfig } from 'src/app/interfaces/config';

export interface IConfigState {
    config: IConfig
}

export const initialConfigState: IConfigState = {
    config: null
}