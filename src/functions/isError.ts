import { LanyardError } from '../rest/manager.ts';

export const isError = (something: any): something is LanyardError => {
    return something.message && something.code;
}