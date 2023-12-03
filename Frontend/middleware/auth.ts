export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Je suis le middleware auth')
})