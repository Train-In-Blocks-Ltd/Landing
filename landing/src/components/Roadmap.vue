<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut unde quidem ipsum error, dolor magnam, eos, dolorem sed veritatis incidunt eaque natus? Officia, quos aliquam consectetur natus reiciendis ea.</p><br>
        <div id="roadmap">
            <div>
                <div class="icon">Icon</div>
                <p>Prototype Completed</p>
            </div>
            <div>
                <div class="icon">Icon</div>
                <p>User Tested</p>
            </div>
            <div>
                <div class="icon">Icon</div>
                <p>Version 1.0</p>
            </div>
            <div>
                <div class="icon">Icon</div>
                <p>Version 1.1</p>
            </div>     
            <div>
                <div class="icon">Icon</div>
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
        background-color: #c4c4c4;
        text-align: center;
        height: 5em;
        width: 5em;
    }
</style>