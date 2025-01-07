<template>
    <div class="label">
        {{ title }}
    </div>
</template>
<script setup>
defineProps({
    title: {
        type: String
    }
})
</script>
<style lang="scss">
.label {
    background-color: white;
    border-radius: 4px;
    font-size: 12px;
}
</style>