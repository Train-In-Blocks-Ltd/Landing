<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque voluptatibus eum, culpa quaerat id sit sed asperiores fuga voluptatum optio officiis natus repellat reprehenderit atque quibusdam quia, quae soluta magnam, dolore ipsum hic? Dignissimos illum consequatur aliquid deserunt aspernatur?</p>
        <div class="spacer"></div>
        <div id="blog">
            <div id="blog__post"> Blog Post Goes Here!!</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Explore'
            }
        }
    }
</script>

<style scoped>
    #blog {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fill, 30vh);
    }
    #blog__post { 
        background-color: #c4c4c4;
        width: auto;
    }
</style>