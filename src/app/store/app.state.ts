import { ConfigState } from "./config/config.state";
import { UsersState } from "./users/users.state";

export interface AppState {
    config: ConfigState;
    users: UsersState;
    data: any;
}
