<template>
    <button class="rounded-full h-8 w-8 bg-white text-gray-500">
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