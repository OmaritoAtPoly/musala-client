import { get, remove } from 'local-storage';

export const loggedIn: () => string | undefined = () => get('userToken');

export const signOut: () => void = () => remove('userToken');
