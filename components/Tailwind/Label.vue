<template>
    <div class="bg-white rounded text-xs">
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