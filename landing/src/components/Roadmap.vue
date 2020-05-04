<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut unde quidem ipsum error, dolor magnam, eos, dolorem sed veritatis incidunt eaque natus? Officia, quos aliquam consectetur natus reiciendis ea.</p><br>
        <div id="roadmap">
            <svg id="progress" width="95" height="600" viewBox="0 0 95 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="20" width="15" height="520" fill="#e9e9e9"/>
                <rect id="progress__bar" x="40" y="20" width="15" height="40" fill="url(#grad)"/>
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="50%" style="stop-color: #282828" />
                        <stop offset="100%" style="stop-color: #686868" />
                    </linearGradient>
                </defs>
            </svg>
            <img class="icon" src="../assets/svg/Cog.svg" style="grid-area: i1">
            <p style="grid-area: d1"><b>{{i1}}</b><br></p>
            <img class="icon" src="../assets/svg/UserTested.svg" style="grid-area: i2">              
            <p style="grid-area: d2"><b>{{i2}}</b><br></p>
            <img class="icon" src="../assets/svg/Released.svg" style="grid-area: i3">
            <p style="grid-area: d3"><b>{{i3}}</b><br></p>
            <img class="icon" src="../assets/svg/Upgrade.svg" style="grid-area: i4">
            <p style="grid-area: d4"><b>{{i4}}</b><br></p>
            <img class="icon" src="../assets/svg/SC.svg" style="grid-area: i5">
            <p style="grid-area: d5"><b>{{i5}}</b></p>
        </div>    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Roadmap',
                i1: 'Prototyping',
                i2: 'User Testing',
                i3: 'Version 1.0',
                i4: 'Version 1.1',
                i5: 'Strength and Conditioning Add-on'
            }
        }
    }
</script>

<style scoped>
    #roadmap {
        line-height: 5rem;
        display: grid;
        grid-template-areas: 
            "i1 p d1"
            "i2 p d2"
            "i3 p d3"
            "i4 p d4"
            "i5 p d5";
        grid-template-columns: 0.1fr 0.1fr 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-gap: 0 1rem;
        width: fit-content;
        height: auto;
        margin: 0 0 0 10%;
    }
    #roadmap > div {
        margin: 1rem 0;
    }
    #roadmap > div > p {
        margin: 0 1rem;
    }
    .icon {
        margin: auto;
        text-align: center;
        height: 4rem;
        width: 4rem;
    }
    #progress {
        grid-area: p;
    }
    #progress__bar {
        animation: fadeInf 1000ms infinite;
        animation-direction: alternate;
    }
    @keyframes fadeInf {
        from {
            fill-opacity: 60%;
        }
        to {
            fill-opacity: 100%;
        }
    }
</style>