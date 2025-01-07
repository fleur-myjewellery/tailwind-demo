<template>
    <button class="button">
        {{ title }}
    </button>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
        }
    });
</script>

<style lang="scss">
.button {
    background-color: black;
    padding: 1.5rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 3.5rem;
    border-radius: 0.375rem;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
    }
}
</style>
