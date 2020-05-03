<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut unde quidem ipsum error, dolor magnam, eos, dolorem sed veritatis incidunt eaque natus? Officia, quos aliquam consectetur natus reiciendis ea.</p><br>
        <div id="roadmap">
            <svg style="grid-area: p" width="95" height="630" viewBox="0 0 95 630" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <rect x="40" y="20" width="15" height="550" fill="white" fill-opacity="0.4"/>
                </g>
                <rect id="bar" x="40" y="20" width="15" height="55" fill="#282828"/>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="95" height="630" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="20"/>
                        <feGaussianBlur stdDeviation="20"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
            </svg>
            <img class="icon" src="../assets/svg/Cog.svg" style="grid-area: i1">
            <p style="grid-area: d1">Prototype Completed</p>
            <img class="icon" src="../assets/svg/UserTested.svg" style="grid-area: i2">              
            <p style="grid-area: d2">User Tested</p>
            <img class="icon" src="../assets/svg/Released.svg" style="grid-area: i3">
            <p style="grid-area: d3">Version 1.0</p>
            <img class="icon" src="../assets/svg/Upgrade.svg" style="grid-area: i4">
            <p style="grid-area: d4">Version 1.1</p>
            <img class="icon" src="../assets/svg/SC.svg" style="grid-area: i5">
            <p style="grid-area: d5">Strength and Conditioning Addon</p>
        </div>    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Roadmap'
            }
        }
    }
</script>

<style scoped>
    #roadmap {
        line-height: 5em;
        display: grid;
        grid-template-areas: 
            "i1 p d1"
            "i2 p d2"
            "i3 p d3"
            "i4 p d4"
            "i5 p d5";
            grid-template-columns: 0.1fr 0.1fr 1fr;
            grid-template-rows: repeat(5, 1fr);
    }
    #roadmap > div {
        margin: 1em 0;
    }
    #roadmap > div > p {
        margin: 0 1em;
    }
    .icon {
        text-align: center;
        margin: none;
        height: 5em;
        width: 5em;
    }
    #bar {
        animation: fadeInf 1000ms infinite;
        animation-direction: alternate;
    }
    @keyframes fadeInf {
        from {
            fill-opacity: 50%;
        }
        to {
            fill-opacity: 100%;
        }
    }
</style>