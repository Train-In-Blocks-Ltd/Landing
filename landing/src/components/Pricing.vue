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
        height: 30vh;
        box-shadow: 0px 20px 40px 12px rgba(0,0,0,0.05);
        background-color: #fff;
        padding: 2em;
        text-align: center;
    }
    p {
        text-align: left;
    }
</style>