<template>
    <div>
        <h1 class="paper--title">{{title}}</h1>
        <div class="spacer"></div>
        <div class="container--2c">
            <div class="form--subscribe">
                <form action="https://traininblocks.us8.list-manage.com/subscribe/post?u=a2c4d1f0522fa78cbfc518fc0&amp;id=73101450d0" method="post" id="subscribe" name="subscribe" class="validate" target="_blank" novalidate>
                    <div class="subscribe__field">
                        <label for="email">Email</label><br>
                        <input type="email" value="" name="email" class="required email" id="email">
                    </div>
                    <div class="subscribe__field">
                        <label for="fname">First Name</label><br>
                        <input type="text" value="" name="fname" class="" id="fname">
                    </div>
                    <div class="subscribe__field">
                        <label for="lname">Last Name</label><br>
                        <input type="text" value="" name="lname" class="" id="lname">
                    </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>
                    <input class="submit" type="submit" value="Subscribe" name="subscribe">
                </form>
            </div>
            <div class="desc--subscribe">
                <h1>Get More From Our Emails</h1>
                <button class="submit">Test Button</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Our Philosophy'
            }
        }
    }
</script>

<style scoped>
    .container--2c {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .form--subscribe {
        width: 100%;
        height: auto;
    }
    .subscribe__field {
        margin: 3rem 0;
    }
    .subscribe__field > label {
        font-weight: 700;
    }
    .subscribe__field > input {
        border: none;
        border-bottom: 1px solid #282828;
        padding: 0.4rem;
        outline-width: 0;
        width: 70%;
        margin: 1rem 0;

        font-size: 1rem;
        letter-spacing: 0.10rem;

        transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .subscribe__field > input:hover, .subscribe__field > input:focus {
        width: 80%;
    }
    .submit {
        border: 1px solid #282828;
        background-color: transparent;
        padding: 0.5rem 1rem;
        cursor: pointer;
        outline-width: 0;

        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.1rem;

        transition: color 400ms, background-color 400ms, transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1);
    } 
    .submit:hover {
        background-color: #282828;
        color: #fff;
    }
    .submit:active {
        transform: scale(0.9);
    }
</style>