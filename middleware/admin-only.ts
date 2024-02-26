export default defineNuxtRouteMiddleware(() => {
    const { isAdmin, isAuthenticated } = useAuthUser();

    if (!isAuthenticated.value) {
        return navigateTo('/login');
    }
    if (!isAdmin.value) {
        return navigateTo('/');
    }
});