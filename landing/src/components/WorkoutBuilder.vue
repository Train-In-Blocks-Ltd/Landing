<template>
    <div>
        <div id="workout">
            <div id="workout__header"></div>
            <quill output="html"></quill>
        </div>
    </div>
</template>

<script>
/*
    export default {
        data() {
            return {
                examples: [
                    {id: 1, workout: '<p>WORKOUT 1</p><p>Warm-Up</p><p>A) Treadmill: 10 min </p><p>- Take it light and easy.</p><p>Main CV</p><p>B) Rower: 1500m</p><p>- Back straight </p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p>Main resistance</p><p>A) Bench Press: 2x20 at 40/45kg</p><p>B) Incline Dumbbell Press: 2x18 at 14/16kg</p><p>C) Decline Dumbbell Press: 2x16 at 12/14kg</p><p>Cooldown</p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p>'},
                    {id: 2, workout: '<p>WORKOUT 2</p><p>Warm-Up</p><p>A) Treadmill: 10 min </p><p>- Take it light and easy.</p><p>Main CV</p><p>B) Rower: 1500m</p><p>- Back straight </p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p>Main resistance</p><p>A) Bench Press: 2x15 at 50/60kg</p><p>B) Incline Dumbbell Press: 2x12 at 14/16kg</p><p>C) Decline Dumbbell Press: 2x10 at 18/18kg</p><p>Cooldown</p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p>'},
                    {id: 3, workout: '<p>WORKOUT 3</p><p>Warm-Up</p><p>A) Treadmill: 10 min </p><p>- Take it light and easy.</p><p>Main CV</p><p>B) Rower: 1500m</p><p>- Back straight </p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p>Main resistance</p><p>A) Bench Press: 3x10 at 40/47.5/50kg</p><p>B) Incline Dumbbell Press: 3x12 at 16/18/20kg</p><p>C) Decline Dumbbell Press: 2x10 at 16/18/20kg</p><p>Cooldown</p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p>'},
                    {id: 4, workout: '<p>WORKOUT 4</p><p>Warm-Up</p><p>A) Treadmill: 10 min </p><p>- Take it light and easy.</p><p>Main CV</p><p>B) Rower: 1500m</p><p>- Back straight </p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p>Main resistance</p><p>A) Bench Press: 3x6 at 50/60/62.5kg</p><p>B) Incline Dumbbell Press: 3x8 at 20/20/22kg</p><p>C) Decline Dumbbell Press: 3x10 at 18/20/24kg</p><p>Cooldown</p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p>'}
                ]
            }
        }   
    }
*/
</script>

<style>
    #workout {
        display: grid;
        grid-template-rows: auto 1fr ;
        height: 50vh;
        width: 25vw;
        box-shadow: 0px 20px 40px 12px rgba(0,0,0,0.1);
        margin: 3em 0;
        
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1em;
    }
    #workout__header {
        height: 2.5em;
        width: 100%;
        box-shadow: 0px 20px 15px rgba(0,0,0,0.05);
    }
    #workout__editor {
        height: 100%;
        width: 100%;
    }
    #workout__editor > textarea {
        margin: 0 1vw;
        background-color: transparent;
        height: 91%;
        width: 91%;
        border: none;
        resize: none;
        outline-width: 0;

        font-family: arial;
        font-size: 1em;
        letter-spacing: 0.10em;
        color: #282828;
    }

    /* Quill */
    .ui.attached.segment.ql-container.ql-snow {
        background-color: #fff;
        border: none;
        height: 41vh;
        width: 25vw;
    }
    .ql-editor {
        overflow-y: auto;
    }
    .ql-toolbar.ql-snow {
        border: none!important;
    }

    /* Responsiveness */
    @media (max-width: 768px) {
        #workout {
            grid-template-columns: 1fr;
            width: auto;
        }
    }
</style>