<!-- Please remove this file from your project -->
<template>
  <div class="body-font font-Thasadith animate-fade-in">

    <div class="flex-auto max-w-4xl">

      <h1 class="p-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">สวัสดีครับ
      </h1>
      <h1 class="p-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">ผมชื่อ
        อินทรัตน์ เมฆลอย
      </h1>

      <p class="p-2 mt-4 text-lg text-slate-700 dark:text-slate-400">กำลังสนใจ งาน เกี่ยวกับ โปรแกรมเมอร์ ครับ
      </p>
      <p class="p-2 mt-4 text-lg text-slate-700 dark:text-slate-400"> ตอนนี้กำลังศึกษาอยู่ ชั้น ปวช สาขา
        คอมพิวเตอร์ธุรกิจ
        เป็นรอบพิเศษครับ
        อนาคต คาดว่าจะเรียนจนถึง ปริญญาตรี สาขาเกี่ยวกับ เทคโนโลยีสารสนเทศ ครับ
      </p>


      <a type="button" href="/Intarat Mekloy.pdf" download=""
        class="p-2 mt-4  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">สามารถ
        Download ข้อมูลเพิ่มเติมเกี่ยวกับผมได้ที่นี้ครับ</a>

      <nuxt-img  format="webp" provider="imgix" class="max-w-xs md:max-w-sm rounded dark:bg-white shadow" src="/twa.jpg" width="360"
        height="160" alt=" twa" />
      <a type="button" href="/Intarat App.apk" download=""
        class="p-2 mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">สามารถทดลอง
        TWA ได้ที่นี้ครับ</a>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
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
