export default defineEventHandler((event) => {
    deleteCookie(event, '_user');
    return {
        user: null
    };
})