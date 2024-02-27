import { useAuthUser} from "~/composables/auth/useAuthUser";

export const useAuthenticated = () => computed(() => !!useAuthUser().value);