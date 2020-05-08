<template>
    <div>
        <h1 id="text--good" class="desc">Good Trainers Make Programmes,</h1>
        <h1 id="text--exceptional" class="desc">Exceptional Trainers Design Them.</h1>
        <div class="spacer"></div>
        <div id="container--2c">
            <h1>Save more time and get more clients.</h1>
            <img id="laptop" src="../assets/svg/LaptopTablet.svg">
        </div>
        <div class="spacer"></div>
        <div id="container--2c3r">
            <h1 class="text--right" style="grid-area: aT">We've taken exercise programming to the next level.</h1>
            <svg style="grid-area: aI" width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.0008 100L52.0001 54.0263H0L100 0L68.0008 100Z" fill="#282828">
                    <animateMotion dur="3000ms" repeatCount="indefinite"
                    path="M 20 20 L 45 35 L 20 20"/>
                </path>
                <line id="line1" x1="250" y1="0" x2="0" y2="240" stroke="#282828" stroke-width="3"><animateMotion dur="2500ms" repeatCount="indefinite" path="M 20 20 L 45 35 L 20 20"/></line>
                <line id="line2" x1="100" y1="0" x2="0" y2="90" stroke="#282828" stroke-width="3"><animateMotion dur="2000ms" repeatCount="indefinite" path="M 20 20 L 45 35 L 20 20"/></line>
                <line id="line3" x1="170" y1="0" x2="0" y2="160" stroke="#282828" stroke-width="3"><animateMotion dur="3000ms" repeatCount="indefinite" path="M 20 20 L 45 35 L 20 20"/></line>
            </svg>
            <h1 style="grid-area: bT">Speed, simplicity and functionality is our philosophy.</h1>
            <svg style="grid-area: bI" width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="box" d="M 10 10 L 90 10 L 90 90 L 10 90 Z" stroke="#282828" stroke-width="8"/>
            </svg>
            <h1 class="text--right" style="grid-area: cT">Use features that you only need, save your money and expand.</h1>
            <svg style="grid-area: cI" width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="expand" d="M 50 50 L 70 50 L 70 30 L 60 30 L 60 40 L 40 40 L 40 20 L 20 20 L 20 10 L 90 10 L 90 40 L 80 40 L 80 60 L 60 60 L 60 70 L 80 70 L 80 80 L 40 80 L 40 70 L 30 70 L 30 90 L 10 90 L 10 60 L 20 60 L 20 40 L 30 40 L 30 50 L 50 50" stroke="#282828" stroke-width="3" />
            </svg>
        </div>
        <div class="spacer"></div>
    </div>
</template>

<script>
    export default {
        component: {
        },
        data() {
            return {
                title: 'Want to train more clients effectively?'
            }
        }
    }
</script>

<style scoped>
    /*
    [data-aos="test"] {
    opacity: 0;
    transition-property: transform, opacity;
    }
    [data-aos="test"].aos-animate {
        opacity: 1;
    } */
    svg {
        margin: auto;
    }
    #container--2c {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        height: auto;
        width: 100%;
        margin: 5vh 0;
    }
    #container--2c > p {
        text-align: left;
    }
    #container--2c3r {
        display: grid;
        grid-template-areas: 
        "aI aT"
        "bT bI"
        "cI cT";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 10rem 1rem;
        height: auto;
    }
    #container--2c3r > div {
        margin: 5vh 0;
    }
    .desc {
        cursor: default;
    }
    #text--good {
        margin: 2rem 0 0 0;
        border: 2px solid #282828;
    }
    #text--exceptional {
        background-color: #282828;
        border: 2px solid #282828;
        color: #fff;
    }
    .text--right {
        text-align: right;
    }
    .img {
        width: 100%;
    }
    #laptop {
        width: 40vw;
    }
    
    /* SVG Anim */
    #line1 {
        stroke-dasharray: 80;
        animation: dash 1300ms linear infinite;
    }
    #line2 {
        stroke-dasharray: 50;
        animation: dash 2000ms linear infinite;
    }
    #line3 {
        stroke-dasharray: 100;
        animation: dash 1500ms linear infinite;
    }
    #box {
        stroke-dasharray: 100;
        animation: dash 4000ms linear infinite;
    }
    #expand {
        stroke-dasharray: 150;
        animation: dash 5000ms cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate;
    }
    @keyframes dash {
        to {
            stroke-dashoffset: -1000;
        }
    }

    /* Responsiveness */
    @media (max-width: 768px) {
        h1 {
            margin: 0;
        }
        #container--2c {
            grid-template-columns: 1fr;
            grid-gap: 3rem;
        }
        #container--2c3r {
            grid-template-columns: 1fr;
            grid-template-areas: "aT" "aI" "bT" "bI" "cT" "cI";
            grid-template-rows: repeat(3, 0.4fr 1fr);
            grid-gap: 5rem 0;
        }
        #laptop {
            width: 70vw;
            margin: auto;
        }
    }
    @media (max-width: 360px) {
        #container--2c3r {
            grid-gap: 2rem 0;
        }
        svg {
            width: 80%;
        }
    }
</style>