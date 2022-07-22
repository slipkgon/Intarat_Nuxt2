<template>

    <Tutorial2 />

</template>

<script>
export default {
    layout: "default",
    head() {
        return {
            title: "Intarat | Home2",
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: "Intarat Home2",
                    name: "Intarat Home2",
                    content: "Intarat Home2",
                },
            ],
        };
    },
    data() {
        return {

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
};
</script>
