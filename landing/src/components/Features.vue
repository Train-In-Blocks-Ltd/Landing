<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquid obcaecati consectetur nihil quis voluptates, at beatae quisquam quasi animi autem assumenda fugiat? Deleniti sit fugit qui ad amet corporis, placeat eos repellat nam voluptate obcaecati eaque praesentium quibusdam voluptatibus optio harum sed laborum! Rerum, officiis. Sapiente doloribus itaque iste.</p>
        <div id="container--2c">
            <line-chart id="container--2c__chart"></line-chart>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit facilis enim necessitatibus voluptatibus. Nobis mollitia quasi, aperiam error expedita maxime maiores nemo quia necessitatibus excepturi! Ut accusantium optio et quas aliquam! Iste consequatur nam illo soluta voluptatum dignissimos recusandae inventore, alias atque minima! Molestiae corporis sapiente deserunt consectetur maxime.</p>
        </div>
    </div>
</template>

<script>
    import LineChart from './Chart'

    export default {
        components: {
            LineChart
        },
        data() {
            return {
                title: 'Features',
            }
        },
    }
</script>

<style scoped>
    #container--2c {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    #container--2c__chart {
        width: 100%;
        height: 100%;
    }
    #container--2c > p {
        padding: 0 1.5em;
    }
</style>