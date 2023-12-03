import {RouteHelper} from "~/helpers/route-helper";
export default defineNuxtRouteMiddleware(() => {
    const token = useCookie('token');
    if (!token.value) {
        return navigateTo(RouteHelper.SIGNUP)
    }
});
