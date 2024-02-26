export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuthUser();

    if (isAuthenticated.value) {
        if (process.server) return navigateTo('/');

        return abortNavigation();
    }
});