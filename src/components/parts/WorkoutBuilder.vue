<template>
<div>
    <div>
      <div id="workout--container">
        <div id="workout__header">
          <p><b>Full Body Smash-Up</b></p>
          <inline-svg id="info" @click="show()" class="svg" :src="require('../../assets/svg/demo/Info.svg')"/>
        </div>
        <quill output="html"></quill>
      </div>
    </div>
  </div>
</template>

<script>
  import InlineSvg from 'vue-inline-svg'

  export default {
    components: {
      InlineSvg
    },
    methods: {
      show() {
        this.$modal.show('format');
      },
      hide() {
        this.$modal.hide('format');
      }
    }
  }
</script>

<style>
  /* Container */
  #workout--container {
    width: 400px;
    height: 500px;
    background-color: white;
    box-shadow: 0 20px 20px rgba(0, 0, 0, .1)
  }

  /* Header */
  #workout__header {
    height: 2.5rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    display: grid;
    grid-template-columns: 1fr 24px;
    padding: .2rem 1rem;
    place-content: center
  }
  #workout__header p {
    margin: 0
  }

  /* Modal */
  .vm--modal {
    padding: .6rem 2rem
  }
  .vm--container .vm--overlay {
    background: transparent
  }

  /* SVG Btns */
  #workout__header svg {
    height: 24px;
    width: 24px;
    cursor: pointer;
    opacity: 1;
    transition: all .4s cubic-bezier(.165, .84, .44, 1)
  }
  #workout__header svg:hover {
    opacity: .6
  }

  /* Quill */
  .ui.attached.segment.ql-container.ql-snow {
    background-color: white;
    border: none
  }
  .ql-editor {
    overflow-y: auto;
    width: 100%;
    max-height: 40vh
  }
  div.ql-toolbar.ql-snow {
    border: 0
  }

  @media (max-width: 992px) {
    #workout--container {
      width: 350px
    }
  }
  @media (max-width: 768px) {
    #workout--container {
      width: 400px
    }
  }
  @media (max-width: 576px) {
    #workout--container {
      width: 250px
    }
  }
</style>