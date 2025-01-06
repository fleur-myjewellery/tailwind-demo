<template>
    <button class="bg-black p-6 text-white flex justify-center w-48 rounded-md hover:shadow-md">
        {{ title }}
    </button>
</template>
<script setup>
    defineProps({
        title:{
            type: String,
        }
    })
</script>