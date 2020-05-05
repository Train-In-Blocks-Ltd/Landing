<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <div class="spacer"></div>
        <div class="container--2c">
            <Editor></Editor>
            <div>
                <div class="spacer"></div>
                <h2>Say Goodbye to Manually Tracking Data</h2>
                <p>Our text box will understand the workouts and will do all the math for you!!</p>
                <h2>Just learn the format and start speaking with us.</h2>
                <p>A) Back Squat: 3 x 6 at 70/80/90kg<br>B) Bench Press: 2 x 15 at 50/55/60kg</p>
            </div>
        </div>
        <div class="spacer"></div>
        <div class="container--2c">
            <div id="stats">
            <h2>Statistics</h2>
            <select>
                <option>Select a Measure</option>
                <option>Sets</option>
                <option>Reps</option>
                <option>Load</option>
                <option>Volume</option>
            </select>
            </div>
            <line-chart id="chart"></line-chart><br><br>
        </div>
        <div class="spacer"></div>
        <h1>{{featuresTitle}}</h1><br>
        <div class="container--features" v-for="feature in features" :key="feature.id">
            <img class="icon" :src="feature.icon">
            <div>
                <h2>{{feature.subtitle}}</h2>
                <p>{{feature.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from './Chart'
    import Editor from './WorkoutBuilder'
    import reduceTime from '../assets/svg/features/reduceTime.svg'
    import powerful from '../assets/svg/features/powerful.svg'
    import visualGrid from '../assets/svg/features/visualGrid.svg'
    import cloud from '../assets/svg/features/cloud.svg'
    import easyPlanning from '../assets/svg/features/easyPlanning.svg'
    import sleek from '../assets/svg/features/sleek.svg'
    import cheap from '../assets/svg/features/cheap.svg'
    import noLimits from '../assets/svg/features/noLimits.svg'
    import toolkit from '../assets/svg/features/toolkit.svg'
    import learn from '../assets/svg/features/learn.svg'

    export default {
        components: {
            LineChart,
            Editor
        },
        data() {
            return {
                title: 'Give it a try!',
                featuresTitle: 'What\'s included?',
                features: [
                    {id: 1, subtitle: 'Save Time', desc: 'Create a new long-term bespoke programme in less than 10 minutes.', icon: reduceTime},
                    {id: 2, subtitle: 'Powerful', desc: 'Powerful workout design tool using free-form text editors.', icon: powerful},
                    {id: 3, subtitle: 'Visual', desc: 'Show the client a graphic overview of their programme using a block periodisation model.', icon: visualGrid},
                    {id: 4, subtitle: 'Cloud', desc: 'It\'s all on the internet. Access anytime and anywhere.', icon: cloud},
                    {id: 5, subtitle: 'Easy Planning', desc: 'Copy the workouts across a set time-frame with one-click. Then make any changes required for programme progression.', icon: easyPlanning},
                    {id: 6, subtitle: 'Sleek and Minimal UI', desc: 'Minimal and easy to understand. Simplicity goes a long way.', icon: sleek},
                    {id: 7, subtitle: 'Super Affordable', desc: 'No complicated pricing plans with different restrictions. Just pay and get instant access.', icon: cheap},
                    {id: 8, subtitle: 'Unlimited Clients and Programmes', desc: 'There are no limits on number of clients or programmes.', icon: noLimits},
                    {id: 9, subtitle: 'In-Session Toolkit', desc: 'Collect, store and visualise data collected within sessions. E.g. Vertical CMJ, RPE, etc.', icon: toolkit},
                    {id: 10, subtitle: 'Connect, Learn and Grow', desc: 'Access resources and materials to boost your career by staying up-to-date with the industry.', icon: learn}
                ],
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
        margin: 0;
    }
    .container--2c {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .container--2c > p {
        padding: 6vh 3vw;
    }
    .container--features {
        display: grid;
        grid-template-columns: 0.4fr 1fr;
        width: 100%;
        margin: 4rem 0;
    }
    .container--features > div > p{
        width: 80%;
    }
    .icon {
        margin: auto;

        text-align: center;
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