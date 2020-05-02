<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum, similique eligendi labore sit alias laudantium commodi consequatur voluptatibus necessitatibus expedita reprehenderit ex incidunt quis dolores architecto ullam fuga provident.</p>
        <div id="container--2c">
            <img id="laptop" src="../assets/svg/Laptop.svg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt dignissimos natus fuga aspernatur voluptatum.</p>
        </div>
        <div class="spacer"></div>
        <div id="container--2c3r">
            <div style="text-align: right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus numquam corrupti enim neque omnis molestiae corporis aut accusamus quae!</div>
            <img class="img" src="../assets/Barbell.jpg"/>
            <img class="img" style="float: left" src="../assets/LegPress.jpg" />
            <div style="text-align: left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores repellat porro consequuntur vel provident mollitia!</div>
            <div style="text-align: right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorum voluptatem illum iste. Minima repellendus numquam architecto necessitatibus ea facilis!</div>
            <img class="img" src="../assets/Stretch.jpg"/>
        </div>
    </div>
</template>

<script>
    export default {
        component: {
        },
        data() {
            return {
                title: 'Welcome'
            }
        }
    }
</script>

<style scoped>
    #container--2c {
        display: grid;
        grid-template-columns: 1fr 0.6fr;
        grid-gap: 1em;
        height: auto;
        width: 100%;
        margin: 5vh 0;
    }
    #container--2c > p {
        text-align: left;
    }
    #container--2c3r {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 5em 1em;
        height: auto;
    }
    #container--2c3r > div {
        margin: 5vh 0;
    }
    .img {
        width: 100%;
    }
    #laptop {
        width: 30vw;
    }
</style>