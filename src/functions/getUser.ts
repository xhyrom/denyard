import { Snowflake, UserFlags, Activity, Spotify } from '../types/global.ts';
import { Manager, LanyardError } from '../rest/manager.ts';
import { Routes } from '../rest/routes.ts';

export interface User {
    spotify: Spotify | null,
    listening_to_spotify: boolean,
    kv: Object,
    discord_user: {
        username: string,
        public_flags: UserFlags,
        id: Snowflake,
        discriminator: string,
        avatar: string | null,
    },
    discord_status: 'online' | 'idle' | 'dnd' | 'offline',
    activities: Array<Activity>,
    active_on_discord_web: boolean,
    active_on_discord_mobile: boolean,
    active_on_discord_desktop: boolean,
}

export const getUser = async(id: Snowflake): Promise<User | LanyardError> => {
    const data: any = await Manager.get(`${Routes.getRestApiUrl()}${Routes.getUser(id)}`);

    return data.data ?? data.error;
}