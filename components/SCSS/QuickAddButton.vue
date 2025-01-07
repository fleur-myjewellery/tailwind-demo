<template>
    <button class="rounded-full h-8 w-8 bg-white text-gray-500 quick-add-button">
        {{ name }}
    </button>
</template>
<script setup>
defineProps({
    name: {
        type: String,
    }
})
</script>
<style lang="scss">
.quick-add-button {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: white;
    color: grey;
}
</style>