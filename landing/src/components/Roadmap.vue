<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut unde quidem ipsum error, dolor magnam, eos, dolorem sed veritatis incidunt eaque natus? Officia, quos aliquam consectetur natus reiciendis ea.</p><br>
        <div id="roadmap">
            <div>
                <img class="icon" src="../assets/svg/Cog.svg">
                <p>Prototype Completed</p>
            </div>
            <div>
                <img class="icon" src="../assets/svg/UserTested.svg">              
                <p>User Tested</p>
            </div>
            <div>
                <img class="icon" src="../assets/svg/Released.svg">
                <p>Version 1.0</p>
            </div>
            <div>
                <img class="icon" src="../assets/svg/Upgrade.svg">
                <p>Version 1.1</p>
            </div>     
            <div>
                <img class="icon" src="../assets/svg/SC.svg">
                <p>Strength and Conditioning Addon</p>
            </div>    
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
    }
    #roadmap > div {
        display: flex;
        flex-direction: row;
        margin: 1em 0;
    }
    #roadmap > div > p {
        margin: 0 1em;
    }
    .icon {
        text-align: center;
        height: 4em;
        width: 4em;
    }
</style>