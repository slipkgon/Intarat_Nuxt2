<!-- Please remove this file from your project -->
<template>
    <div class="body-font font-Thasadith animate-fade-in">

        <div class="flex-auto max-w-4xl">

            <h1 class="p-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                Skill
            </h1>


            <div class="text-center md:text-left m-2">
                <h1 class="p-2 text-base sm:text-xl font-extrabold text-gray-700 dark:text-gray-300 tracking-tight ">
                    Web Skill
                </h1>
                <div class="m-2 inline-flex max-h-96 p-2  rounded-lg border-gray-300 select-none "
                    style="align-items: center" :key="i" v-for="(row, i) in Skilldata">

                    <div class="p-1 break-all block text-xs text-center">
                        <div v-if="row.Load != true"
                            class="p-2 relative rounded-lg m-auto h-14 w-14 bg-gray-400   object-cover object-center animate-pulse">

                        </div>
                        <nuxt-img @load="doSomethingOnLoad(i)" preload format="webp" provider="imgix"
                            :class="row.Load == true ? '' : 'hidden'" class="p-2 rounded-lg m-auto h-14 bg-white"
                            :src="row.IMG" :alt="row.Name" />
                        <div class="break-all block text-xs  text-center text-gray-700 dark:text-gray-300">
                            {{ row.Name }}
                        </div>
                    </div>

                </div>

            </div>

            <div class="text-center md:text-left m-2">
                <h1 class="p-2 text-base sm:text-xl font-extrabold text-gray-700 dark:text-gray-300 tracking-tight ">
                    Other Skill
                </h1>
                <div class="m-2 inline-flex max-h-96 p-2  rounded-lg border-gray-300 select-none"
                    style="align-items: center" :key="i" v-for="(row, i) in OtherSkilldata">

                    <div class="p-1 break-all block text-xs text-center">
                        <div v-if="row.Load != true"
                            class="p-2 rounded-lg m-auto h-14 w-14 bg-gray-400   object-cover object-center animate-pulse">
                        </div>
                        <nuxt-img @load="doSomethingOnLoad2(i)" format="webp" preload provider="imgix"
                            :class="row.Load == true ? '' : 'hidden'" class="p-2 rounded-lg m-auto h-14 bg-white"
                            :src="row.IMG" :alt="row.Name" />
                        <div class="break-all block text-xs  text-center text-gray-700 dark:text-gray-300">
                            {{ row.Name }}
                        </div>
                    </div>

                </div>

            </div>





        </div>

    </div>
</template>

<script>
export default {
    name: 'Skill',
    data() {
        return {
            user: '',
            formImgShow: false,

            Skilldata: [{ Name: 'Html', IMG: '/html.png', Load: '' },
            { Name: 'CSS', IMG: '/CSS.png' },
            { Name: 'JavaScript', IMG: '/JavaScript.png', Load: '' },
            { Name: 'PHP', IMG: '/php.png', Load: '' },
            { Name: 'Jquery', IMG: '/Jquery.png', Load: '' },
            { Name: 'Axios', IMG: '/Axios.png', Load: '' },
            { Name: 'Vue', IMG: '/vue.png', Load: '' },
            { Name: 'Nuxt', IMG: '/nuxt.png', Load: '' },
            { Name: 'Laravel', IMG: '/Laravel.png', Load: '' },
            { Name: 'MongoDB', IMG: '/MongoDB.png', Load: '' },
            { Name: 'MySQL', IMG: '/MySQL.png', Load: '' },
            { Name: 'MariaDB', IMG: '/MariaDB.jpg', Load: '' },
            { Name: 'Node.js', IMG: '/Node.png', Load: '' },
            { Name: 'Express', IMG: '/express.png', Load: '' },
            { Name: 'Socket.IO', IMG: '/Socket.png', Load: '' },
            { Name: 'Bootstrap', IMG: '/Bootstrap.png', Load: '' },
            { Name: 'Tailwind CSS', IMG: '/Tailwind.jpg', Load: '' },
            { Name: 'LINE Developers', IMG: '/1_LN6dNoiK-u8rccMizFl46w.png', Load: '' },
            ],
            OtherSkilldata: [{ Name: 'Microsoft Excel', IMG: '/Excel.png', Load: '' },
            { Name: 'Microsoft Word', IMG: '/Word.png', Load: '' },
            { Name: 'Microsoft PowerPoint', IMG: '/PowerPoint.png', Load: '' },
            { Name: 'Microsoft Outlook', IMG: '/Outlook.png', Load: '' },
            { Name: 'Google Sheets', IMG: '/GoogleSheets.png', Load: '' },
            { Name: 'Google Slide', IMG: '/GoogleSlide.png', Load: '' },
            { Name: 'Google Forms', IMG: '/forms1.png', Load: '' },
            { Name: 'Canva', IMG: '/Canva.png', Load: '' },
            { Name: 'Adobe Photoshop', IMG: '/photoshop.svg', Load: '' },
            { Name: 'Adobe Illustrator', IMG: '/illustrator.svg', Load: '' },
            { Name: 'Adobe Premiere Pro', IMG: '/desktop_premiere.svg', Load: '' },
            { Name: 'Visual Basic.NET', IMG: '/vbnet.jpg', Load: '' },
            ]


        }
    },
    methods: {
        doSomethingOnLoad(i) {
            this.Skilldata[i].Load = true
        }, doSomethingOnLoad2(i) {
            this.OtherSkilldata[i].Load = true

        },
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
