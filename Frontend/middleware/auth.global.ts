import { useCookie, navigateTo } from 'nuxt/app';
import { RouteHelper } from "~/helpers/route-helper";

export default defineNuxtRouteMiddleware((to, _from) => {
    const token = useCookie('token');

    console.log('Token value:', token.value); // Pour débogage

    // Rediriger vers la page de connexion si aucun token et tentative d'accès à une route protégée
    if (!token.value && to.path !== RouteHelper.LOGIN) {
        console.log('Redirection vers la page de connexion'); // Pour débogage
        navigateTo(RouteHelper.LOGIN);
    }
});
