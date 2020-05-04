<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <div class="spacer"></div>
        <div class="container--2c">
            <Editor></Editor>
            <div>
                <h2>Say Goodbye to Manually Tracking Data</h2>
                <p>Our text box will understand the workouts and will do all the math for you!!</p>
                <h2>Just learn the format and start speaking with us.</h2>
                <p>A) Back Squat: 3 x 6 at 70/80/90kg<br>B) Bench Press: 2 x 15 at 50/55/60kg</p>
            </div>
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
                title: 'Give it a try!',
            }
        }
    }
</script>

<style scoped>
    #chart {
        width: 100%;
        height: 100%;
        margin: auto;
    }
    h2 {
        margin: 2rem 0 0 0;
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