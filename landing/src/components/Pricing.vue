<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <div id="pricing">
            <div class="pricing__plans">
                <h3>Basic</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe modi consequatur cumque asperiores sunt nihil, repudiandae ipsa? Ipsum voluptatum minus ducimus tempore vel modi, et perferendis quis incidunt ab.</p>
            </div>
            <div class="pricing__plans">
                <h3>Pro</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero ut voluptatum debitis ipsa consequatur deleniti molestiae totam voluptates animi, blanditiis ex illo? Reprehenderit ex minima vitae quidem sit quos!</p>
            </div>    
        </div>
        <button id="button--start">What are you waiting for?</button>
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
        margin-top: 3em;
    }
    .pricing__plans {
        height: fit-content, 100%;
        box-shadow: 0px 20px 40px 12px rgba(0,0,0,0.05);
        background-color: #fff;
        padding: 2em;
        text-align: center;
    }
    p {
        text-align: left;
    }
    #button--start {
        background-color: transparent;
        border: 1px solid #282828;
        width: 100%;
        height: 3em;
        outline-width: 0;
        margin: 2em 0;

        font-size: 1.5em;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        letter-spacing: 0.15em;

        cursor: pointer;
        transition: all 400ms;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    #button--start:hover {
        background-color: #282828;
        color: #fff;
    }
    @media (max-width: 992px) {
        #pricing {
            grid-template-columns: 1fr;
        }
    }
</style>