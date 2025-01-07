<template>
    <button class="bg-black w-48 h-14 p-6 text-white flex justify-center items-center rounded-md hover:shadow-md">
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