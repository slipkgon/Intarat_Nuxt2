<!-- Please remove this file from your project -->
<template>
    <div class="body-font font-Thasadith animate-fade-in">

        <div class="flex-auto max-w-4xl">

            <h1 class="p-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                เกี่ยวกับผม
            </h1>


            <p class="p-2 mt-4 text-lg text-slate-700 dark:text-slate-400">ผมชอบการเรียนรู้อะไรใหม่ๆ อยู่เสมอ ครับ
                สามารถศึกษาค้นคว้าเกี่ยวกับงานเพิ่มเติมได้ เพื่อให้ผลงานออกมาดีที่สุดครับ
            </p>

            <footer class="block dark:text-gray-600">
                <cite>อะไรที่เราไม่เข้าใจ ถ้าหากเรียนรู้และเข้าใจเราก็จะพัฒนาตนเองขึ้น</cite>
            </footer>






        </div>

    </div>
</template>

<script>
export default {
    name: 'About',
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
