<template>
    <div>
        <LoadSpinner v-if="showHideSpinner" />

        <Nuxt />
    </div>
</template>
<script>
export default {
    /*
    head() {
        return {
            bodyAttrs: {
                style: this.showHideSpinner ? 'overflow: hidden;' : ''
            }
        }
    },
    */
    beforeCreate() {
        if (process.client) {
            const div = document.querySelector('body');
            div.style.cssText = 'overflow:hidden';
            this.showHideSpinner = true;
        }
    },
    mounted() {
        setTimeout(() => {
            const div = document.querySelector('body');
            div.style.cssText = '';
            this.showHideSpinner = false;
        }, 2000);

    },
    data() {
        return {
            showHideSpinner: true
        };
    }
};
</script>