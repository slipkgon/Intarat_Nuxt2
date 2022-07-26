<template>
    <div class="splash-screen">
        <div class="spinner-wrapper">
            <div class="spinner "></div>
        </div>
    </div>
</template>

<style scoped>
.splash-screen {
    
    top: 0;
    background: #FFFFFF;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 99999999;
}

.spinner-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
}

.spinner {
    width: 250px;
    height: 250px;
    margin: 100px auto;
    background-image: url("/ST.png");
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-size: auto;


    -webkit-animation: sk-scaleout 1.5s infinite ease-in-out;
    animation: sk-scaleout 1.5s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
    0% {
        -webkit-transform: scale(0);
    }

    100% {
        -webkit-transform: scale(1);
        opacity: 0;
    }
}

@keyframes sk-scaleout {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
    }
}
</style>