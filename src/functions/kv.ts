import { Manager, LanyardError } from '../rest/manager.ts';
import { Snowflake } from '../types/global.ts';
import { Routes } from '../rest/routes.ts';

export const setKv = async(authorization: string, userId: Snowflake, name: string, key: string): Promise<boolean | LanyardError> => {
	const data: any = await Manager.put(`${Routes.getRestApiUrl()}${Routes.getKv(userId, name)}`, authorization, key);

	return data.ok ?? data.error;
}

export const deleteKv = async(authorization: string, userId: Snowflake, name: string): Promise<boolean | LanyardError> => {
	const data: any = await Manager.delete(`${Routes.getRestApiUrl()}${Routes.getKv(userId, name)}`, authorization);

	return data.ok ?? data.error;
}