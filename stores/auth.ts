// import { getUser } from '~/composables/auth/usersData';
import type { UserWithoutPassword } from '~/types/user';

export const useAuthStore = defineStore(
    'auth',
    () => {
        const authUser = ref<Maybe<UserWithoutPassword>>();

        const signIn = async (email: string, password: string) => {
            const data = await $fetch<{ user: UserWithoutPassword }>('/auth/login', {
                method: 'POST',
                body: {
                    email,
                    password,
                },
            });
            const { user: foundUser } = data;
            // const foundUser = getUser(email, password);

            if (!foundUser) {
                throw createError({
                    statusCode: 401,
                    statusMessage: 'Invalid email or password',
                });
            }
            setUser(foundUser);
        };

        const signOut = async () => {
            await $fetch('/auth/logout', { method: 'POST' });
            setUser(null);
        };

        const fetchUser = async () => {
            const data = await $fetch<{ user: UserWithoutPassword }>('/auth/user', {
                headers: useRequestHeaders(['cookie']),
            });
            setUser(data.user);
        };

        const setUser = (user: Maybe<UserWithoutPassword>) => {
            authUser.value = user;
        };

        return {
            user: authUser,
            isAuthenticated: computed(() => !!authUser.value),
            isAdmin: computed(() =>
                !authUser.value ? false : authUser.value.roles.includes('ADMIN'),
            ),
            signIn,
            signOut,
            fetchUser,
        };
    },
    {
        persist: true,
        // persist: {
        //   storage: persistedState.localStorage,
        // },
    },
);