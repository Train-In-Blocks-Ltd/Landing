<template>
  <div>
    <div id="workout__header"></div>
    <quill output="html"></quill>
  </div>
</template>

<style>
  #workout__header {
    height: 2.5rem;
    box-shadow: 0 20px 15px rgba(0, 0, 0, .05)
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
</style>