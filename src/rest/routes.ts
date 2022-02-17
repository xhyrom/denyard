import { Snowflake } from '../types/global.ts';

export class Routes {
	public static getRestApiUrl() {
		return 'https://api.lanyard.rest/v1';
	}

	public static getRestWebsocketUrl() {
		return 'wss://api.lanyard.rest/socket';
	}

	public static getUser(userId: Snowflake) {
		return `/users/${userId}`;
	}

	public static getKv(userId: Snowflake, key: string) {
		return `/users/${userId}/kv/${key}`
	}
}