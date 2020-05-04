<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <div id="pricing">
            <div class="pricing__plans">
                <img class="icon--gif" src="../assets/gif/deadlift.gif"/>
                <h2>Basic - Monthly</h2>
                <h1 class="pricing__cost">£10</h1>
            </div>
            <div class="pricing__plans">
                <img class="icon--gif" src="../assets/gif/trophy.gif"/>
                <h2 id="pro" href="https://trolley.link/p/" data-trolley="true" data-tpk="">Pro - Yearly</h2>
                <h1 class="pricing__cost">£90</h1>
                <p>Save 25% on the annual plan,<br><b>that's £7.50/month</b></p>
            </div>    
        </div>
        <button id="button--start" >What are you waiting for?</button>
        <footer>
            <a class="ref--icons8" target="_blank" href="https://icons8.com">Icons8</a>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Pricing'
            }
        }
    }
</script>

<style scoped>
    #pricing {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1vw;
        margin-top: 3rem;
    }
    .pricing__plans {
        height: 35vh;
        box-shadow: 0px 20px 40px 12px rgba(0,0,0,0.05);
        background-color: #fff;
        padding: 2rem;
        text-align: center;
    }
    .pricing__plans > p {
        margin: 0;
    }
    .pricing__cost {
        font-size: 4rem;
        margin-bottom: 0;
    }
    #button--start {
        background-color: transparent;
        border: 1px solid #282828;
        width: 100%;
        height: 3rem;
        outline-width: 0;
        margin: 2rem 0;

        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        letter-spacing: 0.15rem;

        cursor: pointer;
        transition: all 400ms;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    #button--start:hover {
        background-color: #282828;
        color: #fff;
    }
    h2 {
        width: fit-content;
        padding: 0.1rem 1rem;
        margin: auto;
    }
    #pro {
        background-color: #282828;
        color: #fff;
    }
    footer {
        text-align: right;
    }
    .icon--gif {
        margin: 3rem;
    }
    @media (max-width: 992px) {
        #pricing {
            grid-template-columns: 1fr;
        }
    }
    @media (max-width: 576px) {
        .pricing__plans {
            background-color: transparent;
            padding: 0;
            box-shadow: none;
        }
    }
</style>