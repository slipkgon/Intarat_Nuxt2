<!-- Please remove this file from your project -->
<template>
    <div class="body-font font-Thasadith animate-fade-in">

        <div class="flex-auto max-w-4xl">

            <h1 class="p-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                Experience
            </h1>


            <p class="p-2 mt-4 text-lg text-slate-700 dark:text-slate-400">ประสบการณ์ในการออกแบบพัฒนาเว็บไซต์ 4 ปี
            </p>
            <p class="p-2 mt-4 text-lg text-slate-700 dark:text-slate-400">รออัพเดท..
            </p>




        </div>

    </div>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            user: '',
            formImgShow: false

        }
    },
    methods: {

    },
    mounted() {
        if (process.client && window) {
            window.history.scrollRestoration = 'auto';
        }
    },
    created() {
        if (process.client) {



        }
    },
}
</script>
