<template>
    <div>
        <div id="workout">
            <div id="workout__header"></div>
            <quill output="html"></quill>
        </div>
    </div>
</template>

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