export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    deleteCookie(event, config.authCookieName);
    return {
        user: null
    };
})