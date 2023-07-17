<template>
    <section class="w-full bg-center bg-cover min-h-screen relative flex items-center justify-center" style="background-image: url('https://cdn.discordapp.com/attachments/1130104696066015342/1130479487625216120/cut512x277.gif');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10 px-4">
            <img src="/logo2.png" class="m-auto mb-6 max-w-[300px] 480px:max-w-[150px]" alt="Exile Logo">
            <h1 class="text-4xl text-white/90 mb-3 480px:text-4xl text-center">Welcome to<br><span class="text-8xl">The SANCTUARY</span></h1>
            <ul class="m-auto flex items-center justify-center">
                <NuxtLink class="mr-2 py-3 rounded hover:text-white hover:bg-dark transition-all px-6 bg-main link text-dark text-xl inline-block" to="steam://connect/tpa5.gravelhost.com:50555" target="_blank"><Icon name="bi:steam" class="text-2xl mr-1" /> Connect</NuxtLink>
                <NuxtLink class="mr-2 py-3 rounded hover:text-white hover:bg-dark transition-all px-6 bg-main link text-dark text-xl inline-block" to="https://discord.gg/intotheunknown" target="_blank"><Icon name="fa6-brands:discord" class="text-2xl mr-1" /> Discord</NuxtLink>
            </ul>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: "The Sanctuary — Official Website",
        ogTitle: 'The Sanctuary Rust Server',
        description: 'Welcome to The Sanctuary Rust official website. Get all The Sanctuary servers connection information here.',
        ogDescription: 'Welcome to The Sanctuary Rust official website. Get all The Sanctuary servers connection information here.',
        ogImage: 'https://cdn.discordapp.com/attachments/1129278239358062592/1129396420202463252/background_exfil.png',
        twitterCard: 'summary_large_image',
    });
</script>