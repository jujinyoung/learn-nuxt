import { Notify } from 'quasar';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:error', (err: unknown) => {
        if (err instanceof Error) {
            if (process.client) {
                Notify.create({
                    message: err.message,
                    type: 'warning',
                });
            } else {
                console.log('error: ', err.message);
            }
        }
    });
    nuxtApp.hook('vue:error', (err: unknown) => {
        // console.log('vue:error', err);
        if (err instanceof Error) {
            if (process.client) {
                Notify.create({
                    message: err.message,
                    type: 'negative',
                });
            } else {
                console.log('error: ', err.message);
            }
        }
    });
});