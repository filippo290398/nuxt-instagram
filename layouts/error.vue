<template>
    <div class="text-center">
        <div class="min-h-screen flex items-center justify-center">
            <div class="flex flex-col">
                <h1 class="text-3xl">Wah ada error</h1>
                <h2 class="text-2xl" v-if="error.statusCode === 404">Halamannya Tidak berhasil Ditemukan</h2>
                <h2 class="text-2xl" v-else>Terjadi kesalahan pada server</h2>
                <nuxt-link to="/" class="btn__error hover:scale-105 hover:shadow-2xl">Kembali ke halaman utama</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['error'],
        layout: "error_layout"
    }
</script>