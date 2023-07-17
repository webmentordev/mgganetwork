export default defineNuxtRouteMiddleware(() => {
    return navigateTo('https://discord.gg/intotheunknown', { external: true })
})