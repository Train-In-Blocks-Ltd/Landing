<style>
.txt-input {
  @apply w-full px-2 py-3 font-sans outline-none text-base bg-transparent text-slate dark:text-white border-2 border-gray-400 dark:border-graphite rounded-lg hover:border-slate focus:border-slate dark:hover:border-white dark:focus:border-white transition-all;
}
</style>

<template>
  <div class="h-fit cursor-pointer self-center">
    <label v-if="label" :for="name" :class="labelClass">
      {{ label }}
    </label>
    <input
      :id="inputId"
      :name="name"
      :value="value"
      :class="inputClass"
      :type="type"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      :pattern="pattern"
      :required="required"
      class="txt-input"
      @input="handleInput"
    />
    <txt v-if="error" type="tiny" class="text-red mt-1" :class="errorClass">{{
      error
    }}</txt>
  </div>
</template>

<script>
import Txt from "../elements/Txt";

export default {
  components: {
    Txt,
  },
  props: {
    inputId: String,
    inputRef: String,
    name: String,
    label: String,
    error: String,
    value: String,
    inputClass: String,
    labelClass: String,
    errorClass: String,
    type: String,
    rel: String,
    inputmode: String,
    autocomplete: String,
    placeholder: String,
    ariaLabel: String,
    pattern: String,
    onInput: Function,
    required: Boolean,
    focusFirst: Boolean,
  },
  mounted() {
    if (this.focusFirst) this.$el.children[0].focus();
  },
  methods: {
    handleInput(e) {
      this.$emit("output", e.target.value);
      if (this.onInput) this.onInput();
    },
  },
};
</script>
