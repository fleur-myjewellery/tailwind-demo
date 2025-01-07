<template>
    <div class="card">
      <div class="image-container">
        <TailwindLabel title="Gratis gravering" class="label" />
        <TailwindQuickAddButton class="quick-add-button top-right" name="W" />
        <img 
          :src="primaryImage" 
          alt=""
          class="primary-image"
          :class="{ 'opacity-0': isHovered }"
        />
        <img 
          :src="hoverImage" 
          alt=""
          class="hover-image"
          :class="{ 'opacity-0': !isHovered }"
        />
        <TailwindQuickAddButton class="quick-add-button bottom-right" name="C" />
        <div 
          class="hover-area"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        ></div>
      </div>
      <div class="product-info">
        <span class="product-title">
          {{ productTitle }}
        </span>
        <span class="product-price">
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
  
  <style scoped lang="scss">
  .card {
    width: 256px;
    height: 384px;
    margin-bottom: 24px;
    cursor: pointer;
  
    .image-container {
      position: relative;
      height: 90%;
      margin: 0 auto;
    }
  
    .label {
      position: absolute;
      top: 0;
      left: 0;
      margin: 16px;
      z-index: 10;
      height: 32px;
      display: flex;
      align-items: center;
      padding: 8px;
    }
  
    .quick-add-button {
      position: absolute;
      margin: 16px;
      z-index: 10;
  
      &.top-right {
        top: 0;
        right: 0;
      }
  
      &.bottom-right {
        bottom: 0;
        right: 0;
      }
    }
  
    .primary-image,
    .hover-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.3s ease;
    }
  
    .hover-area {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  
    .product-info {
      display: flex;
      flex-direction: column;
      margin: 8px;
  
      .product-title {
        font-size: 12px;
      }
  
      .product-price {
        font-size: 14px;
      }
    }
  }
  </style>
  