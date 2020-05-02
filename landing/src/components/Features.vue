<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aliquid obcaecati consectetur nihil quis voluptates, at beatae quisquam quasi animi autem assumenda fugiat? Deleniti sit fugit qui ad amet corporis, placeat eos repellat nam voluptate obcaecati eaque praesentium quibusdam voluptatibus optio harum sed laborum! Rerum, officiis. Sapiente doloribus itaque iste.</p>
        <h2>Give it a try!!</h2>
        <div class="container--2c">
            <Editor></Editor>
            <p><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, animi.</b><br><br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla?</p>
        </div>
        <div class="spacer"></div>
        <line-chart id="chart"></line-chart><br><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit facilis enim necessitatibus voluptatibus. Nobis mollitia quasi, aperiam error expedita maxime maiores nemo quia necessitatibus excepturi! Ut accusantium optio et quas aliquam! Iste consequatur nam illo soluta voluptatum dignissimos recusandae inventore, alias atque minima! Molestiae corporis sapiente deserunt consectetur maxime.</p>        
        <div class="spacer"></div>
    </div>
</template>

<script>
    import LineChart from './Chart'
    import Editor from './WorkoutBuilder'

    export default {
        components: {
            LineChart,
            Editor
        },
        data() {
            return {
                title: 'Features',
            }
        },
    }
</script>

<style scoped>
    #chart {
        width: 100%;
        height: 100%;
        margin: auto;
    }
    h2 {
        margin: 2em 0 0 0;
    }
    .container--2c {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .container--2c > p {
        padding: 6vh 3vw;
    }
    @media (max-width: 768px) {
        .container--2c {
            grid-template-columns: 1fr;
        }
        .container--2c > p {
            padding: 2vh 1vw;
        }
    }
</style>