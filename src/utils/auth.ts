import { get } from "local-storage";

export const loggedIn = () => get("userToken");