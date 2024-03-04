import type {H3Event} from "h3";

export function getUserFromEvent(event: H3Event) {
    const userJsonString = getCookie(event, '_user');

    if (!userJsonString) {
        return { user: null }
    }

    const user = JSON.parse(userJsonString);
}