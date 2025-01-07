<template>
    <div class="h-96 w-64 mb-6 hover:cursor-pointer">
        <div class="relative h-[90%] mx-auto">
            <TailwindLabel title="Perfect gift" class="absolute top-0 left-0 m-4 z-10 h-8 flex items-center p-2" />
            <TailwindQuickAddButton class="absolute top-0 right-0 m-4 z-10" name="W" />
            <img 
                :src="primaryImage" 
                alt=""
                class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                :class="{ 'opacity-0': isHovered }"
            >
            <img 
                :src="hoverImage" 
                alt=""
                class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                :class="{ 'opacity-0': !isHovered }"
            >
            <TailwindQuickAddButton class="absolute bottom-0 right-0 m-4 z-10" name="C" />
            <div 
                class="absolute top-0 left-0 w-full h-full"
                @mouseenter="isHovered = true"
                @mouseleave="isHovered = false"
            ></div>
        </div>
        <div class="flex flex-col m-2">
            <span class="text-xs">
                {{ productTitle }}
            </span>
            <span class="text-sm">
                {{ productPrice }}
            </span>
        </div>
    </div>
</template>
<script setup>
defineProps({
    primaryImage: {
        type: String
    },
    hoverImage: {
        type: String
    },
    productTitle: {
        type: String
    },
    productPrice: {
        type: String
    }
})

const isHovered = ref(false)
</script>