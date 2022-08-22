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
                <div class="m-2 inline-flex max-h-96 p-2  rounded-lg border-gray-300 select-none"
                    style="align-items: center" :key="i" v-for="(row, i) in Skilldata">

                    <div class="p-1 break-all block text-xs text-center">

                        <nuxt-img format="webp" provider="imgix" class="p-2 rounded-lg m-auto h-14 bg-white"
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

                        <nuxt-img format="webp" provider="imgix" class="p-2 rounded-lg m-auto h-14 bg-white"
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

            Skilldata: [{ Name: 'Html', IMG: '/html.png' },
            { Name: 'CSS', IMG: '/CSS.png' },
            { Name: 'JavaScript', IMG: '/JavaScript.png' },
            { Name: 'PHP', IMG: '/php.png' },
            { Name: 'Jquery', IMG: '/Jquery.png' },
            { Name: 'Axios', IMG: '/Axios.png' },
            { Name: 'Vue', IMG: '/vue.png' },
            { Name: 'Nuxt', IMG: '/nuxt.png' },
            { Name: 'Laravel', IMG: '/Laravel.png' },
            { Name: 'MongoDB', IMG: '/MongoDB.png' },
            { Name: 'MySQL', IMG: '/MySQL.png' },
            { Name: 'MariaDB', IMG: '/MariaDB.jpg' },
            { Name: 'Node.js', IMG: '/Node.png' },
            { Name: 'Express', IMG: '/express.png' },
            { Name: 'Socket.IO', IMG: '/Socket.png' },
            { Name: 'Bootstrap', IMG: '/Bootstrap.png' },
            { Name: 'Tailwind CSS', IMG: '/Tailwind.jpg' },
            ],
            OtherSkilldata: [{ Name: 'Microsoft Excel', IMG: '/Excel.png' },
            { Name: 'Microsoft Word', IMG: '/Word.png' },
            { Name: 'Microsoft PowerPoint', IMG: '/PowerPoint.png' },
            { Name: 'Microsoft Outlook', IMG: '/Outlook.png' },
            { Name: 'Google Sheets', IMG: '/GoogleSheets.png' },
            { Name: 'Google Slide', IMG: '/GoogleSlide.png' },
            { Name: 'Google Forms', IMG: '/forms1.png' },
            { Name: 'Canva', IMG: '/Canva.png' },
            { Name: 'Adobe Photoshop', IMG: '/photoshop.svg' },
            { Name: 'Adobe Illustrator', IMG: '/illustrator.svg' },
            { Name: 'Adobe Premiere Pro', IMG: '/desktop_premiere.svg' },

            ]


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
