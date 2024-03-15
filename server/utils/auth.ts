import type {H3Event} from "h3";

export function getUserFromEvent(event: H3Event) {
    const config = useRuntimeConfig();
    const userJsonString = getCookie(event, config.authCookieName);

    if (!userJsonString) {
        return { user: null }
    }

    const user = JSON.parse(userJsonString);
    return user;
}