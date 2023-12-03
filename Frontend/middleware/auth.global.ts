import { RouteHelper } from "~/helpers/route-helper";

export default defineNuxtRouteMiddleware((to, _from) => {
   const token = localStorage.getItem('token')
    if(!token && to.path !== RouteHelper.LOGIN){
        navigateTo(RouteHelper.LOGIN)
    } else if(token && to.path === RouteHelper.LOGIN) {
        navigateTo(RouteHelper.HOME)
    }
});
