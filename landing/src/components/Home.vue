<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum, similique eligendi labore sit alias laudantium commodi consequatur voluptatibus necessitatibus expedita reprehenderit ex incidunt quis dolores architecto ullam fuga provident.</p>
        <div id="container--2c3r">
            <div style="text-align: right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus numquam corrupti enim neque omnis molestiae corporis aut accusamus quae!</div>
            <div class="img">Image Goes Here</div>
            <div class="img">Image Goes Here</div>
            <div style="text-align: left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores repellat porro consequuntur vel provident mollitia!</div>
            <div style="text-align: right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi dolorum voluptatem illum iste. Minima repellendus numquam architecto necessitatibus ea facilis!</div>
            <div class="img">Image Goes Here</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Welcome'
            }
        }
    }
</script>

<style scoped>
    #container--2c3r {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 1em;
        height: 50vh;
    }
    #container--2c3r > div {
        margin: 5vh 0;
        padding: 3em 0;
    }
    .img {
        background-color: #c4c4c4;
        width: 100%;
        height: 20vh;
        text-align: center;
        line-height: 10vh;
    }
</style>