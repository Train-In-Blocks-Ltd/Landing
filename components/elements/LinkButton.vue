<template>
  <a
    :href="link"
    :target="newTab && '_blank'"
    class="font-bold px-6 py-3 bg-gray-800 text-white rounded hover:opacity-75 transition-all"
    ><slot
  /></a>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: ''
        },
        newTab: Boolean
    }
}
</script>
