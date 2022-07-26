<!-- Please remove this file from your project -->
<template>
    <section v-if="CookieAllow" class="animate-fade-in">
        <section class="bottom-0 fixed w-full p-5 lg:px-24   bg-white"
            style="border-top-width: 1px;border-color: rgb(15 23 42/.1);">
            <div class="md:flex items-center -mx-3">
                <div class="md:flex-1 px-3 mb-5 md:mb-0">
                    <p class="text-center md:text-left text-gray text-xs leading-tight md:pr-12">
                        เว็บไซต์ของเราใช้คุกกี้ในการให้บริการและปรับปรุงเนื้อหา
                        เพื่อเข้าใจความต้องการและมอบประสบการณ์ที่ดีสำหรับคุณ
                        สามารถศึกษาข้อมูลเพิ่มเติมเกี่ยวกับคำประกาศ<span
                            class="text-blue-600 hover:underline dark:text-blue-500 "> นโยบายความเป็นส่วนตัว</span></p>
                </div>
                <div class="px-3 text-center">
                    <!--
                    <button id="btn"
                        class="py-2 px-8 bg-red-600 hover:bg-red-600 text-white rounded font-bold text-sm shadow-xl mr-3"
                        @click.prevent="document.getElementById('cookiesModal').showModal()">ไม่ยอมรับ</button>
-->
                    <button id="btn"
                        class="py-2 px-8 bg-green hover:bg-green-500 text-white rounded font-bold text-sm shadow-xl"
                        @click="Allow">ยอมรับ</button>
                </div>
            </div>
        </section>
        <!--
        <dialog open class="h-auto w-11/12 md:w-1/2 bg-white overflow-hidden rounded-md p-0">
            <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto items-center px-5 py-3">
                    <div class="w-10/12 h-auto text-lg font-bold">
                        Cookie settings
                    </div>
                    <div class="flex w-2/12 h-auto justify-end">
                        <button @click.prevent="document.getElementById('cookiesModal').close();"
                            class="cursor-pointer focus:outline-none text-gray-400 hover:text-gray-800">
                            <i class="mdi mdi-close-circle-outline text-2xl"></i>
                        </button>
                    </div>
                </div>
                <div class="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                    <div class="flex-1">
                        <p>Strictly necessary cookies</p>
                    </div>
                    <div class="w-10 text-right">
                        <i class="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                    </div>
                </div>
                <div class="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                    <div class="flex-1">
                        <p>Cookies that remember your settings</p>
                    </div>
                    <div class="w-10 text-right">
                        <i class="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                    </div>
                </div>
                <div class="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                    <div class="flex-1">
                        <p>Cookies that measure website use</p>
                    </div>
                    <div class="w-10 text-right">
                        <i class="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                    </div>
                </div>
                <div class="flex w-full items-center bg-gray-100 border-b border-gray-200 px-5 py-3 text-sm">
                    <div class="flex-1">
                        <p>Cookies that help with our communications and marketing</p>
                    </div>
                    <div class="w-10 text-right">
                        <i class="mdi mdi-check-circle text-2xl text-green-400 leading-none"></i>
                    </div>
                </div>
                <div class="flex w-full px-5 py-3 justify-end">
                    <button @click.prevent="document.getElementById('cookiesModal').close();"
                        class="py-2 px-8 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm shadow-xl">Save
                        settings</button>
                </div>
            </div>
        </dialog>
        -->
    </section>
</template>

<script>
const Cookies = process.client ? require('js-cookie') : undefined
export default {
    name: "Cookies",
    data() {
        return {
            CookieAllow: true
        }
    },

    methods: {
        Allow() {
            this.CookieAllow = false
            Cookies.set('CookieAllow', "YES", { expires: 7 })
        }
    },
    created() {
        if (process.client) {

        }
    },

};</script>
